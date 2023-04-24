import {useRef,useEffect,lazy,Suspense} from 'react'
import Slider from '../../components/Slider/Slider'
import { useLocation } from 'react-router-dom'
import "./Home.scss"

const Categories = lazy(() => import('../../components/Categories/Categories'));
const FeaturedProducts = lazy(() => import('../../components/FeaturedProducts/FeaturedProducts'));

export default function Home() {
    const categoriesRef = useRef(null);
    const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash === '#categories') {
      categoriesRef.current.scrollIntoView();
    }
  }, [location]);

return (
  <div className="home">
      <Slider />
      <Suspense fallback={<div>Loading Categories and Featured products...</div>}>
        <FeaturedProducts type="Featured" value="topRated" />
        <div ref={categoriesRef}>
          <Categories />
        </div>
        <FeaturedProducts type="Trending" value="bestSeller" />
      </Suspense>
    </div>
    )
}
