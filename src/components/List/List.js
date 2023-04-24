import React,{useState,useEffect,lazy,Suspense} from 'react'
import "./List.scss"
import useFetch from '../../utils/useFetch'
import { myDebounce } from '../../utils/myDebounce'
const maxResult = 5;

const Card = lazy(() => import('../Card/Card'));


  export default function List({subCat, catID, sort,}) {
    const [pageIndex, setPageIndex] = useState(1);
    useEffect(()=>{
      setPageIndex(1)
    },[catID])
    useEffect(()=>{
      window.scrollTo(0,0)
    },[pageIndex])

    const {data,loading,error,pagination} = useFetch(`/api/products?populate=*&filters[categories][id][$eq]=${catID}&pagination[page]=${pageIndex}&pagination[pageSize]=${maxResult}&sort=price:${sort}`)

    const debouncedSetPageIndex = myDebounce(setPageIndex, 700);

    if(subCat.length){
      const filtered = data?.reduce((curr,next)=>{
        for(let i=0;i<subCat.length;i++){
          if((next.attributes.sub_categories.data[0].id)==subCat[i]){
            curr.push(next)
          }
        }
        return curr
      },[])
      return (
        <div className='list'>
          <div className="products-card">
                { error?"Something went Wrong":
                  loading?"Loading":
                  (
                    <Suspense fallback={<div>Loading Cards...</div>}>
                      {filtered?.map((item) => (
                        <Card item={item} key={item.id} />
                      ))}
                    </Suspense>
                  )
                }
          </div>
        </div>
      )
    }
    else{
      return (
        <div className='list'>
          <div className="products-card">
              { error?"Something went Wrong":
                loading?"Loading":
                (
                  <Suspense fallback={<div>Loading Cards...</div>}>
                    {data?.map((item) => (
                      <Card item={item} key={item.id} />
                    ))}
                  </Suspense>
                )
              }
         </div>
                    <div className="page-end">
                        <button
                            className="page-index"
                            disabled={pageIndex === 1}
                            onClick={() => debouncedSetPageIndex(pageIndex - 1)}
                        >
                            Previous
                        </button>

                        <span className="page-number">{`${pageIndex} of ${
                            pagination
                        }`}</span>

                        <button
                            className="page-index"
                            disabled={
                                pageIndex ===
                                (pagination)
                            }
                            onClick={() => debouncedSetPageIndex(pageIndex + 1)}
                        >
                            Next
                        </button>
                    </div>
      </div>
      )
    }
}

