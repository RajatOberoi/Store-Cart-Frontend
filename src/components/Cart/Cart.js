import React from 'react'
import { Link } from 'react-router-dom'
import "./Cart.scss"
import { useSelector} from 'react-redux';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import CartItem from './CartItem';


export default function Cart() {

    const products = useSelector(state=> state.cart.products)

    return (
        <div className="cart-panel">
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                </div>
                {!products.length && (
                    <div className="empty-cart">
                        <AddShoppingCartIcon className="empty-cart-image"/>
                        <span className="text">No products in the cart.</span>
                        <Link className="return-home" to="/">
                            RETURN TO SHOP
                        </Link>    
                    </div>
                )}

                {!!products.length && (
                    <>
                        <CartItem />
                    </>
                )}
            </div>       
    </div>    
  )
}
