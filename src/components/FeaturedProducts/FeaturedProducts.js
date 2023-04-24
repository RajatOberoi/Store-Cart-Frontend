import React,{lazy,Suspense} from 'react'
import "./FeaturedProducts.scss"
import useFetch from '../../utils/useFetch'


const Card = lazy(() => import('../Card/Card'));


export default function FeaturedProducts(props) {

    const {data,loading,error} = useFetch(`/api/products?populate=*&filters[type][$eq]=${props.value}`)

  return (
    <div className='FeaturedProducts'>
        <div className="top">
            <h1>{props.type} Products</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pharetra nisl. Nunc maximus erat et nunc laoreet porta. Phasellus quis eleifend mi. Etiam eget finibus sem, eu maximus turpis. Pellentesque consequat ultricies nunc, at sollicitudin mi venenatis sit amet. Duis condimentum, massa ut cursus tincidunt, dolor nisl tincidunt neque, lacinia varius justo lectus id nunc. Aenean a ante pretium, hendrerit lectus quis, consectetur est. In congue feugiat orci, ac fermentum dui consectetur vitae. Nam porta non libero sit amet tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur porttitor nisi lacus, non consequat mauris dictum sed.
            </p>
        </div>
        <div className="bottom">
        { error?"Something went Wrong":
                loading?"Loading":
                (
                  <Suspense fallback={<div>Loading Cards...</div>}>
                    {data?.map((item) => (
                      <Card item={item} key={item.id} />
                    ))}
                  </Suspense>
                )
              }
        </div>
    </div>
  )
}
