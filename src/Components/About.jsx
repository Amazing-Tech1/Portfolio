import React from 'react'
import about from '../assets/about_img.jpg'
import Services from './Services';

function About() {
    const resumeLink = '/Kelvin_Resume.pdf';
    return (
        <div id='about' className='w-full overflow-x-hidden max-w-9/10 m-auto mt-14 scroll-mt-40'>
            <div className='flex flex-col lg:flex-row gap-[5%]'>
                <div
                    data-aos="flip-down"
                    data-aos-delay="300"
                    className='w-full h-80 lg:w-[30rem] lg:h-[30rem] rounded-full overflow-hidden mx-auto lg:mx-0'>
                    <img
                        src={about}
                        alt="About"
                        className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                    />
                </div>

                <div className='basis-2/3 justify-start'>
                    <div className='mt-5 lg:mt-0 mb-5 lg:mb-10 text-center lg:justify-items-start'
                        data-aos="fade-down"
                        data-aos-delay="300"
                    >
                        <h1 className='font-bold text-5xl lg:ml-[6%] text-blue-600'>About Me</h1>
                    </div>
                    <div>
                        <p
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            className="text-lg text-justify text-gray-800"
                        >
                            I am a results-driven MERN stack developer with a strong passion for crafting dynamic, scalable, and user-centric web applications. With solid expertise in MongoDB, Express.js, React, and Node.js, I specialize in building full-stack solutions that are not only efficient and robust but also intuitive and responsive. My dedication to clean code, performance optimization, and continuous learning drives me to deliver impactful digital experiences.
                        </p>


                        <div className='flex mt-10 items-start'
                            data-aos="zoom-in"
                            data-aos-delay="400"
                        >
                            <div className="flex flex-col md:flex-row justify-evenly gap-4 md:gap-7 text-gray-800">
                                <div className='flex flex-col gap-4'>
                                    <div className='flex gap-2'>
                                        <b>Name:</b>
                                        <p>Makinde Kelvin Olamide</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <b>Degree:</b>
                                        <p>Masters</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <b>Phone:</b>
                                        <p>+2349065273201</p>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                        <b>Address:</b>
                                        <p className='text-sm'>Zone 56D Lao Airport Road Ilorin, Kwara State</p>
                                    </div>
                                </div>
                                <div className='flex flex-col gap-4'>
                                    <div className='flex gap-2'>
                                        <b>Experience:</b>
                                        <p>2+ years</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <b>Email:</b>
                                        <p>kelvinmakinde3@gmail.com</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <b>Freelance:</b>
                                        <p>Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div
                            data-aos="zoom-in"
                            data-aos-delay="300"
                            className='cursor-pointer text-center mt-10 ml-0 bg-blue-600 hover:bg-blue-700 w-60 rounded-2xl p-3'>
                            <a href={resumeLink} target="_blank" rel="noopener noreferrer" download className=' text-white font-bold text-xl '>
                                Download Resume
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div className="mt-10">
                <Services />
            </div>
        </div>
    )
}

export default About
