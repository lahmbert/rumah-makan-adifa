import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Container } from 'reactstrap'

import logo from '../../logo2.png'
import './header.css'

const nav__link = [
  {
    display: 'Home',
    path: '/home'
  },
  {
    display: 'Service',
    path: '/product'
  },
  {
    display: 'Cart',
    path: '/cart'
  },
  {
    display: 'Contact',
    path: '/contact'
  },
]

// const [toogle,setToogle] = useState(false)

const Header = () => {


  return (
    <div className='header'>
      <Container>
        <div className=' d-flex align-items-center justify-content-between' >
          <div className="logo">
            <img src={logo} alt="logo" className='' />
            <h5>Loundry <span>QU</span></h5>
          </div>

          <div className="navigation" >
            <div className="menu d-flex align-items-center gap-5">
              {
                nav__link.map((item, index) => (
                  <NavLink to={item.path} key={index} className={navClass => navClass.isActive ? 'active__menu' : ''} >{item.display}</NavLink>
                ))
              }
            </div>
          </div>

          <div className="nav__right d-flex align-items-center gap-3">
            <span className="cart__icon">
              <i className="ri-shopping-bag-line"></i>
              <span className="cart__badge">2</span>
            </span>

            <span className="user">
              <Link to='/login' >
                <i className="ri-user-3-line"></i>
              </Link>
            </span>

            <span className="mobile__menu" /*onClick={()=> setToogle(!toogle)}*/ >
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Header