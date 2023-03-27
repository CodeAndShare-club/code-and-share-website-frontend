import React from 'react';
import Facebook from './Icon/facebook';
import Instagram from './Icon/instagram';
import Twitter from './Icon/twitter';
import Pinterest from './Icon/pinterest';
import Image from 'next/image'
import copyright from './Icon/copyright.svg'






function Contact() {
    //...
    return (
        <div className=" font-sans bg-primary text-beige p-6">
        <div className='flex justify-center items-center space-x-9 max-md:space-x-4'>
         <hr className=' bg-beige h-1 w-2/5 rounded-md'/>
        <label className=' font-bold text-xl grow-0 text-center'> Get in touch with us </label>
        <hr className=' bg-beige h-1 w-2/5 rounded-md'/>
        </div>
        <div className='grid grid-cols-4 gap-4 justify-items-center max-md:grid-cols-2 p-8 '>

          <div >
          <p className=' font-bold text-xl'>About us</p>
          <p>About C&S</p>
          <p>Achievements </p>
          </div>

          <div >
          <p className=' font-bold text-xl'>Our Events</p>
          <p>Coffee Outlet</p>
          <p>StarterPack</p>
          <p>Contact Us</p>
          </div>

          <div >
          <p className=' font-bold text-xl'>Ressources</p>
          <p>Partners</p>
          <p>FAQ</p>
          <p>Support us</p>
          </div>

          <div >
          <p className=' font-bold flex text-xl'>Follow Us</p>
          <div className=' flex space-x-2'>
          <Instagram />
          <Facebook />
          <Twitter/>
          <Pinterest/>
          </div>
          
          </div>

        </div>
        <hr className=' bg-beige h-1 rounded-md justify-self-center'/>
        <div className='flex space-x-2 justify-center pt-1'>
        <Image
                src={copyright}
                alt='copyright picture'
                width={23} height={20}
            />  Code & Share 2023 All Rights Reserved</div>
        </div>
    );
}

export default Contact;
