import React,{useState} from 'react'
import CloseIcon from '@mui/icons-material/Close';
import "./Search.scss"
import useFetch from '../../utils/useFetch';
import { useNavigate } from "react-router-dom";
import { myDebounce } from '../../utils/myDebounce';



export default function Search({setShowSearch}) {

    const [query,setQuery] = useState(null)
    const { data, loading, error } = useFetch(`/api/products?populate=*&filters[title][$containsi]=${query}`)
    const navigate = useNavigate();

    const getData = (productName)=>{
            if(productName)setQuery(productName)
    }

    const handleChange = myDebounce(getData,2000)

  return (
    <div className="search-panel">
        <div className="search-opac-layer"
       onClick={()=>setShowSearch(false)}>
        </div>
        <div className='search-content'>
            <div className='search-header'>
            <input className="search-heading" type="text" placeholder='Search For Products'  autoFocus onKeyUp={(e)=>{handleChange(e.target.value)}}/>
            <span
                        className="close-btn"
                        onClick={() => setShowSearch(false)}
                    >
                        <CloseIcon className="close-btn" />
                    </span>
                    </div>
            <div className='search-result'>
            {error?"Something went wrong":
                    loading?"Loading":
                    data?.map((item,index)=>
                        <div
                            className="search-result-item"
                            key={item.id}
                            onClick={() => {
                                navigate("/product/" + item.id);
                                setShowSearch(false)
                            }}
                        >
                            <div className="image-container">
                                <img src={process.env.REACT_APP_API_URL+item.attributes.img.data.attributes.url} alt=""/>
                            </div>
                            <div className="prod-details">
                                <span className="name">
                                    {item.attributes.title}
                                </span>
                                <span className="desc">
                                    {item.attributes.desc.slice(0,44)}
                                </span>
                            </div>
                        </div>
                    )}
        </div>
        </div>    
    </div>
  )
}
