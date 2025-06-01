import React from 'react'

const Home = () => {
  return (
    <section id='home' className='min-h-screen flex items-center justify-center relative'>

      <div className='text-center z-10'>
        
        <h6 className='text-5xl md:text-6xl mb-6 bg-gradient-to-r from-blue-500 to-purple-400 bg-clip-text text-transparent leading-right'>
          Hi, I'm Satyam Sahu
        </h6>

        <p className="tex-gray-400 text-lg mb-8 max-w-lg mx-auto">
            I’m a full-stack developer who loves crafting clean, scalable web
            applications. My goal is to build solutions that offer both
            exceptional performance and a delightful user experience.
        </p>

        <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-blue-500 text-white py-3 px-6 rounded-4xl font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded-4xl font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>

      </div>

    </section>
  )
}

export default Home