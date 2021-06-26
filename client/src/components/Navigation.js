import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
      return (
            <div>
                  <nav className="navbar navbar-expand-lg navbar-light bg-secondary navigation " >
  <div className="container-fluid ">
    <NavLink className="navbar-brand fw-bold"  to="/">Home</NavLink>
   
      <div className="mx-5 fw-bold ">Admin & Customer Data</div> 

    <div className="collapse navbar-collapse " id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <NavLink className="nav-link active fw-bold" aria-current="page" to="/administrator">Admin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link active mx-5 fw-bold" to="/user">User</NavLink>
        </li>
       
      
      </ul>
    </div>
  </div>
</nav> 
            </div>
      )
}

export default Navigation
