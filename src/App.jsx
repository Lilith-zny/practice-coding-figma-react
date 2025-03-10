import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Clients from './components/Clients'
import Community from './components/Community'
import Pixelgrade from './components/Pixelgrade'
import Stats from './components/Stats'
import How from './components/How'
import Meet from './components/Meet'
import Article from './components/Article'
import Demo from './components/Demo'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Clients />
      <Community />
      <Pixelgrade />
      <Stats />
      <How />
      <Meet />
      <Article />
      <Demo />
      <Footer />
    </>
  )
}

export default App