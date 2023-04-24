import React,{useState,lazy, Suspense} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import "./Navbar.scss"
import useScrollDirection from '../../utils/giveScrollDirection';
import {useSelector} from 'react-redux';

const Search = lazy(() => import('../Search/Search')); 

export default function Navbar() {
    const [showSearch, setShowSearch] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const visible = useScrollDirection()
    const products = useSelector(state => state.cart.products)
    const wishlist = useSelector(state => state.cart.wishlist)

    if(visible.mobileView){
        return (
            <div className="navbar">
                <div className="wrapper">
                    <div className={mobileMenu?"left-mobile":"left"}>
                        <div className='left-content'>
                            {mobileMenu&&<span className='close-icon'><CloseIcon onClick={()=>setMobileMenu(!mobileMenu)}/></span>}
                            <span className="item">
                                <Link className="link" to="/" onClick={()=>setMobileMenu(!mobileMenu)}>Homepage</Link>
                            </span>
                            <span className="item">
                                <Link className="link" to="/about" onClick={()=>setMobileMenu(!mobileMenu)}>About</Link>
                            </span>
                            <span className="item">
                                <Link className="link" to="/#categories" onClick={()=>setMobileMenu(!mobileMenu)}>Categories</Link>
                            </span>
                            {mobileMenu&&<span className="item">
                            <Link className="link" to="/wishlist" onClick={()=>setMobileMenu(!mobileMenu)}>Wishlist</Link><FavoriteOutlinedIcon/>
                            </span>}
                        </div>
                    </div>    
                    <div className="center">
                        <Link className="link" to="/">Store & Cart</Link>
                    </div>
                    <div className="right">
                        <div className="icons">
                            <SearchIcon onClick={()=>setShowSearch(true)}/>
                            <FavoriteOutlinedIcon className='wishlist'/>
                            <div className="cart-icon">
                               <Link className="link" to="/cart"><ShoppingCartCheckoutIcon/></Link>
                               <span className={products?.length>0?"quantity":"no-item"}>{products?products.length:0}</span>
                            </div>
                            <MenuIcon className='mobile-menu' onClick={()=>setMobileMenu(!mobileMenu)}/>
                        </div>
                    </div>
                </div>
                {showSearch && <Suspense fallback={<div>Loading...</div>}>
    <Search setShowSearch={setShowSearch} />
  </Suspense>}
            </div>
          )
    }
    else{
        return (
            <div className={`navbar ${visible.visibleNavbar?"":"hide"}`}>
                <div className="wrapper">
                    <div className={mobileMenu?"left-mobile":"left"}>
                        <div className='left-content'>
                            {mobileMenu&&<span className='close-icon'><CloseIcon onClick={()=>setMobileMenu(!mobileMenu)}/></span>}
                            <span className="item">
                                <Link className="link" to="/">Homepage</Link>
                            </span>
                            <span className="item">
                                <Link className="link" to="/about">About</Link>
                            </span>
                            <span className="item">
                                <Link className="link" to="/#categories">Categories</Link>
                            </span>
                        </div>
                    </div>    
                    <div className="center">
                        <Link className="link" to="/">Store & Cart</Link>
                    </div>
                    <div className="right">
                        <div className="icons">
                            <SearchIcon onClick={()=>setShowSearch(true)}/>
                            <div className='wishlist'>
                                <span className={wishlist?.length>0?"quant":"no-items"}>
                                <Link className='link' to="/wishlist"><FavoriteOutlinedIcon/></Link>
                                </span>
                            </div>
                            <div className="cart-icon">
                            <Link className="link" to="/cart"><ShoppingCartCheckoutIcon/></Link>
                                <span className={products?.length>0?"quantity":"no-item"}>{products?products.length:0}</span>
                            </div>
                            <MenuIcon className='mobile-menu' onClick={()=>setMobileMenu(!mobileMenu)}/>
                        </div>
                    </div>
                </div>
                {showSearch && <Suspense fallback={<div>Loading...</div>}>
    <Search setShowSearch={setShowSearch} />
  </Suspense>}
            </div>
          )
    }
}
