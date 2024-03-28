import React from 'react'
import Html from './assets/skill-icons/html.png';
import Css from './assets/skill-icons/css.webp';
import Javascript from './assets/skill-icons/js.png';
import Python from './assets/skill-icons/py.png';
import Flask from './assets/skill-icons/flask.png';
import Django from './assets/skill-icons/django.png';
import Git from './assets/skill-icons/git.png';
import Bootstrap from './assets/skill-icons/bootstrap.png';
import Tailwind from './assets/skill-icons/tailwind.png';
import './css/Skills.css'

export default function SkillGallery() {
    const data = [
      {
        imageLink: Html ,
      },
      {
        imageLink:  Css ,
      },
      {
        imageLink: Javascript,
      },
      {
        imageLink: Python,
      },
      {
        imageLink: Flask,
      },
      {
        imageLink: Django,
      },
      {
        imageLink: Git,
      },
      {
        imageLink: Bootstrap,
      },
      {
        imageLink: Tailwind,
      },
    ];
   
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map(({ imageLink }, index) => (
          <div key={index} className='skill-photo bg-white rounded flex items-center justify-center h-[60px] w-[60px]'>
            <img
              className="h-full w-full max-w-full rounded-lg object-content object-center"
              src={imageLink}
              alt="gallery-photo"
            />
          </div>
        ))}
      </div>
    );
  }
   