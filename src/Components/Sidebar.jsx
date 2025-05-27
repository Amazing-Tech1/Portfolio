import { useState } from "react";
import logo from '../assets/logo.png'
import {
    MdHome,
    MdPerson,
    MdWork,
    MdLayers,
    MdEmail
} from "react-icons/md";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-scroll";

export default function Sidebar() {
    const [isExpanded, setIsExpanded] = useState(false);
    const [active, setActive] = useState("home");

    const navItems = [
        { id: "home", icon: <MdHome className="text-xl sm:text-2xl md:text-4xl" />, label: "Home" },
        { id: "about", icon: <MdPerson className="text-xl sm:text-2xl md:text-4xl" />, label: "About Me" },
        { id: "work", icon: <MdWork className="text-xl sm:text-2xl md:text-4xl" />, label: "Resume" },
        { id: "portfolio", icon: <MdLayers className="text-xl sm:text-2xl md:text-4xl" />, label: "Portfolio" },
        { id: "contact", icon: <MdEmail className="text-xl sm:text-2xl md:text-4xl" />, label: "Contact" }
    ];

    return (
        <div
            className="h-full flex md:gap-2 md:justify-center md:h-screen px-1 py-2 bg-gray-100 shadow-md rounded-br-2xl md:rounded-none transition-all duration-300 ease-in-out backdrop-blur-md md:backdrop-blur-none"

        >
            <div className=" h-full flex flex-col md:items-center md:justify-evenly gap-7">
                <img src={logo} alt="logo" className="hidden md:inline-block w-12 h-12" />
                <div
                    className="flex md:flex-col items-center md:justify-center gap-2 md:gap-8 "
                    data-aos="fade-right"
                    data-aos-delay="300"
                >
                    {navItems.map((item) => {
                        const isActive = item.id === active;
                        const showItem = isExpanded || isActive;

                        return (
                            <div
                                key={item.id}
                                className={`${showItem ? "flex" : "hidden"} md:flex gap-2 items-center group relative`}
                            >
                                <Link
                                    activeClass="bg-white md:border-blue-700 md:border-2"
                                    to={item.id}
                                    spy={true}
                                    smooth={true}
                                    duration={500}
                                    onClick={() => setIsExpanded(false)}
                                    onSetActive={() => setActive(item.id)}
                                    className={`rounded-full p-2 cursor-pointer border-2 ${isActive ? "bg-white border-blue-700" : "border-transparent"
                                        } transition duration-300 ease-in-out hover:border-blue-400`}
                                >
                                    {item.icon}
                                </Link>

                                <div className="hidden group-hover:block absolute left-16 whitespace-nowrap bg-white text-blue-700 text-base font-medium px-3 py-1 rounded-md shadow-lg z-10">
                                    {item.label}
                                </div>
                            </div>
                        );
                    })}
                    <div className="md:hidden flex">
                        <button
                            onClick={() => setIsExpanded(prev => !prev)}
                            className="text-blue-600 hover:text-blue-700 rounded-full transition"
                            aria-label={isExpanded ? "Collapse Sidebar" : "Expand Sidebar"}
                        >
                            {isExpanded ? <AiFillCaretLeft size={20} /> : <AiFillCaretRight size={20} />}
                        </button>
                    </div>

                </div>

            </div>

        </div>
    );
}
