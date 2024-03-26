import React from 'react'
import './css/Hero.css'
import photo from './assets/photo.jpg'

export default function Hero() {
  return (
    <div className="heroBg w-[100vw] h-[100vh] py-24 flex items-center justify-evenly">
      <div className="leftContent">
        <h1 className="text-5xl font-bold">Hi, I am Akash <span id='helloIcon'>👋</span></h1>
        <p className="mt-4 text-lg">Fullstack developer, AI-ML enthusiast, Engineering Student</p>
      </div>
      <div className="rightContent">
        <img src={photo} alt="" className='img w-[500px] rounded'/>
      </div>
    </div>
  )
}
