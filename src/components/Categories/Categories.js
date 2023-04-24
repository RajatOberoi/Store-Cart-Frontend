import React from 'react'
import { Link } from 'react-router-dom'
import "./Categories.scss"

export default function Categories() {
  return (
    <div className='categories'>
        <div className='col'>
            <div className='row'>
                <img src="/images/men-cat.avif" alt="men-category"/>
                <Link to="/products/2" className="button-links">Men</Link>
            </div>
            <div className='row'>
                <img src="/images/women-cat.avif" alt="women-cateogry"/>
                <Link to="/products/1" className="button-links">Women</Link>
            </div>
        </div>
        <div className='col'>
            <div className="row">
                        <img src="/images/sale.avif" alt="Sale"/>
                        <Link to="/products/3" className="button-links">Sale</Link>
            </div>
        </div>  
    </div>              
  )
}
