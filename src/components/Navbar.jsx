import React from 'react'
import './css/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between p-5 align-center'>
      <div className="nav-brand flex text-2xl justify-center align-center h-full">
        <a href="#" className='flex justify-center align-center'><h1>akash.nath()</h1></a>
      </div>
      <ul className="nav-links flex space-x-2 gap-10 p-2">
        <li className="nav-link"><a href="#">Home</a></li>
        <li className="nav-link"><a href="#">About</a></li>
        <li className="nav-link"><a href="#">Skills</a></li>
        <li className="nav-link"><a href="#">Projects</a></li>
        <li className="nav-link"><a href="#">Certifications</a></li>
        <li className="nav-link"><a href="#">Contact</a></li>
      </ul>
      <div className="sponser-btn ">
        <button className='py-2 px-5 flex justify-center align-center'>Sponser</button>
      </div>
    </div>
  )
}

export default Navbar
