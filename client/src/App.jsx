import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import Header from './components/Header'
import Footer from './components/Footer'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
      </Routes>
      <Header />
      <Footer />
    </BrowserRouter>
  )
}

export default App