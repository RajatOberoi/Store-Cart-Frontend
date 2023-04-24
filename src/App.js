import { useEffect,lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./App.scss"

const Products = lazy(() => import("./pages/Products/Products"));
const Product = lazy(() => import("./pages/Product/Product"));
const About = lazy(() => import("./components/About/About"));
const Cart = lazy(() => import("./components/Cart/Cart"));
const Wishlist = lazy(()=>import("./components/Wishlist/Wishlist"))
const Success = lazy(()=>import("./pages/Success/Success"))
const Failure = lazy(()=>import("./pages/Failure/Failure"))

const Layout = ()=>{
  const { pathname } = useLocation();

  useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname])
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout/>,
  children: [
    {
      path: "/",
      element: <Home/>,
      },
    {
    path: "/products/:id",
    element: (
      <Suspense fallback={<div>Loading...</div>}><Products/></Suspense>)
    },
    {
      path: "/product/:id",
      element: (
        <Suspense fallback={<div>Loading...</div>}><Product/></Suspense>)
    },
    {
      path: "/cart",
      element: (
        <Suspense fallback={<div>Loading...</div>}><Cart/></Suspense>)
    },
    {
      path: "/wishlist",
      element: (
        <Suspense fallback={<div>Loading...</div>}><Wishlist/></Suspense>)
      },    
    {
      path: "/about",
      element: (
        <Suspense fallback={<div>Loading...</div>}><About/></Suspense>)
    },
    {
      path: "/success",
      element: (
        <Suspense fallback={<div>Loading...</div>}><Success/></Suspense>)
    },
    {
      path: "/failure",
      element: (
        <Suspense fallback={<div>Loading...</div>}><Failure/></Suspense>)
    },
  ]
  },
])

function App() {
  return (
    <div>
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
