import React from 'react'
import './css/Skills.css'
import SkillGallery from './SkillGallery'
import SkillStats from './SkillStats'

const Skills = () => {
  return (
    <div className='skillsBg w-full px-5 py-10 h-auto flex flex-col md:flex-row items-center justify-evenly' id='skills'>
      <div className="leftContent px-5 md:w-1/2 w-full">
        <h1 className="text-7xl font-bold skillHeading">My Skills</h1>
        <br />
        <p className='w-full'>
          As an FULLSTACK developer with over 2+ years of experience in web development sector, I bring a unique perspective to the table. I have a strong understanding of front-end technologies, as well as experience with back-end technologies. I am proficient in HTML, CSS, JavaScript, Python, Flask, Django, Git, Bootstrap, Tailwind CSS etc. <br /> <br /> I am always eager to learn new technologies and improve my skills. I am a quick learner and a team player. I am always ready to take on new challenges and work with new technologies.
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
