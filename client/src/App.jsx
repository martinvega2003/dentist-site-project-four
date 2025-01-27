import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import Footer from './components/Footer'
import { servicesData } from './data/servicesData'
import { ServicePage } from './pages/ServicePage'
import Navbar from './components/Header'
import BookingPage from './pages/BookingPage'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/booking' element={<BookingPage />} />
        {
          servicesData.map(category => {
            return category.services.map(service => {
              return <Route path={"/services/" + service.name} element={<ServicePage service={service} />} />
            })
          })
        }
      </Routes>
      <Navbar />
      <Footer />
    </BrowserRouter>
  )
}

export default App