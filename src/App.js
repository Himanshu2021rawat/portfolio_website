import React from 'react'
import Header from './components/headers/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import  Contacts from "./components/contact/Contact"
import Fotter from "./components/fotter/Fotter"

const App = () => {
  return (
    <>
    
    <Header />
    <Nav />
    <About />
    <Experience />
    <Services />
    <Portfolio />
    <Testimonials />
    <Contacts />
    <Fotter />
    
</>
  )
}

export default App