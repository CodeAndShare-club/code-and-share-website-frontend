import React from 'react'

export default function EventTemplate({name, image, description}) {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-secondary bg-opacity-50 drop-shadow-2xl shadow-secondary shadow-md font-sans rounded-xl gap-4 px-4 py-4 lg:py-8 mb-8'>
        <h2 className='text-primary font-bold p-2 text-[11px] sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl'>
            {name}
        </h2>

        <img src={`https://codeandshare.pythonanywhere.com/${image}`} alt="Event's image" className='lg:p-2 rounded-xl h-40 sm:h-48 lg:h-80 w-full'/>

        <p className='text-white leading-none lg:leading-4 xl:leading-5 p-2 text-[10px] sm:text-sm md:text-base lg:text-xl h-20 lg:h-24 mb-4 text-justify'>
            {description}
        </p>

        <br />

        <button className='text-center font-thin text-xs sm:text-base lg:text-xl p-2 lg:p-3 lg:px-4 bg-primary text-white rounded-xl transform hover:scale-105 transition-all duration-150'>
            See more
        </button>
    </div>
  )
}
