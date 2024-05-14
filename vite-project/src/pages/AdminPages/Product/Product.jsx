import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
function Product() {
    let [data,setData]=useState([])
    function getData(params) {
      fetch("https://6634d2069bb0df2359a2d9f8.mockapi.io/product/product")
      .then((response) => response.json())
      .then((data) => setData(data));
    }
    useEffect(()=>{
      getData()
    },[])
    
    function handleDelete(id) {
  
      fetch("https://6634d2069bb0df2359a2d9f8.mockapi.io/product/product/" + id, {
    method: 'DELETE',
  })
  .then(res => res.json()) // or res.json()
  .then(res => {getData()})
    }
  return (
    <div>
        <h1>products</h1>
       <Helmet>
        <title>product</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <div className="cards">
    {data.map((x)=>(
<div className="card" key={x.id}>
     <img src={x.avatar} alt="" />
            <h2>{x.name}</h2>
            <p>{x.createdAt}</p>
            <button onClick={()=>handleDelete(x.id)}>delete</button>
</div>
    ))}
    </div>
      
    </div>
  )
}

export default Product
