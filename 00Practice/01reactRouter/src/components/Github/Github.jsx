import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
export default function Github(){

    const data=useLoaderData()
    /*
    const [data,setData]= useState([]);
    useEffect(()=>{
         fetch('https://api.github.com/users/AkshayRGhatge')
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                setData(data);
            })
    },[])*/
   
    return (
        <div>
            <img src={data.avatar_url}/>
            Github login: {data.login}
        </div>
    )
}


export const githubInfoLoader = async ()=>{
    const response= await  fetch('https://api.github.com/users/AkshayRGhatge')
    return response.json();
}