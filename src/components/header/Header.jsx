import React ,{ useState} from 'react';
import Image from "next/image";
import { Transition } from '@headlessui/react';
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen , SetIsOpen] = useState(false);
  return (
    <div className='font-sans'>
        {/* For Main NavContainer  */}
        <nav className='w-full '>

            <div className='w-full '>

                <div className=' flex items-center  h-20 w-full'> 
                {/* Logo's section  */}
                    <div className='flex items items-centre ml-10 lg:mx-16 justify-between w-full'>
                        <div className='flex justify-centre items-centre flex-shrink-0 cursor-pointer w-48 h-12'>
                            <Image src="/logo.png" alt="logo" width={35} height= {70} />
                            
                        </div>
                    </div>
                    {/*  */}
                    <div className='hidden lg:block w-full  '>
                        <div className='flex  justify-center items-baseline space-x-4 text-centre'>
                            <Link 
                            activeClass='About'
                            to='About'
                            smooth={true}
                            offset={50}
                            duration={500}
                            className='cursor-pointer text-primary font-semibold px-3 py-2 text-lg '  >
                                About
                            </Link>
                            <Link 
                            activeClass='Events'
                            to='Events'
                            smooth={true}
                            offset={50}
                            duration={500}
                            className='cursor-pointer text-primary font-semibold px-3 py-2 text-lg '  >
                                Events
                            </Link>
                            <Link 
                            activeClass='OurTeam'
                            to='OurTeam'
                            smooth={true}
                            offset={50}
                            duration={500}
                            className='cursor-pointer text-primary font-semibold px-3 py-2 text-lg '  >
                                Our Team
                            </Link>
                            <Link 
                            activeClass='Sponsors'
                            to='Sponsors'
                            smooth={true}
                            offset={50}
                            duration={500}
                            className='cursor-pointer text-primary font-semibold px-3 py-2 text-lg '  >
                                Sponsors
                            </Link>
                            <Link 
                            activeClass='ContactUs'
                            to='ContactUs'
                            smooth={true}
                            offset={50}
                            duration={500}
                            // hover:bg-purple bg-secondary text-white hover:text-white
                            className='cursor-pointer text-primary px-3 py-2  text-lg font-semibold text-center'  >
                                Contact Us
                            </Link>
                        </div>
                    </div>
                    {/* Mobile reponsive  */}
                    <div className='mr-10 flex lg:hidden'>
                        <button
                        onClick = {() => SetIsOpen(!isOpen)} type="button" 
                        className=' text-primary inline-flex items-center justify-center p-2 rounded hover:bg-primary hover:text-white focus:outline-none focus:ring-offset-primary focus:ring-primary'
                        aria-controls='mobile-menu'
                        aria-expanded='false'
                        >
                            <span className='sr-only'> Open main menu </span>
                            { (! isOpen) ? (
                                <svg className='block h-6 w-6 ' xmlns='http:www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24 ' stroke='currentColor' aria-hidden='true'>
                                   <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2" d='M4 6h16M4 12h16M4 18h16' />
                                </svg>
                            ) : (
                                <svg 
                                    className='block h-6 w-6 '
                                    xmlns='http:www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24 '
                                    stroke='currentColor'
                                    aria-hidden='true'>
                                   <path  
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth="2"
                                        d='M6 18L18 6M6 6l12 12' />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>               
            </div>
            <Transition
                show={isOpen}
                enter="transtion ease-out duration-100 transform"
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='transition ease-in duration-75 transform'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
            >
                 {
                    (ref) => (
                        <div className='lg:hidden px-10 id=mobile-menu '>
                            <div
                                ref={ref}
                                className="px-6 pt-2 pb-3 space-y-1 sm:px-3  "
                            >
                                <Link
                                    href='/About'
                                    activeClass='About'
                                    to='About'
                                    smooth ={true}
                                    offset={50}
                                    duration={500}
                                    className =" cursor-pointer hover:bg-primary text-primary hover:text-white block px-3 py-2 rounded-md text-base font-semibold "
                                >
                                        About
                                </Link>
                                <Link
                                    href='/Events'
                                    activeClass='Events'
                                    to='Events'
                                    smooth ={true}
                                    offset={50}
                                    duration={500}
                                    className =" cursor-pointer hover:bg-primary text-primary  hover:text-white block px-3 py-2 rounded-md text-base font-semibold "
                                >
                                      Events
                                </Link>
                                <Link
                                    href='/OurTeam'
                                    activeClass='OurTeam'
                                    to='OurTeam'
                                    smooth ={true}
                                    offset={50}
                                    duration={500}
                                    className =" cursor-pointer hover:bg-primary text-primary  hover:text-white block px-3 py-2 rounded-md text-base font-semibold "
                                >
                                      OurTeam
                                </Link>
                                <Link
                                    href='/ Sponsors'
                                    activeClass='Sponsors'
                                    to='Sponsors'
                                    smooth ={true}
                                    offset={50}
                                    duration={500}
                                    className =" cursor-pointer hover:bg-primary text-primary  hover:text-white block px-3 py-2 rounded-md text-base font-semibold "
                                >
                                      Sponsors
                                </Link>
                                <Link
                                    href='/ContactUs'
                                    activeClass='ContactUs'
                                    to='ContactUs'
                                    smooth ={true}
                                    offset={50}
                                    duration={500}
                                    className =" cursor-pointer hover:bg-primary text-primary  hover:text-white block px-3 py-2 rounded-md text-base font-semibold "
                                >
                                        Contact Us
                                </Link>
                            </div>
                        </div>
                    )
                 }
            </Transition>
        </nav>
    </div>
  )
}

export default Navbar