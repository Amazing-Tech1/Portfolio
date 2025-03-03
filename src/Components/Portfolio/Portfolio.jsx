import React from 'react'
import { projects } from '../../assets/assets'

function Portfolio({ setSelectedProject }) {


  return (
    <div id='portfolio' className='relative max-w-9/10 m-auto mt-14'>
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        className="flex flex-col items-center mb-14">
        <h1 className='font-bold text-5xl text-blue-600'>Portfolio</h1>
        <i className='text-sm text-gray-400'>Here are my recent projects </i>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="400"
        className='grid grid-cols-1 sm:grid-cols-2 gap-y-10 gap-7 rounded-4xl '>
        {projects.map((project, i) => (
          <div key={i} className="relative group" onClick={() => setSelectedProject(project)}>
            <div className="relative h-60 sm:h-90">
              <img src={project.img[0]} alt={project.name} className="w-full h-full rounded-4xl " />
              <div className="absolute inset-0 flex items-center text-center justify-center bg-[#00000090] text-white text-2xl font-bold opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-4xl">
                {project.name}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default Portfolio
