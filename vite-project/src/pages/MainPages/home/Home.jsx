import React, { useEffect, useState } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async';
import "./Home.scss"
import { Link } from 'react-router-dom';
function Home() {
  let [search,setSearch]=useState("")
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
  function sortAsync(prop) {
    const sortedCategory=[...data].sort((a,b)=>a[prop]> b[prop] ? 1 : -1)
    setData(sortedCategory)
  }
  function sortDec(prop) {
    const sortedCategory=[...data].sort((a,b)=>b[prop]> a[prop] ? 1 : -1)
    setData(sortedCategory)
  }
  return (
    <div>
         <Helmet>
        <title>Home</title>
        {/* <link rel="canonical" href="https://www.tacobell.com/" /> */}
      </Helmet>
      <button onClick={() => sortAsync("name")}>A-Z</button>
      <button onClick={() => sortDec("name")}>Z-A</button>
      <input
      type='text'
      value={search}
      onChange={(e)=>setSearch(e.target.value)}
      placeholder='search'/>
      <div className="cards">
    {data
    .filter((x)=>x.name.toLowerCase().includes(search.toLowerCase()))
    .map((x)=>(
<div className="card" key={x.id}>
     <img src={x.avatar} alt="" />
            <h2>{x.name}</h2>
            <p>{x.createdAt}</p>
            <button onClick={()=>handleDelete(x.id)}>delete</button>
            <button><Link to={"/detail/"+x.id}>Detail</Link></button>
</div>
    ))}
    </div>
      
    </div>
  )
}

export default Home
