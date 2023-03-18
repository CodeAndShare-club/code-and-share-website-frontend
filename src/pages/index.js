import {Header ,Hero, Events, BlogList, Vision, Faq, Sponsors, Contact} from '@/components';
import styles from '@/styles/Home.module.css'


export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <Events/>
      <BlogList/>
      <Vision/>
      <Faq/>
      <Sponsors/>
      <Contact/>
    </>
  )
}
