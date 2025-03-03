import { useState, useEffect } from 'react'
import Sidebar from './Components/Sidebar'
import Home from './Components/Home'
import About from './Components/About'
import Works from './Components/Resume/Works'
import Portfolio from './Components/Portfolio/Portfolio'
import Project from './Components/Portfolio/Project'
import Contact from './Components/Contact'
import { Toaster } from 'react-hot-toast'
import Footer from './Components/Footer'
import AOS from 'aos'
import 'aos/dist/aos.css'



function App() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 1500,
      easing: 'ease-out'
    });
  }, []);

  return (
    <div className='flex h-screen'>
      <Toaster />
      <div className='fixed  h-full md:top-0 md:left-0 bottom-0 w-[8.333%] z-3'>
        <Sidebar />
      </div>
      <div className='relative md:ml-[8.333%] w-full h-full z-1'>
        <Home />
        <About />
        <Works />
        <Portfolio setSelectedProject={setSelectedProject} />
        <Contact />
        <Footer />
        {selectedProject &&
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className='fixed inset-0 z-2 w-full top-0 h-screen flex items-center justify-center bg-[#00000090] '>
            <Project project={selectedProject} setSelectedProject={setSelectedProject} />
          </div>
        }
      </div>
    </div>
  )
}

export default App
