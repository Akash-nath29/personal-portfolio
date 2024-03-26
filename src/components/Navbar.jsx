import React from 'react'
import './css/Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar flex justify-between p-5 align-center my-0 px-9'>
      <div className="nav-brand flex text-2xl justify-center align-center h-full">
        <a href="#" className='flex justify-center align-center h-full'><h1>akash.nath()</h1></a>
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
        <button className='py-2 px-5 flex justify-center align-center bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded'>Sponser</button>
      </div>
    </div>
  )
}

export default Navbar
