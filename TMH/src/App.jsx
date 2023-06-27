import { useState } from 'react'
import './App.css' 
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/home';
import NavBar from './components/navbar/NavBar';


function App() {

  return (
    <>
    <NavBar/>
    <div>

    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </div>
    </>
    
    
  )
}

export default App
