import React from 'react'
import logo from '../assets/logo.png'

function Footer() {
    const currYear = new Date().getFullYear()
    return (
        <div className="bg-gray-300">
            <div className="bg-[#00000090] py-7">
                <div className="text-center text-gray-200 text-sm h-full">
                    <img src={logo} alt="Logo" className="w-10 h-10 mx-auto" />
                    <h1 className='text-sm text-blue-700'>AMAZING</h1>
                    <p className="mt-2">Copyright &copy; {currYear} All rights reserved</p>
                    <p>Designed by <i>Makinde Kelvin O</i></p>

                </div>


            </div>
        </div>
    )
}

export default Footer
