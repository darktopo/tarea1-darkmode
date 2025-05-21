import React, { useState } from 'react'
import Cards from './components/Cards'

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => setDarkMode(!darkMode);

  return (
    <>
      <img
        src={darkMode ? "/public/img/sol.svg" : "/public/img/luna.svg"}
        className={`h-10 absolute right-5 top-2 cursor-pointer md:right-20 ${darkMode ? 'fill-white' : ''} `}
        onClick={handleToggle}
      />
      <div className={`w-full h-screen flex flex-col px-8 ${darkMode ? 'bg-[#111827] text-white' : 'bg-white text-black'} md:pt-8 md:h-220`}>
        <div className='md:flex md:flex-row md:justify-around md:pb-8 msd:w-200'>
          <h1 className='text-4xl font-serif pt-8'>The creative crew</h1>
          <div className=' px-5 mt-4 '>
            <h2 className='text-lg font-semibold'>Who we are</h2>
            <p className='text-sm md:w-75 md'>We are team of creatively diverse
              driven. Innovative individuals working in
              various locations from the world.</p>
          </div>
        </div>
        <br />
        <Cards />
      </div>
    </>
  )
}
