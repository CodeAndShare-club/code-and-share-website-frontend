import React from 'react'
import { useSwiper } from 'swiper/react'


export default function SwiperNavButton() {
    const swiper = useSwiper();
    return (
        <div className=''>
            <button className='bg-accent bg-opacity-40 rounded-full p-8 absolute right-0'
                onClick={() => swiper.slidePrev()}
            >Prev
            </button>
            <button className='bg-accent bg-opacity-40 rounded-full p-8 absolute right-0'
                onClick={() => swiper.slideNext()}
            >Next
            </button>
        </div>
    )
}
