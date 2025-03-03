import React, { useRef } from 'react'

import emailjs from '@emailjs/browser';
import { RiMailLine, RiPhoneLine, RiMapPinLine } from 'react-icons/ri'
import { toast } from "react-hot-toast";

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k3b0w3t', 'template_rz44kyl', form.current, {
            publicKey: 'LR6iMnt9axgX2LAEZ',
        })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success("Email sent Successfully", {
                        position: 'bottom-center'
                    });
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error("Email not sent! pls try again", {
                        position: 'bottom-center'
                    })
                },
            );
    };
    return (
        <section id="contact" className="mt-14 py-16 px-4 bg-gray-100">
            <h1
                data-aos="fade-up"
                data-aos-delay="300"
                className="text-5xl text-blue-600 font-bold text-center mb-14">Contact me</h1>
            <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">

                <div className="flex flex-col items-start space-y-6"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                >
                    <h2 className="text-2xl font-semibold">Let's talk</h2>
                    <p className="text-lg text-gray-700">
                        I'm currently available to take on new projects and challenges. Feel free to send a message about anything you want to work on.
                    </p>
                    <div className="flex flex-col space-y-4">
                        <div className="flex items-center space-x-2">
                            <RiMailLine size={20} className='cursor pointer'/>
                            <span className="text-lg text-gray-700">kelvinmakinde3@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RiPhoneLine size={20} className='cursor pointer'/>
                            <span className="text-lg text-gray-700">+2349065273201</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RiMapPinLine size={20} className='cursor pointer'/>
                            <span className="text-lg text-gray-700">Ilorin, Kwara State, Nigeria</span>
                        </div>
                    </div>
                </div>


                <div
                    className="bg-white p-8 rounded-lg shadow-lg"
                    data-aos="fade-left"
                    data-aos-duration="500">
                    <form ref={form} onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-lg font-medium">Your Name</label>
                            <input
                                type="text"
                                id="name"
                                name="your_name"
                                placeholder="Enter your name"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg font-medium">Your Email</label>
                            <input
                                type="email"
                                id="email"
                                name="your_email"
                                placeholder="Enter your email"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg font-medium">Your Message</label>
                            <textarea
                                name="message"
                                id="message"
                                rows="8"
                                placeholder="Input your message"
                                required
                                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-700 cursor-pointer"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div >
        </section >)
}

export default Contact
