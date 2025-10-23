import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom';


export default function Github()
{
    const data=useLoaderData();
    /*
    const [data,setData]= useState([]);
    useEffect(()=>{
         fetch('https://api.github.com/users/AkshayRGhatge')
            .then((res)=>res.json())
            .then((data)=>{
                console.log(data);
                setData(data);
            })
    },[])
   */
    return(
        <>
            <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
                GitHub Login: {data.login}
                <img src={data.avatar_url} alt="Git picture" width={300}></img>
            </div>
        </>
    )
}

export const githubInfoLoader = async ()=>{
    const response= await  fetch('https://api.github.com/users/AkshayRGhatge')
    return response.json();
}