import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import './App.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Welcome from "./components/Welcome";
import ItemListContainer from './components/ItemListContainer'

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Welcome />} />
          <Route exact path="/ItemListContainer" element={<ItemListContainer />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
