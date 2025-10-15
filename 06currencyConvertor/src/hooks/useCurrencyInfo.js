/* eslint-disable react-hooks/exhaustive-deps */
//custom hook
import {useState,useEffect} from 'react'

function useCurrencyInfo(currency)
{
    const [data, setdata] = useState({})
    useEffect(()=>{
            fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
            .then((res)=>res.json())
            .then((res)=> setdata(res[currency]))
            .catch((error)=>{
                console.error("Error occurred fetching data: ",error );
            })
        console.log(data);
    },[currency]);

     return data;
}

export default useCurrencyInfo;