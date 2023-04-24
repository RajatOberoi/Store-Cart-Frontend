import React from 'react';
import { Link } from 'react-router-dom';
import './Card.scss';

export default function Card({item,value}) {
    if(value){
        return (
            <Link to={`/product/${item.id}`} className="link">
                <div className="card">
                    <div className="image">
                        <img src={process.env.REACT_APP_API_URL+item.attributes.img.data.attributes.url} alt=""/>
                    </div>
                    <h2>{item.attributes.title}</h2>
                    <div className="prices">
                        <h3>₹{item.attributes.price+1000}</h3>
                        <h3>₹{item.attributes.price}</h3>
                    </div>
                </div>
            </Link>
      )
    }
    else{
        return (
            <Link to={`/product/${item.id}`} className="link">
                <div className="card">
                    <div className="image">
                        <img src={process.env.REACT_APP_API_URL+item.attributes.img.data.attributes.url} alt=""/>
                    </div>
                    <h2>{item.attributes.title}</h2>
                    <div className="prices">
                        <h3>₹{item.attributes.price+1000}</h3>
                        <h3>₹{item.attributes.price}</h3>
                    </div>
                </div>
            </Link>
      )
    }
}