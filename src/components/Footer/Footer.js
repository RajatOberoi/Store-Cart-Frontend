import React from 'react'
import "./Footer.scss"

export default function Footer() {
  return (
    <div className="footer">
      <hr/>
    <div className="top">
      <div className="item">
        <h1>Categories</h1>
        <span>Women</span>
        <span>Men</span>
        <span>Sales</span>
        <span>Featured Products</span>
        <span>Trending Products</span>
      </div>
      <div className="item">
        <h1>Products</h1>
        <span>T-Shirts</span>
        <span>Jeans</span>
        <span>Hoodies</span>
      </div>
      <div className="item">
        <h1>Technical Specifications</h1>
        <span>
        Welcome to our e-commerce store! We offer a wide range of products from various categories, all managed with ease using Strapi CMS.
        Our website is built with React and styled with SCSS to ensure a dynamic and visually appealing experience. 
        With Redux Toolkit, we can efficiently manage our application state, and with Stripe, we offer a secure and reliable payment processing platform. 
        Thank you for choosing us!
        </span>
      </div>
    </div>
    <div className="bottom">
      <div className="left">
        <span className="logo">Store & Cart</span>
        <span className="copyright">
          © Copyright 2023. All Rights Reserved
        </span>
      </div>
      <div className="right">
        {/* <img src="/img/payment.png" alt="" /> */}
      </div>
    </div>
  </div>
  )
}
