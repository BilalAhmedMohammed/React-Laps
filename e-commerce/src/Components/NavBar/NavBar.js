import React from 'react'
import { NavLink } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div className="container-fluid">
      <NavLink to="/Movies" style={isActive => ({color: isActive ? "white" : "gray"})} className="navbar-brand" >Movie</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink to="/Login" style={isActive => ({color: isActive ? "white" : "gray"})}  className="nav-NavLink fs-4" aria-current="page">Login</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/Register" style={isActive => ({color: isActive ? "white" : "gray"})} className="nav-NavLink fs-4" >Register</NavLink>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-NavLink fs-4" ></NavLink>
          </li> */}
        </ul>
        <form className="d-flex">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
  </nav>
  )
}


