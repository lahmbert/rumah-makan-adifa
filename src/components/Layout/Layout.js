import React from 'react'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Routes from '../../routers/Routers.js'

const Layout = () => {
  return (
    <div>
        <Header />
        <div>
            <Routes />
        </div>
        <Footer />
    </div>
  )
}

export default Layout