import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <h1 className="text-primary font-heading text-3xl">Welcome to Our Clinic</h1>
      <p className="text-neutral font-body">We provide professional and caring dental services.</p>
      <button className="bg-primary text-white font-heading px-4 py-2 rounded hover:bg-accent">
        Book an Appointment
      </button>
      <section className="bg-accent py-10">
        <p className="font-body text-neutral">Our services are designed with your comfort in mind.</p>
      </section>
    </BrowserRouter>
  )
}

export default App