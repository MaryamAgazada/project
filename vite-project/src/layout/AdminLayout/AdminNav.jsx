import React from 'react'
import { Link } from 'react-router-dom'

function AdminNav() {
  return (
    <div>
       <nav>
 <ul>
          <li >
            <Link to={"/Admin/Product"} >Products</Link>
          </li>
          <li>
            <Link to={"/Admin"}>Admin</Link>
          </li>
          <li >
            <Link to={"/Admin/Add"} >Add</Link>
          </li>
          <li >
            <Link to={"/Admin/Delete"} >Delete</Link>
          </li>
          <li >
            <Link to={"/Admin/Update"} >Update</Link>
          </li>
          <li >
            <Link to={"/Admin/Basket"}><i className="fa-solid fa-basket-shopping"></i></Link>
          </li>
      </ul>
 </nav>
    </div>
  )
}

export default AdminNav
