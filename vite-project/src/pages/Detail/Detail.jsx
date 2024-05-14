import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Detail() {
    let {id}=useParams()
    let [datas,setData]=useState([])
    function getData() {
      fetch("https://6634d2069bb0df2359a2d9f8.mockapi.io/product/product/"+id)
      .then((response) => response.json())
      .then((data) => setData(data));
    }
    useEffect(()=>{
      getData()
    },[])
  return (
    <div>
      <h1>{datas.name}</h1>
      <p>{datas.price}</p>
    </div>
  )
}

export default Detail
