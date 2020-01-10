import React, { Component } from 'react';
import styles from './Intro.module.scss';
import {Link, Route, NavLink} from 'react-router-dom'

export default function Intro(){
  
  return (
    <div>
      <section>
        <div className={styles.banner}>
          
        </div>
        <p>Tianwei Wang's</p>
        <p>Portfio Website</p>
      </section>

      

      <div className={styles.mainWraper}>
        <div>
          <img src={require('../../assets/photo2.jpg')} className={styles.myPhoto}></img>
        </div>

        <div>
          <h1>About Me</h1>
          <p>I am a dynamic figure, often seen creating fake emails to get more free trials and preaching to Icelandic sheepherders. Sometimes, if you're lucky, you'll even see me erecting massive 500-story skyscrapers in my backyard. When I am bored, I charm cats with my godlike yodelling skills and my transcendental clarinet squeaks.

          I am motivated to take risks. Sometimes, because I like to live dangerously, I play chess with one less pawn and do geometry in pen. Sometimes I even play on the Wii without the safety strap! I know - I'm a real daredevil. Sometimes I'm even amazed myself that I've managed to survive this long in the first place, what with all these totally dangerous and not at all normal feats! But nothing quite beats the adrenaline rush that I get from participating in a class discussion.

          What many may find perplexing is St John's College's (frustrating) inability to spell my 4-letter name. However, this is simply one of many testaments to the fact that I simply transcend the English langua
          </p>
        </div>
      
      
     
      </div>
    </div>
    

  )
    
}