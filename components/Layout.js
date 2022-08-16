import Head from 'next/head'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children, page, guitarra}) => {
  return (
    <div>
        <Head>
            <title>GuitarLA - {page}</title>
            <meta name='description' content='Sitio Web de venta de guitarra' />
        </Head>
        <Header 
          guitarra={guitarra}
        />
        {children}
        <Footer />
    </div>
  )
}

Layout.defaultProps = {
  guitarra: null
}

export default Layout