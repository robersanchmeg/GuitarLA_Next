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
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
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