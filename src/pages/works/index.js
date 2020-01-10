import React, { Component } from 'react';
import styles from './works.module.scss';

export default function Works(){
  
  return (
    <div className={styles.wrapper}>
      <p>My Project</p>
      
      <section className={styles.workSection}>
        <h3>JS Game</h3>
        <div className={styles.workDiv}>

          <div className={styles.cards+" "+styles.game1}>
            <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>Classical Microsoft Mine Sweeper Game with my indepedent algorithm and design</p>
              <h4>Technical Details</h4>
              <p>I use css to restore the classical looking and JS as well as Jquery for the functions. The most tricky part of the algorithm is that when player clicks a block that doesn't have any mine around its eight blocks, how to automatically explore its surrounding blocks until a number-envoloped boundary is formed. I solved the problem by creating a function that open the surrounding blocks when the currently clicked block is 0, and recursively call the function until there is a positive number.</p>
              <h4>Skill Set</h4>
              <p>Javascript, Jquery, Html, Css</p>
              
            </div>
          </div>

          <div className={styles.cards+" "+styles.game2}>
            <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>The gluttonous snake will become longer everytime it eats new food, but beware of biting the snake itself !</p>
              <h4>Technical Details</h4>
              <p>dsfasdfasdfas</p>
              <h4>Skill Set</h4>
              <p>Javascript, Html, Css</p>
              
            </div>
          </div>

          <div className={styles.cards+" "+styles.game3}>
          <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>A very popular Japanese game for kids years ago, where you can feed your electronic pet, making him show different emotions and speak, but if you happen feed him poisonous food, you baby pet could die !</p>
              <h4>Technical Details</h4>
              <p>This project incorporates SVG animation, Greensocks animation library and Javascript. The interface was first drawn with Illustrator and then exported as SVG file. Expression change is realized through re-defining the &lt;path&gt; element's data  of mouth, eyes and eyebrows</p>
              <h4>Skill Set</h4>
              <p>Javascript, GreenSocks, SVG</p>
              
            </div>
          </div>
        </div>
      </section>

      <section className={styles.workSection}>
        <h3>JS Framework</h3>
        <div className={styles.workDiv}>

          <div className={styles.cards+" "+styles.framework1}>
            <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>It's a web app called 'See and Say' for kids to know different sea animals. When clicking a certain animal, its sounding effect will play, at the same time, the animal card will show the information about the animal and the history bar at the bottom keeps recording clicking history.</p>
              <h4>Technical Details</h4>
              <p>The web app is divided into serveral components, each component is resposible for its view and function. the data(module) is stored within root component, where data can be passed to child components through props</p>
              <h4>Skill Set</h4>
              <p>Vue, Css, Html</p>
              
            </div>
          </div>

          <div className={styles.cards+" "+styles.framework2}>
            <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>My portfolio site that you are looking can also be a small project built with react</p>
              <h4>Technical Details</h4>
              <p>I use React scaffolding to create my project starter and I use React Router to link to my different webpages. I also use Sass/Scss for Css predecessor.</p>
              <h4>Skill Set</h4>
              <p>React.js, React Router, React Hook, Sass, Css-module</p>
              
            </div>
          </div>

          <div className={styles.cards}>
          <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>dsfasdfasdfas</p>
              <h4>Technical Details</h4>
              <p>dsfasdfasdfas</p>
              <h4>Skill Set</h4>
              <p>dsfasdfasdfas</p>
              
            </div>
          </div>
        </div>
      </section>
     

      <section className={styles.workSection}>
        <h3>JS Library</h3>
        <div className={styles.workDiv}>

          <div className={styles.cards+" "+styles.library1}>
            <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>A bar and line chart made with d3.js library</p>
              <h4>Technical Details</h4>
              <p>d3.js is an awesome and powerful chart-making JS library, with which you can make any type of chart you want.</p>
              <h4>Skill Set</h4>
              <p>d3.js, html, css</p>
              
            </div>
          </div>

          <div className={styles.cards+" "+styles.library2}>
            <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>Infographic</p>
              <h4>Technical Details</h4>
              <p>Infographic</p>
              <h4>Skill Set</h4>
              <p>Greensocks, html, css</p>
              
            </div>
          </div>

          <div className={styles.cards}>
          <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>dsfasdfasdfas</p>
              <h4>Technical Details</h4>
              <p>dsfasdfasdfas</p>
              <h4>Skill Set</h4>
              <p>dsfasdfasdfas</p>
              
            </div>
          </div>
        </div>
      </section>

      <section className={styles.workSection}>
        <h3>Responsive Website</h3>
        <div className={styles.workDiv}>

          <div className={styles.cards+" "+styles.responsive1}>
            <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>NASA responsive site</p>
              <h4>Technical Details</h4>
              <p>NASA responsive site</p>
              <h4>Skill Set</h4>
              <p>html,css</p>
              
            </div>
          </div>

          <div className={styles.cards+" "+styles.responsive2}>
            <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>Port Hope Fair</p>
              <h4>Technical Details</h4>
              <p>Port Hope Fair</p>
              <h4>Skill Set</h4>
              <p>Bootstrap</p>
              
            </div>
          </div>

          <div className={styles.cards}>
          <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>dsfasdfasdfas</p>
              <h4>Technical Details</h4>
              <p>dsfasdfasdfas</p>
              <h4>Skill Set</h4>
              <p>dsfasdfasdfas</p>
              
            </div>
          </div>
        </div>
      </section>

      <section className={styles.workSection}>
        <h3>UI/UX Design</h3>
        <div className={styles.workDiv}>

          <div className={styles.cards+" "+styles.ui1}>
            <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>Adobe XD design</p>
              <h4>Technical Details</h4>
              <p>Adobe XD design</p>
              <h4>Skill Set</h4>
              <p>XD</p>
              
            </div>
          </div>

          <div className={styles.cards+" "+styles.ui2}>
            <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>snowboard brand ui design</p>
              <h4>Technical Details</h4>
              <p>snowboard brand ui design</p>
              <h4>Skill Set</h4>
              <p>XD, Photoshop, Illusytator</p>
              
            </div>
          </div>

          <div className={styles.cards}>
          <div className={styles.projectPic}></div>
            <div className={styles.projectDisc}>
              <h4>Overview</h4>
              <p>dsfasdfasdfas</p>
              <h4>Technical Details</h4>
              <p>dsfasdfasdfas</p>
              <h4>Skill Set</h4>
              <p>dsfasdfasdfas</p>
              
            </div>
          </div>
        </div>
      </section>


    </div>

  )
    
}