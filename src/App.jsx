import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Certificates from './components/Certificates'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CurrentWork from './components/CurrentWork'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <CurrentWork />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </>
  )
}

export default App
