import React from 'react'

import Header from './Header'
import Footer from './Footer'

const Layout = props => (
  <div>
    <h1>MusicMatch</h1>
    <Header />

    {props.children}

    <Footer />
  </div>
)

export default Layout