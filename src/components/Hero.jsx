import React from 'react'
import './css/Hero.css'
import photo from './assets/photo.jpg'

const Hero = () => {
  return (
    <div className="heroBg md:w-[100vw] h-[100vh] py-24 flex items-center justify-evenly md:flex-row flex-col-reverse" id='home'>
      <div className="leftContent w-full md:w-1/2 md:p-0 px-10 items-center justify-center">
        <h1 className="text-3xl md:text-5xl font-bold">Hi, I am Akash <span id='helloIcon'>👋</span></h1>
        <p className="mt-4 text-sm md:text-lg">Fullstack developer, AI-ML enthusiast, Engineering Student</p>
      </div>
      <div className="rightContent">
        <img src={photo} alt="" className='img w-[270px] md:w-[500px] rounded cursor-pointer'/>
      </div>
    </div>
  )
}

export default Hero