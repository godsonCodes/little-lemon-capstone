import './App.css'
import Home from './components/home/Home'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Specials from './components/specials/Specials'
import Testimonials from './components/testimonials/Testimonials'
import Booking from './components/booking/Booking'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/hero' element={<Hero />} />
        <Route path='/specials' element={<Specials />} />
        <Route path='/booking' element={<Booking />} />
        <Route path='/testimonials' element={<Testimonials />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
