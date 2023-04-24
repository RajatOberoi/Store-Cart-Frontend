import { useEffect, useState } from "react"
import { fetchDataFromApi } from "./api"

const useFetch = (url)=>{

    const [data,setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [pagination,setPagination] = useState(null)
    useEffect(()=>{
        if(url.endsWith(" ")||url.endsWith("null")){
            return
        }
        const fetchData = async()=>{
            try{
                setLoading(true)
                const res = await fetchDataFromApi(url)
                setData(res.data.data)
                setPagination(res.data.meta.pagination.pageCount)
            }
            catch(error){
                setError(error)
            }
            setLoading(false)
        }
        fetchData()
    },[url])

    return {data,loading,error,pagination}
}

export default useFetch