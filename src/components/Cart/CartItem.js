import React, { useState } from 'react'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import CircularProgress from '@mui/material/CircularProgress';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/cartReducer';
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from '../../utils/api';
import "./CartItem.scss"

export default function CartItem() {
    const [loader,setLoader] = useState(false)
    const products = useSelector(state => state.cart.products)
    const dispatch = useDispatch()
    let totalPrice = ()=>{
        let total = 0
        products.forEach(item => {
            total += item.quantity*item.price 
        });
        return total.toFixed(2)
    }
    const stripePromise = loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    );
    const handlePayment = async () => {
        setLoader(true)
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders",{products,});
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="cart-products">
            <div className='cart-items'>
                <span>Cart Items:  </span><span>{products?products.length:""}</span>
                {products?.map((item) => (
                    <div
                        className="search-result-item"
                        key={item.id}
                        onClick={() => { }}
                    >
                        <div className="image-container">
                            <img
                                src={item.img
                                }
                                alt=""
                            />
                        </div>
                        <div className="prod-details">
                            <span className="name">{item.title}<span><DeleteOutlineIcon onClick={() => dispatch(removeFromCart({ id: item.id }))} /></span></span>
                            <div className="text">
                                <span>Quantity:{item.quantity}</span>
                                <span>x</span>
                                <span className="highlight">
                                    <span>Price: &#8377;</span>
                                    {item.price}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-footer">
                <span>Summary</span>
                <div className='subtotal-section'>
                        <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">
                                     ₹{totalPrice()}
                                </span>
                            </div>
                            <p>
                                The subtotal is the total of all items and quantities in the Shopping Cart including applied item promotions.
                            </p>
                </div>
                            <div className="button">
                                <button
                                    className="checkout-cta"
                                    onClick={handlePayment}
                                >
                                    Checkout
                                </button>
                                {loader&&<CircularProgress/>}
                            </div>
                        </div>    
        </div>
    )
}
