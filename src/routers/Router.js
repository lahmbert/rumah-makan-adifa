import React from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import Home from '../pages/Home'
import Cart from '../pages/Cart'
import Product from '../pages/Product'
import Contact from '../pages/Contact'

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Navigate to='/home' />} />
            <Route path='/home' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/product' element={<Product />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    )
}

export default Router