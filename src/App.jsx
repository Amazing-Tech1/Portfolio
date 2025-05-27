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
    AOS.init({
      duration: 1500,
      easing: 'ease-out'
    });
  }, []);
  

  return (
    <div className='relative flex overflow-x-hidden'>
      <Toaster />
      <div>
        <div className='fixed top-0 md:left-0 md:w-[8.333%] z-3'>
          <Sidebar />
        </div>
      </div>
      <div className='relative w-full md:ml-[8.333%]'>
        <Home />
        <About />
        <Works />
        <Portfolio setSelectedProject={setSelectedProject} />
        <Contact />
        <Footer />
        {selectedProject && (
          <div
            data-aos="zoom-in"
            data-aos-delay="300"
            className="fixed inset-0 z-50 w-full h-screen bg-[#00000090] overflow-y-auto overflow-x-hidden p-4 flex justify-center items-center"
          >
            <div className="max-w-5xl w-full">
              <Project project={selectedProject} setSelectedProject={setSelectedProject} />
            </div>
          </div>
        )}



      </div>
    </div>
  )
}

export default App
