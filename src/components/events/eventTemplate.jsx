import React from 'react'

export default function EventTemplate({name, image, description}) {
  return (
    <div className='flex flex-col justify-center items-center w-full bg-secondary bg-opacity-50 drop-shadow-2xl shadow-secondary shadow-md font-sans rounded-xl gap-4 px-4 py-8 h-full'>
        <h2 className='text-primary font-bold p-2 text-4xl'>
            {name}
        </h2>

        <img src={'https://codeandshare.pythonanywhere.com/'+image} alt="Event's image" className='p-2 rounded-xl h-80 w-full'/>

        <p className='text-white leading-5 p-2 text-2xl h-24  text-justify'>
            {description}
        </p>

        <br />

        <button className='text-center font-thin text-xl p-3 px-4 bg-primary text-white rounded-xl transform hover:scale-105 transition-all duration-150'>
            See more
        </button>
    </div>
  )
}
