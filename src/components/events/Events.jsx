import React, { useEffect, useState } from 'react';
import EventTemplate from './eventTemplate.jsx';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Events.module.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import useWindowDimensions from '@/utils/api/useWindowDimensions.js';
import SwiperNavButton from './SwiperNavButton.jsx';

function Events({eventsData}) {

    const [index, setIndex] = useState(0);

    const [events, setEvents] = useState(eventsData.filter(event => event.new));

    const [previousEvents, setPreviousEvents] = useState(eventsData.filter(event => !event.new));


    const { height, width } = useWindowDimensions();

    //...
    return (
        <div className="font-sans flex flex-col justify-center items-center bg-whiteBg p-2 gap-8 w-full">    

            <h2 className='flex justify-center items-center gap-12 lg:gap-16 w-full px-6 py-2 lg:p-6 text-primary text-3xl md:text-5xl lg:text-7xl font-extrabold text-center before:block before:w-full before:bg-primary  before:h-1 before:top-1/2
                after:block after:w-full after:bg-primary after:h-1 after:top-1/2'>
                Our&nbsp;Events
            </h2> 

            <div className='w-full'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={width < 300 ? 1 : width < 1024 ? 2 : 3}
                    navigation={true}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    scrollbar={{ draggable: false }}
                    onSwiper={(swiper) => console.log(swiper)}
                    //onSlideChange={() => console.log('slide change')}
                    modules={[Pagination, Navigation]}
                    className="mySwiper bg-whiteBg"
                >
                    {events?.map(event => {
                        return(
                            <SwiperSlide className='p-4'>
                                <EventTemplate key={event.name} name={event.name} image={event.icon} description={event.description}/>
                            </SwiperSlide>
                        )
                    })}

                    {/* <SwiperNavButton /> */}
                    
                </Swiper>
            </div>

                

            

            <h2 className='flex self-start gap-16 w-full px-6 lg:p-6 text-primary text-3xl lg:text-5xl font-bold'>
                Get to know our previous events
            </h2>  

            {/* <div className='grid grid-cols-2 lg:grid-cols-3 justify-between items-center gap-16 p-6'>
                {previousEvents?.map(event => {
                    return(
                        <EventTemplate key={event.name} name={event.name} image={event.icon} description={event.description}/>
                    )
                })}
            </div>    */}

            <div className='w-full'>
                <Swiper
                    spaceBetween={50}
                    slidesPerView={width < 300 ? 1 : width < 1024 ? 2 : 3}
                    navigation={true}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true
                    }}
                    scrollbar={{ draggable: false }}
                    onSwiper={(swiper) => console.log(swiper)}
                    //onSlideChange={() => console.log('slide change')}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {previousEvents?.map(event => {
                        return(
                            <SwiperSlide className='p-4'>
                                <EventTemplate key={event.name} name={event.name} image={event.icon} description={event.description}/>
                            </SwiperSlide>
                        )
                    })}

                    {/* <SwiperNavButton /> */}
                    
                </Swiper>
            </div>
            
        </div>
    );
}

export default Events;
