import React from 'react'

function Project({ project, setSelectedProject }) {
  return (
    <div
      data-aos="zoom-in-left"
      data-aos-delay="500"
      className='px-4 py-2 sm:p-6 bg-white md:rounded-4xl shadow-lg max-w-200'>
      <div className=" flex justify-between">
        <h2 className=' text-3xl font-bold text-blue-600'>{project.name}</h2>
        <p className="text-3xl mb-10 cursor-pointer" onClick={() => setSelectedProject(null)}>X</p>
      </div>
      <div className="flex  flex-col flex-grow sm:flex-row gap-5 h-full">
        <div className='w-full basis-1/2 h-full max-h-45 sm:max-h-80 overflow-y-auto scrollbar-custom'>
          <img src={project.img[1]} alt="" className='"w-full h-auto object-contain' />
        </div>

        <div className='w-full basis-1/2' >
          <p className='text-sm sm:text-lg text-justify'>{project.description}</p>

          <div className='mt-6'>
            <ul className='list-none flex flex-wrap gap-2'>
              {project.tools.map((tool, index) => (
                <li
                  key={index}
                  className='text-sm sm:text-lg font-medium text-gray-800 flex items-center bg-whitesmoke py-2 px-4 rounded-full shadow-md hover:bg-gray-100 transition duration-300'
                >
                  <span className='w-2 h-2 bg-green-200 rounded-full mr-2'></span>
                  {tool}
                </li>
              ))}
            </ul>
          </div>
          <div className='flex items-center gap-7 mt-[10%]'>
            {project.buttons.map((button, index) => (
              <button key={index} className='bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg m-2 cursor-pointer'>
                {button}
              </button>
            ))}
          </div>

        </div>
      </div>

    </div>
  )
}

export default Project
