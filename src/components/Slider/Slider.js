import React,{useState} from 'react'
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Link } from 'react-router-dom';
import "./Slider.scss"

export default function Slider() {
    const data = ["/images/slide-1.avif","/images/slide-2.avif","/images/slide-3.avif","/images/slide-4.avif"]
    
    const [slide, setSlide] = useState(0)
    
    const prevSlide = ()=>{
            setSlide(slide ===0 ? 3: slide-1)
    }
    const nextSlide = ()=>{
        setSlide(slide ===3? 0: slide+1)
    }
  
    return (
    <div className="slider">
        <div className="image-container">
            <div className="left-icon" onClick={prevSlide}><ArrowCircleLeftIcon/></div>
            {data.map((item,index)=>(<div key={index} className={`image${index === slide ? 'active' : ''}`}>
                <img src={item} alt={index+"pic"} />
            </div>
))}
            <div className="right-icon" onClick={nextSlide}><ArrowCircleRightIcon/></div>
        </div>
        <div className='text-container'>
            <p>SALES</p>
                    <p>
                        Convallis interdum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes parturient posuere
                        curae tempor
                    </p>
                    <Link className="shop-now" to="/products/3">Shop Now</Link>                    
        </div>        
    </div>
  )
}
