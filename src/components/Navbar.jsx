import { useState } from 'react'

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false)

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

  return (
      <nav className="navbar">
        <div className="logo">Capstoners</div>
        <ul className={isNavOpen ? 'nav-links active' : 'nav-links'}>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
          <div className={`hamburger ${isNavOpen ? 'active' : ''}`} onClick={toggleNav}>
        <div className={isNavOpen ? 'line line1 active' : 'line line1'}></div>
        <div className={isNavOpen ? 'line line2 active' : 'line line2'}></div>
        <div className={isNavOpen ? 'line line3 active' : 'line line3'}></div>
      </div>
    </nav>
  )
}

export default Navbar
