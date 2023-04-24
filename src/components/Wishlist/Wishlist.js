import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { addToCart,removeFromWishlist } from '../../redux/cartReducer';
import { Link } from 'react-router-dom';
import "./Wishlist.scss"



export default function Wishlist() {
    const wishItems = useSelector(state => state.cart.wishlist)
    const dispatch = useDispatch()
    const quantity = 1
  return (
    <div className='Wishlist-container'>
        <h1>Wishlist Items</h1>
                        {!wishItems.length && (
                    <div className="empty">
                        <ShoppingBagIcon className="empty-bag"/>
                        <span className="text">Add some products to display in the Wishlist</span>
                        <Link className="return-home" to="/">
                            RETURN TO HOME
                        </Link>    
                    </div>
                )}

                {!!wishItems.length && (
                    <div className='wishlist-items-container'>
                        {
                            wishItems.map((item,index)=>(
                                <div className='wishlist-item' key={index}>
                                    <div className='image-container'>
                                        <img src={item.img} alt={'item'+index}/>
                                    </div>
                                    <div className='item-details'>
                                        <p className='title'>{item.title}</p>
                                        <span className='delete-icon'><DeleteOutlineIcon onClick={() => dispatch(removeFromWishlist({ id: item.id }))}/></span>
                                        <p className='price'>Price: &#8377;{item.price}</p>
                                    </div>
                                    <button className="add" onClick={()=>dispatch(addToCart({
                                            id: item.id,
                                            title: item.title,
                                            desc: item.desc,
                                            price: item.price,
                                            img: item.img,quantity    
                                        }))}>
                        <AddShoppingCartIcon/> <p>MOVE TO CART</p>
            </button>
                                </div>
                            ))
                        }
                    </div>)
                }
    </div>
  )
}
