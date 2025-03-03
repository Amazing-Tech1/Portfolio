import React from 'react'
import EduBg from './EduBg'
import Skills from './Skills'


function Works() {
    return (
        <div id='work' className='bg-gray-50 mt-14'>
            <div className='max-w-9/10 m-auto'>
                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className='mb-10 text-center justify-center'>
                    <h1 className='font-bold text-5xl text-blue-600'>Resume</h1>
                    <i className='text-sm text-gray-400'>Learn more about my qualifications, skills and hopefully add experiences to my collections </i>
                </div>
                <div className='w-full my-7'>
                    <h2
                        data-aos="fade-left"
                        data-aos-delay="300"
                        className='marck-script-regular text-2xl text-blue-500'>My Educational Background</h2>
                    <EduBg />
                </div>
                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className='w-full my-7'>
                    <h2 className='marck-script-regular text-2xl text-blue-500'>My Skills</h2>
                    <Skills />
                </div>

            </div>

        </div>
    )
}

export default Works
