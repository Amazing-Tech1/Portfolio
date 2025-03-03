import React from 'react'
import hero from '../assets/hero.png'
import { FaGithub, FaTwitter, FaWhatsapp, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { motion } from 'framer-motion'



function Home() {
    return (
        <div
            id="home"
            className="bg-[url('/src/assets/portfolio-bg-2.jpeg')] bg-cover bg-center h-[80%] md:h-screen bg-no-repeat"
        >
            <div className="bg-[#00000090] text-gray-200 h-full flex flex-col items-center justify-center">
                <img
                    src={hero}
                    alt="Hero Image"
                    className="w-20 sm:w-30 h-auto bg-gray-200 rounded-[50%] object-cover border-blue-700 border-2 md:border-4 hover:border-0 cursor-pointer"
                    data-aos="fade-down"
                    data-aos-delay="300"
                />

                <div
                    className="mt-6 flex flex-col justify-center items-center gap-4"
                    data-aos="fade-up-left"
                    data-aos-offset="200"
                    data-aos-delay="500"
                >
                    <h3 className="text-sm sm:text-xl md:text-3xl">Hello I'm</h3>
                    <h1 className="text-2xl sm:text-3xl md:text-6xl font-bold">
                        Makinde Kelvin Olamide
                    </h1>
                    <div className="flex gap-3 items-center">
                        <div className="w-2 h-2 sm:w-4 sm:h-4 rounded-[50%] bg-blue-700"></div>
                        <p className="text-sm sm:text-xl">Web Developer</p>
                    </div>
                </div>


                <div
                    className="flex gap-4 mt-7"
                    data-aos="fade-up-left"
                    data-aos-offset="200"
                    data-aos-delay="700"
                >
                    <a href="https://www.github.com/Amazing-Tech1" target="_blank">
                        <span>
                            <FaGithub className="text-sm sm:text-xl" />
                        </span>
                    </a>
                    <a href="https://www.linkedin.com/in/kelvin-makinde-12b46229a" target="_blank">
                        <span>
                            <FaLinkedin className="text-sm sm:text-xl" />
                        </span>
                    </a>
                    <a href="https://www.X.com/kelvin28383121" target="_blank">
                        <span>
                            <FaTwitter className="text-sm sm:text-xl" />
                        </span>
                    </a>
                    <a href="https://wa.me/+2349065273201" target="_blank">
                        <span>
                            <FaWhatsapp className="text-sm sm:text-xl" />
                        </span>
                    </a>
                    <a href="mailto:kelvinmakinde3@gmail.com" target="_blank">
                        <span>
                            <FaEnvelope className="text-sm sm:text-xl" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home
