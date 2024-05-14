import React from 'react'
import { Link } from "react-router-dom";
function MainNav() {
  return (
    <div>
 <nav>
 <ul>
          <li >
            <Link to={"/"} >Home</Link>
          </li>
          <li >
            <Link to={"/Admin"} >Admin</Link>
          </li>
          <li >
            <Link to={"/detail"} >Details</Link>
          </li>
 
      </ul>
 </nav>
    </div>
  )
}

export default MainNav
