import React from 'react'
import logo from '../assets/logo.png'
import { MdHome, MdPerson, MdWork, MdLayers, MdEmail } from 'react-icons/md'
import { Link } from 'react-scroll'

function Sidebar() {

    return (
        <div className="bg-none md:bg-gray-200">
            <div className="h-screen flex flex-col items-center justify-center md:shadow-xl">
                <div
                    data-aos="fade-down"
                    data-aos-delay="300"
                    className="md:flex md:flex-col hidden items-center justify-center p-3 lg:p-5 cursor-pointer">
                    <img
                        src={logo}
                        alt="Logo"
                        className="md:w-12 md:h-12 lg:w-15 lg:h-15"
                    />
                    <h1 className='text-sm text-blue-700'>AMAZING</h1>
                </div>
                <div className="flex flex-col justify-center items-center px-2 py-5 gap-4 md:gap-10 md:mt-20 z-10 backdrop-filter md:backdrop-blur-none backdrop-blur-md"
                    data-aos="fade-right"
                    data-aos-delay="300"
                >

                    {/* Home Link */}
                    <div
                        className="flex gap-2 items-center group relative"
                    >
                        <Link
                            activeClass="bg-white md:border-blue-700 md:border-2"
                            to="home"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="rounded-[50%] md:border-blue-700 md:border-2 p-2 cursor-pointer"
                        >
                            <MdHome className="text-xl sm:text-2xl md:text-4xl" />
                        </Link>
                        <div className="bg-white text-center absolute hidden left-20 group-hover:block text-2xl text-blue-700 font-medium p-3">
                            <p >
                                Home
                            </p>
                        </div>

                    </div>

                    {/* About Me Link */}
                    <div
                        className="flex gap-2 items-center group relative"
                    >
                        <Link
                            activeClass="bg-white md:border-blue-700 md:border-2"
                            to="about"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="rounded-[50%] md:border-blue-700 md:border-2 p-2 cursor-pointer"
                        >
                            <MdPerson className="text-xl sm:text-2xl md:text-4xl" />
                        </Link>
                        <div className="bg-white text-center absolute hidden left-20 group-hover:block text-2xl text-blue-700 font-medium p-3">
                            <p>
                                About Me
                            </p>
                        </div>

                    </div>

                    {/* Resume Link */}
                    <div
                        className="flex gap-2 items-center group relative"
                    >
                        <Link
                            activeClass="bg-white md:border-blue-700 md:border-2"
                            to="work"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="rounded-[50%] md:border-blue-700 md:border-2 p-2 cursor-pointer"
                        >
                            <MdWork className="text-xl sm:text-2xl md:text-4xl" />
                        </Link>
                        <div className="bg-white text-center absolute hidden left-20 group-hover:block text-2xl text-blue-700 font-medium p-3">
                            <p>
                                Resume
                            </p>
                        </div>

                    </div>

                    {/* Portfolio Link */}
                    <div
                        className="flex gap-2 items-center group relative"
                    >
                        <Link
                            activeClass="bg-white md:border-blue-700 md:border-2"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="rounded-[50%] md:border-blue-700 md:border-2 p-2 cursor-pointer"
                        >
                            <MdLayers className="text-xl sm:text-2xl md:text-4xl" />
                        </Link>
                        <div className="bg-white text-center absolute hidden left-20 group-hover:block text-2xl text-blue-700 font-medium p-3">
                            <p >
                                Portfolio
                            </p>
                        </div>

                    </div>

                    {/* Contact Link */}
                    <div
                        className="flex gap-2 items-center group relative"
                    >
                        <Link
                            activeClass="bg-white md:border-blue-700 md:border-2"
                            to="contact"
                            spy={true}
                            smooth={true}
                            duration={500}
                            className="rounded-[50%] md:border-blue-700 md:border-2 p-2 cursor-pointer"
                        >
                            <MdEmail className="text-xl sm:text-2xl md:text-4xl" />
                        </Link>
                        <div className="bg-white text-center absolute hidden left-20 group-hover:block text-2xl text-blue-700 font-medium p-3">
                            <p>
                                Contact
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
