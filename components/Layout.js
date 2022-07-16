import React from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import Hero from './Hero/Hero'
import Product from './Products/Product'
import Head from 'next/head';


export default function Layout({children}) {
  return (
    <>
    <Head>
      <title>Fashion Street</title>
    </Head>

    <Header> 
    
    </Header>
   
    <Hero />

    <Product />
    

    <Footer />
    
  
    </>
  )
}


