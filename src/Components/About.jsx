import React from 'react'
import about from '../assets/about_img.jpg'

function About() {
    const resumeLink = '/Kelvin_Resume.pdf';
    return (
        <div id='about' className='max-w-9/10 m-auto mt-14'>
            <div className='flex flex-col lg:flex-row gap-[5%]'>
                <div
                    data-aos="flip-down"
                    data-aos-delay="300"
                    className='lg:basis-[42%] h-100 lg:h-120 w-full border-6 border-blue-700'>
                    <img src={about} alt="" className='w-full h-full hover:scale-105 object-cover' />
                </div>
                <div className='lg:basis-[55%] justify-start'>
                    <div className='mt-10 lg:mt-0 mb-10 text-center lg:justify-items-start'
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <h1 className='font-bold text-5xl text-blue-600'>About Me</h1>
                    </div>
                    <div>
                        <p
                            data-aos="fade-up-left"
                            data-aos-delay="300"
                            className='text-lg text-justify'>I am an entry level but passionate, dedicated and result driven MERN stack developer with strong foundations in building dynamic and scalable web applications. With my expertise in MongoDB, Express.Js, React, and Node.Js, I have honed the skills to deliver full-stack solutions that are not only function but also user-friendly and efficient</p>

                        <div className='flex mt-10 items-start '
                            data-aos="fade-up"
                            data-aos-delay="400"
                        >
                            <div className="flex flex-col md:flex-row justify-evenly gap-4 md:gap-7">
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
                                        <b>Age:</b>
                                        <p>25 years</p>
                                    </div>
                                    <div className='flex gap-2'>
                                        <b>Experience:</b>
                                        <p>Entry Level</p>
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
                            data-aos="fade-up"
                            data-aos-delay="400"
                            className='cursor-pointer text-center mt-10 ml-0 bg-blue-600 hover:bg-blue-700 w-60 rounded-2xl p-3'>
                            <a href={resumeLink} target="_blank" rel="noopener noreferrer" download className=' text-white font-bold text-xl '>
                                Download Resume
                            </a>
                        </div>

                    </div>
                </div>


            </div>

        </div>
    )
}

export default About
