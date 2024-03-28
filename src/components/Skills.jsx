import React from 'react'
import './css/Skills.css'
import SkillGallery from './SkillGallery'

const Skills = () => {
  return (
    <div className='skillsBg w-full h-[100vh] flex items-center justify-evenly'>
      <div className="leftContent px-5 w-full">
        <h1 className="text-7xl font-bold">My Skills</h1>
        <br />
        <p className='w-1/2'>
        As a seasoned Full Stack Developer, I bring a comprehensive skill set honed over years of hands-on experience and continuous learning. With a solid foundation in HTML, CSS, and JavaScript cultivated over two years of dedicated practice, I proficiently craft intuitive and visually appealing frontend interfaces. Additionally, my expertise extends to backend development, with one year of mastery in Flask and four months of adeptness in Django frameworks. This dual proficiency allows me to seamlessly integrate frontend and backend functionalities, ensuring robust and scalable web applications. Always eager to stay abreast of industry trends and advancements, I am currently expanding my repertoire by delving into React, poised to further elevate my development capabilities and deliver cutting-edge solutions. With a passion for innovation and a commitment to excellence, I strive to create dynamic and impactful digital experiences that resonate with users and drive business success.
        </p>
      </div>
      <div className="rightContent w-1/2">
        <div className="skill-list">
            <SkillGallery />
        </div>
      </div>
    </div>
  )
}

export default Skills
