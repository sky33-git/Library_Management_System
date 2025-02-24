import React from 'react'
import Navbar from '../Navbar'
import {Routes, Route } from "react-router-dom";
import Home from '../Home';
import Books from '../Books';
import Users from '../Users';
import Readbook from "../Readbook";
import AddToCart from './AddToCart';

const UserPortal = () => {
  return (
    <>
    <div className="usersPortal">

      <Navbar />
      <Routes>
        <Route element={<Home />} path='/' />
        <Route element={<Books />} path='/books' />
        <Route element={<Users />} path='/users' />
        <Route element={<Readbook />} path='/readbooks/:id' />
        <Route element={<AddToCart />} path='/cart' />




      </Routes>


    </div>
    </>
  )
}

export default UserPortal
