import React from 'react';
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './faq.module.css'
import back from '../../../public/fond.jpg'

function Faq() {
    //...
    return (
        <div className={styles.contain}>
    <div style={{zIndex: -1,position: "fixed",width: "100vw",height: "100vh"}}>
       
    </div>
    <div className={styles.header}>
    <img style={{marginLeft:20}} src='/barre.jpg'></img>
    
     <h1 style={{fontSize:70, color:"#FFF"}}>Q&A</h1>
     <img style={{marginRight:20}} src='/barre.jpg'></img>
     </div>
     <div>
      <section >
        <div className={styles.container}>
          <div className={styles.cards}>
          <div className={styles.card} >
          <div><img src='/guillumets.jpg'></img></div>
              <div className={styles.col}><h3 className={styles.enonce}>Question1</h3>
              <p className={styles.answer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                 saepe nemo ipsam quod doloribus dolores fugiat est aperiam fuga
                  similique nulla laboriosam. Voluptatem tempora incidunt illum,
                   odit molestiae officia sed.</p></div>
            </div>
            <div className={styles.card}>
            <div><img src='/guillumets.jpg'></img></div>
              <div className={styles.col}><h3 className={styles.enonce}>Question2</h3>
              <p className={styles.answer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                 saepe nemo ipsam quod doloribus dolores fugiat est aperiam fuga
                  similique nulla laboriosam. Voluptatem tempora incidunt illum,
                   odit molestiae officia sed.</p></div>
            </div>
            <div className={styles.card}>
            <div><img src='/guillumets.jpg'></img></div>
              <div className={styles.col}><h3 className={styles.enonce}>Question3</h3>
              <p className={styles.answer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                 saepe nemo ipsam quod doloribus dolores fugiat est aperiam fuga
                  similique nulla laboriosam. Voluptatem tempora incidunt illum,
                   odit molestiae officia sed.</p></div>
            </div>
            </div>
            <div className={styles.containerr}>
              <div className={styles.cardss}>
            <div className={styles.card} style={{marginRight:20}}>
            <div><img src='/guillumets.jpg'></img></div>
              <div className={styles.col}><h3 className={styles.enonce}>Question4</h3>
              <p className={styles.answer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                 saepe nemo ipsam quod doloribus dolores fugiat est aperiam fuga
                  similique nulla laboriosam. Voluptatem tempora incidunt illum,
                   odit molestiae officia sed.</p></div>
            </div>
            <div className={styles.card}>
              <div><img src='/guillumets.jpg'></img></div>
              <div className={styles.col}><h3 className={styles.enonce}>Question5</h3>
              <p className={styles.answer}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex,
                 saepe nemo ipsam quod doloribus dolores fugiat est aperiam fuga
                  similique nulla laboriosam. Voluptatem tempora incidunt illum,
                   odit molestiae officia sed.</p></div>
              
            </div>
            </div>
          </div>
        </div>
      </section>
     </div>
     <div className={styles.contactinfo}>
      <div><p className={styles.fill}>lqksjlkqsjkj</p></div>
      <div><p className={styles.ask}>You didn't get your answer yet?Contact our team!</p></div>
      <div><button className={styles.bouton}><p className={styles.textbouton}>Get in touch</p></button></div>
     </div>
    <div style={{color:"#0b0f38"}}>bonjouekjj</div>
    </div>
    );
}

export default Faq;
