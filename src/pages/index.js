import {Header ,Hero, Events, BlogList, Vision, Faq, Sponsors, Contact} from '@/components';
import styles from '@/styles/Home.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Home({eventsData}) {
  return (
    <>
      <Header/>
      <Hero/>
      <Events eventsData={eventsData}/>
      <BlogList/>
      <Vision/>
      <Faq/>
      <Sponsors/>
      <Contact/>
      
    </>
  )
}

export async function getServerSideProps(context) {
  const events = await fetch('https://codeandshare.pythonanywhere.com/events');
  const eventsData = await events.json();

  return {
    props: {
      eventsData,
    }
  }
}
