import React, { useState } from 'react';
import styles from './Intro.module.scss';
import {Link, Route, NavLink} from 'react-router-dom';
import { Switch } from '@material-ui/core';

export default function Intro(){

  const [toggle,setToggle] = useState(0);
  
  return (
    <div>
      <section className={styles.jumbotron}>
        <p>Tianwei Wang - Portfolio Website</p>

      </section>

      

      <div className={styles.mainWraper}>
        <div>
          <img src={require('../../assets/photo2.jpg')} className={styles.myPhoto}></img>
        </div>

        <div>
          <h1>About Me</h1>
          <div className={styles.toggle}>
            <span>boring</span>
            <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} 
             onClick={()=>{
               setToggle(toggle+1);
               alert(toggle);
             }} />
          </div>
          
          <p className={styles.aboutMe}>My name is Tianwei Wang, you can also call me Cedric. I am a second year Web Design Student in Durham College and I am especially interested in coding with both Vanilla Javascript and React. Prior to the program, I had gone through years in finding what I really want to do.
            I spent four years finishing a Bachelor degree of Network Engineering, during the time I even had one year experience of learning Civil Engineering.  Perhaps due to the unwillingness of being confined in my hometown doing, from my opinion, too 'down-to-earth' job forever, and also being driven by the fantacy of 
            doing a high-end job, wearing decent suit everyday and taking business class flying all over the world all year round, 3 years later, I got my Master degree of Finance and started to work in a big insurance company in a big city. But gradually, day-to-day unskilled routine work had torn my sweet dream, it made me ponder deeply, is this the stability I am looking for?
            do I really want to idle my whole life doing the basic, unprofessional work with little growth?   I wouldn't allow my life being that way, so one year later, I quit my job and came to Canada to start my new life from scratch. 
          </p>
        </div>
      
      
     
      </div>
    </div>
    

  )
    
}