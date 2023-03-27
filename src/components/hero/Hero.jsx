import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import {codeandshare} from "../../../public/logo.svg";

const Hero = () => {
    return (
    <section className='bg-primary  lg:mx-12 lg:my-8 lg:pl-[7%] lg:pr-[3%] py-[9%]'>
        <div className='flex flex-col lg:flex-row w-full '>
            {/* left side  */}
            <div className='flex-1  md:flex-row md:space-x-0  lg:flex-col w-full lg:w-7/12'>
                <div className="flex flex-col gap-4 justify-center  ">

                    <h1 className="font-sans font-bold text-white lg:text-left lg:text-7xl text-center  text-6xl ">
                            Code & Share
                    </h1>

                    <p className="font-sans font-normal text-white text-center lg:text-left lg:text-2xl text-xl pt-[2%] lg:px-0 px-[5%]">
                            Le créateur de logo texte de DesignEvo vous aidera à créer n'importe quel logo de texte cool en quelques minutes, sans aucune compétence requise ! Avec une large sélection de designs de texte cool et de polices de caractères, il.
                    </p>

                    <div className="flex justify-center lg:pt-[4%] pt-[5%] pb-[10%] lg:pb-0 ">
                            <button className='lg:w-60 lg:h-15 text-centre sm:h-14 sm:w-40 w-40 h-14  rounded-[18px] text-primary lg:text-2xl text-xl font-sans transition duration-200 ease-in transform sm:hover:scale-105 bg-white tracking-wider leading-8 py-3  md:py-2 shadow-inner'>See More</button>                        </div>
                     </div>
                     
            </div>
            {/* right side  */}
            <div className="flex flex-col lg:flex-row w-full lg:w-4/12 lg:justify-center grid place-items-center">
            <div className='lg:w-full lg:h-full w-[30%] h-[-10%] '>
                    <Tilt>
                        <Image src="/logo.png" alt="logo"  width={250} height={150} />
                    </Tilt>
            </div>
            </div>
         </div>
    </section>

    )
  }
  
  export default Hero