// import React from 'react'
import '../assets/styles/Navbar.css'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {

  let loc = useLocation()
  let pathBool = loc.pathname.startsWith("/adminportal")

  return (
    <>
      <div className="navbar">
        {pathBool ?
          <>
            <ul>
              <li><NavLink to="/adminportal">HOME</NavLink></li>
              <li><NavLink to="/adminportal/books">BOOKS</NavLink></li>
              <li><NavLink to="/adminportal/addbooks">ADD BOOKS</NavLink></li>
              <li><NavLink to="/adminportal/users">USERS</NavLink></li>
              <li><NavLink to="/adminportal/addusers">ADD USERS</NavLink></li>
              <li><NavLink to="/">LOGOUT</NavLink></li>
            </ul>
          </>

          :
          <>
            <ul>
              <li><NavLink to="/userportal">HOME</NavLink></li>
              <li><NavLink to="/userportal/books">BOOKS</NavLink></li>
              <li><NavLink to="/userportal/users">USERS</NavLink></li>
              <li><NavLink to="/userportal/cart">CART</NavLink></li>
              <li><NavLink to="/">LOGOUT</NavLink></li>
            </ul></>
        }

      </div>
    </>
  )
}

export default Navbar
