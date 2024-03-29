import React from 'react'
import './css/Skills.css'
import SkillGallery from './SkillGallery'
import SkillStats from './SkillStats'

const Skills = () => {
  return (
    <div className='skillsBg w-full px-5 py-10 h-auto flex flex-col md:flex-row items-center justify-evenly'>
      <div className="leftContent px-5 md:w-1/2 w-full">
        <h1 className="text-7xl font-bold skillHeading">My Skills</h1>
        <br />
        <p className='w-full'>
        Experienced Full Stack Developer with a robust skill set in HTML, CSS, and JavaScript, specializing in frontend development. Proficient in Flask and Django for backend solutions, ensuring seamless integration and scalability of web applications. Currently expanding expertise with React to further elevate development capabilities. Dedicated to innovation and delivering dynamic digital experiences that drive business success.
        </p>
        <br />
        <div className="btnSet flex items-center justify-evenly w-full">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-5 py-2 duration-700">Download CV</button>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-5 py-2 duration-700">Hire Me</button>
        </div>
      </div>
      <br />
      <div className="rightContent md:w-1/2 w-full flex flex-col items-center justify-center">
        <div className="skill-list w-full md:w-auto px-3">
            <SkillGallery />
            <SkillStats />
        </div>
      </div>
    </div>
  )
}

export default Skills
