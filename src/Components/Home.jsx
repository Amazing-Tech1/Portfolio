import React from 'react';
import hero from '../assets/hero.png';
import {
    FaGithub,
    FaTwitter,
    FaWhatsapp,
    FaLinkedin,
    FaEnvelope
} from 'react-icons/fa';
import { FiChevronsDown } from 'react-icons/fi';
import { Link } from 'react-scroll';

function Home() {
    return (
        <div
            id="home"
            className="w-full overflow-x-hidden min-h-screen flex justify-between bg-gradient-to-br from-gray-100 via-white to-gray-200 text-gray-800 relative"
        >
            <div className="flex flex-col-reverse md:flex-row items-center justify-center max-w-9/10 m-auto gap-[2%] ">

                <div className="">
                    <div className="text-center md:text-left" data-aos="fade-right">
                        <h3 className="text-xl  md:text-3xl font-bold text-blue-800">
                            Hey there! 👋
                        </h3>
                        <h3 className="text-xl  md:text-5xl font-bold text-blue-800">
                            Wanna build a website?
                        </h3>
                        <p className="mt-4 text-gray-700 text-sm sm:text-base leading-relaxed max-w-xl">
                            Welcome to Amazing Technologies. I specialize in creating modern, responsive, and user-friendly websites that don't just look good but also drive results. Whether you’re a startup, small business, or a personal brand, I’ve got you covered.
                        </p>
                        <p className="mt-4 text-blue-700 font-semibold text-base sm:text-lg">
                            Let’s team up and build something awesome together!
                        </p>

                        <div className="flex gap-4 mt-6 justify-center md:justify-start">
                            <Link
                                to="portfolio"
                                spy={true}
                                smooth={true}
                                duration={500}
                                className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition"
                            >
                                View Portfolio
                            </Link>
                            <a
                                href="https://mail.google.com/mail/?view=cm&to=kelvinmakinde3@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border border-blue-600 text-blue-600 px-5 py-2 rounded-lg hover:bg-blue-100 transition"
                            >
                                Hire Me
                            </a>

                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-5 mt-8 justify-center md:justify-start flex-wrap">
                            <a href="https://github.com/Amazing-Tech1" target="_blank"><FaGithub className="text-xl cursor-pointer" /></a>
                            <a href="https://linkedin.com/in/kelvin-makinde-12b46229a" target="_blank"><FaLinkedin className="text-xl cursor-pointer" /></a>
                            <a href="https://x.com/kelvin28383121" target="_blank"><FaTwitter className="text-xl cursor-pointer" /></a>
                            <a href="https://wa.me/+2349065273201" target="_blank"><FaWhatsapp className="text-xl cursor-pointer" /></a>
                            <a href="mailto:kelvinmakinde3@gmail.com" target="_blank"><FaEnvelope className="text-xl cursor-pointer" /></a>
                        </div>
                    </div>
                </div>

                <div className="" data-aos="fade-left">
                    <img
                        src={hero}
                        alt="Hero"
                        className="w-44 h-44 sm:w-130 sm:h-130 object-contain"
                    />
                </div>
            </div>

            <div
                className="absolute bottom-5 left-1/2 -translate-x-1/2 animate-bounce text-blue-700 cursor-pointer">
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                >
                    <FiChevronsDown className="text-3xl" />
                </Link>
            </div>
        </div>
    );
}

export default Home;
