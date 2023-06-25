import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img src='../../images/Logo .svg' alt='' />
      <nav className='navbar'>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/hero'>About</Link>
          </li>
          <li>
            <Link to='/specials'>Menu</Link>
          </li>
          <li>
            <Link to='/booking'>Booking</Link>
          </li>
          <li>
            <Link to='/testimonials'>Testimonials</Link>
          </li>
          <li>
            <a href='#'>Login</a>
          </li>
        </ul>
      </nav>
      <img
        src='../../images/🦆 icon _hamburger menu_.svg'
        alt=''
        className='menu-icon'
      />
    </header>
  )
}

export default Header
