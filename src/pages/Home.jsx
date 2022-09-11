import React from 'react'
import Announcement from '../components/Announcement'
import Categories from '../components/Categories'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'
import Footer from '../components/Footer'
import PopularProduct from '../components/PopularProduct'

const Home = () => {
  return (
    <div>
      <Announcement/>
      <Navbar/>
      <Slider/>
      <Categories/>
      <Products/>
      <PopularProduct/>
      <Newsletter/>
      <Footer/>
    </div>
  )
}

export default Home