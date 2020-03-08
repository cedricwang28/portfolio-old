import React, { Component } from 'react';
import styles from './works.module.scss';

export default function Works(){
  
  return (
    <div className={styles.wrapper}>
      <h1>My Project</h1>
      
      <section className={styles.workSection}>
        <div className={styles.workDiv}>

          <div className={styles.cards+" "+styles.game1}>
            <div className={styles.projectPic}>  
              <div className={styles.hoverBg}>
                <p>
                  <a href="https://cedricwang28.github.io/mineSweeper/"><img src={require('../../assets/arrow.png')} className={styles.arrow}></img> View Project</a>
                </p>
                <p>
                  <a href="https://github.com/cedricwang28/mineSweeper"><img src={require('../../assets/arrow.png')} className={styles.arrow}></img> Repository</a>
                </p>
              </div>
            </div>
            
          </div>


          <div className={styles.cards+" "+styles.framework3}>
            <div className={styles.projectPic}>
              <div className={styles.hoverBg}>
                <p>
                  <a href="https://cedricwang28.github.io/github-user-search"><img src={require('../../assets/arrow.png')} className={styles.arrow}></img> View Project</a>
                </p>
                <p>
                  <a href="https://github.com/cedricwang28/github-user-search"><img src={require('../../assets/arrow.png')} className={styles.arrow}></img> Repository</a>
                </p>
              </div>
            </div>
            
          </div>


          <div className={styles.cards+" "+styles.framework1}>
            <div className={styles.projectPic}></div>
            
          </div>


          <div className={styles.cards+" "+styles.library1}>
            <div className={styles.projectPic}></div>
            
          </div>

          <div className={styles.cards+" "+styles.rest}>
            <div className={styles.projectPic}></div>
            
          </div>

          <div className={styles.cards+" "+styles.chat}>
            <div className={styles.projectPic}></div>
            
          </div>

          <div className={styles.cards+" "+styles.connect4}>
            <div className={styles.projectPic}></div>
            
          </div>

          <div className={styles.cards+" "+styles.porthope}>
            <div className={styles.projectPic}></div>
            
          </div>

          <div className={styles.cards+" "+styles.madmovie}>
            <div className={styles.projectPic}></div>
            
          </div>

          <div className={styles.cards+" "+styles.ui}>
            <div className={styles.projectPic}></div>
            
          </div>
          

          
        </div>
      </section>

      
     


     

      


    </div>

  )
    
}