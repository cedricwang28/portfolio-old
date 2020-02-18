import React, { useState } from 'react';
import styles from './Intro.module.scss';
import { Switch } from '@material-ui/core';
import '../../../node_modules/font-awesome/css/font-awesome.min.css'; 
import MenuRoundedIcon from '@material-ui/icons/MenuRounded.js';


export default function Intro(){

  const [toggle,setToggle] = useState(1);
  
  return (
    <div>
      <section className={styles.jumbotron}>
        <p>Junior Full-Stack Developer</p>
        

      </section>

      

      <div className={styles.mainWraper}>
        <div>
          <img src={require('../../assets/photo2.jpg')} className={styles.myPhoto}></img>
        </div>

        <div>
          <h1>About Me</h1>
          
          <div className={styles.toggle}>
            {
              toggle?<span>Boring Me</span>:<span>Fun Me</span>
            }

            <Switch value="checkedA" inputProps={{ 'aria-label': 'Switch A' }} 
             onClick={()=>{
            
              if(toggle){
                setToggle(toggle-1);
              }else{
                setToggle(toggle+1);
              }
            
             }} />
          </div>
          {
            toggle?<p className={styles.aboutMe}> My name is Tianwei Wang, you can also call me Cedric. I am a second year Web Design Student in Durham College who loves coding and learns new technology a lot. Prior to the program, I had gone through years in finding what I really want to do.
            I spent four years finishing a Bachelor degree of Network Engineering, during the time I even had one year experience of learning Civil Engineering.  Perhaps due to the unwillingness of being confined in my hometown doing, from my opinion, too 'down-to-earth' job forever, and also being driven by the fantacy of 
            doing a high-end job, wearing decent suit everyday and taking business class flying all over the world all year round, 3 years later, I got my Master degree of Finance and started to work in a big insurance company in a big city. But gradually, day-to-day unskilled routine work had torn my sweet dream, it made me ponder deeply, is this the stability I am looking for?
            do I really want to idle my whole life doing the basic, unprofessional work with little growth?   I wouldn't allow my life going that way, so one year later, I quit my job and came to Canada to start my new life from scratch. 
            </p> : <p className={styles.aboutMe}>I am a big fan of travelling around the world and I am quite curious about the world, as science, technology, medicine, economy, modern political system, all the advanced civilization we enjoy today all have their trace of struggle, development and thriving etched on the world map along our long history. Beside coding, I love getting to know more about science, technology
                    and modern political civilization, as enormous wisdom and insight lie in there, which leads people toward the heyday of mankind.  What fascinates me the most is how those sages thousands years ago, back in the Ancient Greek Times, were able to discover some of the secrets how universe is running and live under a state ruled by democracy. The treasure of Ancient Greek then got passed to Roman Empire, to Frankish Kingdom, to Britain, to USA and then to many parts of the world
                    just like a historical relay race. Although the place where I come from unfortunately hasn't been fully nourished by the light of modern civilization, but my pursuit of freedom is what makes me a real human-being and that's the reason you know me. Hope to see you soon. </p>
          }
          
        </div>
      
      
     
      </div>
    </div>
    

  )
    
}