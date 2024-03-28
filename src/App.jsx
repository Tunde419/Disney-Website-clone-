import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'


import './App.css'
import Footer from './component/footer/Footer'
import Nav from './component/navbar/Nav.jsx'

function App() {
  

  return (
    <>

      
    

    <BrowserRouter>

      <div>
        <Nav/>
      </div>

      <div>
        <Footer/>
      </div>

        <Routes>
           
            <Route path='/footer' element={<Footer/>} />

        </Routes>
    </BrowserRouter>
      
      
    </>
  )
}

export default App
