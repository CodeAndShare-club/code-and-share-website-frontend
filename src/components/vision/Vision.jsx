import React from 'react';
import Image from 'next/image'






function Vision() {
    


    return (
    <div className=" bg-beige w-full text-primary p-10 font-sans  max-lg:p-2" >
    <div className='flex justify-center items-center space-x-11 max-lg:space-x-3 max-sm:space-x-2 '> <hr className='  bg-primary/50 h-2 w-1/3 rounded-md'/>
        <label className=' font-bold grow-0 text-5xl max-lg:text-3xl max-sm:text-2xl'> Our  Vision </label>
        <hr className=' bg-primary/50 h-2 w-1/3 rounded-md'/>
      </div>
    <div className=" bg-beige text-primary flex px-6 py-24 font-sans space-x-4 max-lg:block " >

        <div className=" flex z-0  w-auto justify-center max-lg:pb-32  ">
        
            <div className=' z-30 lg:w-80 lg:h-80 
            max-lg:w-60  max-lg:h-60 bg-accent/25 rounded-3xl translate-x-24 translate-y-32
             max-lg:translate-x-10 
            max-sm:w-48  max-sm:h-48
            max-sm:translate-y-20
            '>  photo 1
                 </div>
            <div className=' z-20 max-sm:w-48  max-sm:h-48 lg:w-80 lg:h-80 sm:w-60 max-lg:h-60 bg-accent/25 rounded-3xl -translate-x-10 -translate-y-10 '> photo 2 </div>
          
          
        </div>
       
        <div className='justify-center lg:w-1/2 z-50 '> 
            <p className=' p-4 text-2xl max-lg:text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Massa, fermentum id id vitae, integer fermentum tellus.
                 In vitae id nisl quis ornare diam commodo in vel dolor.
                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Massa, fermentum id id vitae, integer fermentum tellus.
                 In vitae id nisl quis ornare diam commodo in vel dolor.
                 ctetur adipiscing elit. Massa, fermentum id id vitae, 
                 integer fermentum tellus. In vitae id nisl quis ornare
                  diam commodo in vel dolor. </p>

            <button className=' bg-accent/25 rounded-md text-3xl py-6 px-16 font-bold  max-lg:text-xl'> Our Vision </button>
            
            </div>
        
     </div></div>
    );
}

export default Vision;