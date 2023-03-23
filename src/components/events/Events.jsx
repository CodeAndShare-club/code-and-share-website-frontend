import axios from '@/utils/api/axios.js';
import { getEvents } from '@/utils/api/fetchEvents.js';
import { GET_EVENTS_URL } from '@/utils/api/urls.js';
import React, { useEffect, useState } from 'react';
import EventTemplate from './eventTemplate.jsx';
import Image from './image.png'


function Events({eventsData}) {

    const [index, setIndex] = useState(0);

    const [events, setEvents] = useState(eventsData.filter(event => event.new));

    const [previousEvents, setPreviousEvents] = useState(eventsData.filter(event => !event.new));

    const displayEvents = () => {
        
        console.log(index);
        let i = 0;
        setEvents(events.filter(event => events.indexOf(event) > index).concat(events.filter(event => events.indexOf(event) <= index)).filter(event => i++<2));
        console.log(events);
    }


    useEffect(displayEvents, [index]);
    //...
    return (
        <div className="font-sans flex flex-col justify-center items-center bg-whiteBg p-2 gap-8 w-full">    

            <h2 className='flex justify-center items-center gap-16 w-full p-6 text-primary text-5xl lg:text-7xl font-extrabold text-center before:block before:w-full before:bg-primary before:bg-opacity-50 before:h-1 before:top-1/2
                after:block after:w-full after:bg-primary after:bg-opacity-50 after:h-1 after:top-1/2'>
                Our&nbsp;Events
            </h2> 

                {/* Either grid or flex, grid offers better responsive view */}
                <div className='grid grid-cols-2 lg:flex justify-between items-center gap-16 p-4'>
                    {events?.map(event => {
                        return(
                            <EventTemplate key={event.name} name={event.name} image={event.icon} description={event.description}/>
                        )
                    })}
                   
                   <button className='bg-accent bg-opacity-40 rounded-full p-8 absolute right-0'
                        onClick={() => {
                            console.log('Previous: ', index);
                            setIndex((index + 1) % 3);
                            console.log('New: ', index);
                        }}
                   >
                    </button>
                
                </div>       

            

            <h2 className='flex self-start gap-16 w-full p-6 text-primary text-3xl lg:text-5xl font-bold'>
                Get to know our previous events
            </h2>  

            <div className='grid grid-cols-2 lg:grid-cols-3 justify-between items-center gap-16 p-6'>
                {previousEvents?.map(event => {
                    return(
                        <EventTemplate key={event.name} name={event.name} image={event.icon} description={event.description}/>
                    )
                })}
            </div>   
            
        </div>
    );
}

export default Events;
