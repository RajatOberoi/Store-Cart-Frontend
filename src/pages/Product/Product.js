import React,{useState} from 'react'
import "./Product.scss"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useParams } from 'react-router-dom';
import useFetch from '../../utils/useFetch';
import { useDispatch } from 'react-redux';
import { addToCart,addToWishlist } from '../../redux/cartReducer';

export default function Product() {

    const id = useParams().id
    const [quantity,setQty] = useState(1)
    const dispatch = useDispatch()
    const {data,loading} = useFetch(`/api/products/${id}?populate=*`)

  return (
    <div className="product">
        { loading?"Loading":(<>   
        <div className="left">
            <div className="images">
            <img src={data?.attributes?.img?.data?.attributes?.url} alt="product"/>
            </div>
        </div>
        <div className="mainImg">
            <img src={data?.attributes?.img?.data?.attributes?.url} alt="product-main"/>
        </div>
        <div className="right">
            <h1>{data?.attributes?.title}</h1>
            <p className="price">₹{data?.attributes?.price}</p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed pharetra nisl. Nunc maximus erat et nunc laoreet porta. Phasellus quis eleifend mi. Etiam eget finibus sem, eu maximus turpis.
            </p>
            <div className="productQuantity">
                <span>Quanitity:</span>
                <button onClick={e=>quantity===1? 1: setQty(quantity-1)}>-</button>
                <span>{quantity}</span>
                <button onClick={e=>setQty(quantity+1)}>+</button>
            </div>
            <button className="add" onClick={()=>dispatch(addToCart({
                id: data.id,
                title: data.attributes.title,
                desc: data.attributes.desc,
                price: data.attributes.price,
                img: data.attributes.img.data.attributes.url,
                quantity    
            }))}>
                        <AddShoppingCartIcon/> <p>ADD TO CART</p>
            </button>    
                <div className="item">
                    <button className="add-wish" onClick={()=>dispatch(addToWishlist({
                        id: data.id,
                        title: data.attributes.title,
                        desc: data.attributes.desc,
                        price: data.attributes.price,
                        img: data.attributes.img.data.attributes.url,    
                    }))}>
                    <FavoriteBorderIcon/> <p>ADD TO WISHLIST</p>
            </button>
                    </div>
                <div className="info">
                    <span>Maker: J&J</span>
                    <span>Product Type: {data?.attributes?.sub_categories?.data[0]?.attributes?.title}</span>
                    <span>Tag: {data?.attributes?.sub_categories?.data[0]?.attributes?.title}</span>
                </div>
                <hr/>
            </div>
    </>)
        }
  </div>
  )
}
