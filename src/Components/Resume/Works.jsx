import React from 'react';
import Skills from './Skills';

function Works() {
    return (
        <div id='work' className='w-full overflow-x-hidden bg-gray-50 mt-14'>
            <div className='max-w-9/10 m-auto'>
                <div
                    data-aos="fade-down"
                    data-aos-delay="300"
                    className='my-10 text-center justify-center'
                >
                    <h1 className='font-bold text-5xl text-blue-600'>Skills</h1>
                    <i className="text-gray-600 mt-4 text-lg">
                        Here are some of the technologies and tools I'm proficient with.
                    </i>
                </div>

                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className='w-full my-7'
                >
                    <Skills />
                </div>
            </div>
        </div>
    );
}

export default Works;
