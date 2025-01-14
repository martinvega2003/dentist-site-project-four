import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import Header from './components/Header'
import Footer from './components/Footer'
import { servicesData } from './data/servicesData'
import { ServicePage } from './pages/ServicePage'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        {
          servicesData.map(category => {
            return category.services.map(service => {
              return <Route path={"/services/" + service.name} element={<ServicePage service={service} />} />
            })
          })
        }
      </Routes>
      <Header />
      <Footer />
    </BrowserRouter>
  )
}

export default App