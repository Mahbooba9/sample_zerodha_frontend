import './App.css'
import Header from './Header'
import Card from './Card'
import Products from './Products'
import Register from './Register'
import Login from './Login'
import Home from './Home'
import About from './About'
import {Routes,Route} from 'react-router-dom'
import { useState } from 'react'

function App() {
const [searchquery,setsearchquery]=useState('')

  return (
    <>
      {/* fragments--means it will not render any extra element in the DOM, fragments let you group a list of children without adding extra nodes to the DOM.why it is used?--because in react you can only return one element from a component, so if you want to return multiple elements you can wrap them in a fragment. */}
        <section style={{textAlign: "center" }}>
        <Header setsearchquery={setsearchquery}/>
        </section>
        
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/products' element={<Products searchquery={searchquery}/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        

        {/* fragments--means it will not render any extra element in the DOM, fragments let you group a list of children without adding extra nodes to the DOM.why it is used?--because in react you can only return one element from a component, so if you want to return multiple elements you can wrap them in a fragment. */}
        {/* <section style={{textAlign: "center" }}>
        <Header/> */}
        {/* <img src="https://zerodha.com/static/images/landing.svg" alt="phone"/>
        <h2>Investing for everyone</h2>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button id="button">Sign up for free</button> */}
        {/* </section>

        <section><Home/></section>

        <section> */}
        {/* <Card imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png" name="Biryani"/>
        <Card imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/e966003f-c0d9-4c65-886a-47b9c80d1f21_72164.JPG" name="Pizza"/>
        <Card imgSrc="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/bweqsg26xmnluflb5pgf" name="Barbeque"/>
        */}
        {/* <h1>Products</h1>
        <Products/> 
        </section>

        <section>
          <Register/>
        </section>
        
        <section>
          <Login/>
        </section> */}

  </>
  )
}
//https://flexboxlabs.netlify.app/
export default App
