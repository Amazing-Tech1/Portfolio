import React from 'react';
import { FaCode, FaLaptopCode, FaMobileAlt } from 'react-icons/fa';

const services = [
  {
    icon: <FaCode className="text-blue-600 w-10 h-10" />,
    title: 'Full-Stack Development',
    description: 'Building fast, scalable web applications using the MERN stack. From backend APIs to responsive frontend interfaces.',
  },
  {
    icon: <FaLaptopCode className="text-blue-600 w-10 h-10" />,
    title: 'Frontend Engineering',
    description: 'Designing clean, intuitive user interfaces using React, Tailwind CSS, and modern design practices.',
  },
  {
    icon: <FaMobileAlt className="text-blue-600 w-10 h-10" />,
    title: 'Mobile Optimization',
    description: 'Creating responsive designs and mobile-friendly layouts for seamless performance across all devices.',
  },
];

function Services() {
  return (
    <section id="services" className="max-w-7xl mx-auto mt-20 px-6 scroll-mt-40">
      <div
        className="text-center mb-12"
        data-aos="zoom-in"
        data-aos-delay="300"
      >
        <h2 className="text-4xl font-bold text-blue-600">My Services</h2>
        <p className="text-gray-600 mt-4 text-lg">What I can do to help your business grow</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
            data-aos="zoom-in"
            data-aos-delay={index * 150}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
