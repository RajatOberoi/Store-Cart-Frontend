import React, { useState,lazy,Suspense } from 'react'
import { useParams,Link } from 'react-router-dom'
import useFetch from '../../utils/useFetch'
import "./Products.scss"
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';

const List = lazy(() => import('../../components/List/List'));


export default function Products() {

    const catId = useParams().id
    const { data, loading, error } = useFetch(`/api/sub-categories?filters[categories][id][$eq]=${catId}`)
    const [sort, setSort] = useState("asc")
    const [showCat, setShowCat] = useState(false)
    const [showSort, setShowSort] = useState(false)
    const [selectedSubCat, setselectedSubCat] = useState([])
    const [selectedCheckedItems, setSelectedCheckedItems] = useState({})    

    const handleChange = (e,index) => {
        const value = e.target.value
        const isChecked = e.target.checked
        setSelectedCheckedItems(prevState => ({
            ...prevState,
            [index]: isChecked,
          }));
        setselectedSubCat(isChecked ? [...selectedSubCat, value] : selectedSubCat.filter((item) => item !== value))
    }


    return (
        <div className="products">
            <div className="banner">
                <div className="content">
                    <div className="text-content">
                        <h1>SALES</h1>
                        <p>
                            Convallis interdum purus adipiscing dis parturient
                            posuere ac a quam a eleifend montes parturient posuere
                            curae tempor
                        </p>
                        <Link className="shop-now" to="/products/3">Shop Now</Link> 
                    </div>
                    <div className='image-content'>
                        <img className="banner-img" src={`/images/slide-${catId}.avif`} alt={`sales${catId}`} />
                    </div>
                </div>
            </div>
            <div className='product-display'>
                <div className="left-filter-section">
                    <div className="filterItems">
                <div className='filter-wrap'>
                    <h2>Product Categories</h2><span><ArrowDropDownCircleIcon onClick={()=>setShowCat(!showCat)}/></span>
                </div>
                {  showCat && (error?"Something went wrong":
                    loading?"Loading":
                    data?.map((item,index)=>{
                        
                          return(<div className="inputItems" key={item.id}>
                        <input id={item.id} type="checkbox" value={item.id} checked={selectedCheckedItems[index]||false} onChange={(event)=>handleChange(event,index)}/>
                        <label htmlFor={item.id}>{item.attributes.title}</label> 
                    </div>)}))
                } </div>
                    <div className="filterItems">
                        <div className="filter-wrap">
                            <h2>Sort By</h2><span><ArrowDropDownCircleIcon onClick={() => setShowSort(!showSort)} /></span>
                        </div>
                        {showSort && (<div className="inputItems">
                            <input type="radio" id="asc" value="asc" name="price" onChange={() => setSort("asc")} />
                            <label htmlFor='asc'>Price (Lowest First)</label>
                        </div>)}
                        {showSort && (<div className="inputItems">
                            <input type="radio" id="desc" value="desc" name="price" onChange={() => setSort("desc")} />
                            <label htmlFor='desc'>Price (Highest First)</label>
                        </div>)}
                    </div>
                </div>
                <div className="right">
                    <Suspense fallback={<div>Loading...</div>}>
                        <List catID={catId} sort={sort} subCat={selectedSubCat} />
                    </Suspense>
                </div>
            </div>
        </div >
    )
}
