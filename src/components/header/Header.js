import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <header>
      <img src='../../images/Logo .svg' alt='' />
      <nav className='navbar'>
        <ul>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#menu'>Menu</a>
          </li>
          <li>
            <a href='#'>Reservation</a>
          </li>
          <li>
            <a href='#'>Order Online</a>
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
