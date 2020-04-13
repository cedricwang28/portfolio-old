import React, { Component } from 'react';
import styles from './works.module.scss';

export default function Works(){
  
  return (
    <div className={styles.wrapper}>
      <h1>My Projects</h1>

      <div className={styles.grid}>

        <div className={styles.card}>

          <div className={styles.imgContainer}>
            <img src={require('../../assets/connect4.png')}></img>
            <div className={styles.overlay}></div>
          </div>
          
          <div className={styles.text}>
            <h2>Connect Four</h2>
            <p className={styles.intro}>A real-time Connect4 game, two real players required. When two windows are opened, the game starts.</p>
            <p className={styles.skill}>Express, Socket.io, Jquery</p>
            <p className={styles.goto}>
              <a href="https://calm-basin-60014.herokuapp.com/" target="_blank">
                <div className={styles.viewRepo}>View</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
              <a href="https://github.com/cedricwang28/Connect4-Game" target="_blank">
                <div className={styles.viewRepo}>Repo</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img src={require('../../assets/mineSweeper.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>MineSweeper</h2>
            <p className={styles.intro}>Classical Mine Sweeper game with my algorithm design.</p>
            <p className={styles.skill}>Javascipt, Jquery</p>
            <p className={styles.goto}>
              <a href="https://cedricwang28.github.io/Mine_Sweeper/" target="_blank">
                <div className={styles.viewRepo}>View</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
              <a href="https://github.com/cedricwang28/Mine_Sweeper" target="_blank">
                <div className={styles.viewRepo}>Repo</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img src={require('../../assets/github.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>Githuber Search</h2>
            <p className={styles.intro}>An app used for searching any github user by their usernames.</p>
            <p className={styles.skill}>React, Axios, Github API</p>
            <p className={styles.goto}>
              <a href="https://cedricwang28.github.io/Githuber_search/" target="_blank">
                <div className={styles.viewRepo}>View</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
              <a href="https://github.com/cedricwang28/Githuber_search" target="_blank">
                <div className={styles.viewRepo}>Repo</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img src={require('../../assets/chat.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>Real-time Chat</h2>
            <p className={styles.intro}>A real-time chat room that allows multiple users to chat at the same time.</p>
            <p className={styles.skill}>Express, Socket.io</p>
            <p className={styles.goto}>
              <a href="https://tranquil-gorge-98081.herokuapp.com/" target="_blank">
                <div className={styles.viewRepo}>View</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
              <a href="https://github.com/cedricwang28/online-chat" target="_blank">
                <div className={styles.viewRepo}>Repo</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img src={require('../../assets/rest.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>REST API</h2>
            <p className={styles.intro}>A restful API used for searching objects based on Geolocation.</p>
            <p className={styles.skill}>React, Express, Mongodb, Postman</p>
            <p className={styles.goto}>
              <a href="https://calm-basin-60014.herokuapp.com/" target="_blank">
                <div className={styles.viewRepo}>View</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
              <a href="https://github.com/cedricwang28/Connect4-Game" target="_blank">
                <div className={styles.viewRepo}>Repo</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img src={require('../../assets/articleManagement.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>Management System</h2>
            <p className={styles.intro}>Article management system, It has user sign-up, log-in and article management functions.</p>
            <p className={styles.skill}>NodeJS, Express, ejs, MongoDB</p>
            <p className={styles.goto}>
              <a href="https://article-managementt.herokuapp.com/" target="_blank">
                <div className={styles.viewRepo}>View</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
              <a href="https://github.com/cedricwang28/Article-management-system" target="_blank">
                <div className={styles.viewRepo}>Repo</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
            </p>
          </div>
        </div>




        <div className={styles.card}>
          <div>
            <img src={require('../../assets/lakeridge.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>Lakeridge Health</h2>
            <p className={styles.intro}>The app helps doctor to check if a patient eligible for lung cancer clinical trial.</p>
            <p className={styles.skill}>Html, CSS, Javascript</p>
            <p className={styles.goto}>
              <a href="https://cedricwang28.github.io/Lakeridge-Health" target="_blank">
                <div className={styles.viewRepo}>View</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
              <a href="https://github.com/cedricwang28/Lakeridge-Health" target="_blank">
                <div className={styles.viewRepo}>Repo</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img src={require('../../assets/restaurant.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>Restaurant UI</h2>
            <p className={styles.intro}>This is an UI design for a restaurant online reservation app.</p>
            <p className={styles.skill}>Html, CSS, Javascript, jquery</p>
            <p className={styles.goto}>
              <a href="https://cedricwang28.github.io/restaurant-UI/" target="_blank">
                <div className={styles.viewRepo}>View</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
              <a href="https://github.com/cedricwang28/restaurant-UI" target="_blank">
                <div className={styles.viewRepo}>Repo</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img src={require('../../assets/porthope.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>Responsive Site</h2>
            <p className={styles.intro}>This is an responsive site that fits laptop, tablet and cellphone.</p>
            <p className={styles.skill}>Html, CSS, Javascript</p>
            <p className={styles.goto}>
              <a href="https://cedricwang28.github.io/port-hope-fair/" target="_blank">
                <div className={styles.viewRepo}>View</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
              <a href="https://github.com/cedricwang28/port-hope-fair" target="_blank">
                <div className={styles.viewRepo}>Repo</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img src={require('../../assets/d3.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>Data Visualization</h2>
            <p className={styles.intro}>Data visualization of precipitation and temperature using D3.js.</p>
            <p className={styles.skill}>D3.js, Javascript</p>
            <p className={styles.goto}>
              <a href="https://cedricwang28.github.io/D3-assignment/" target="_blank">
                <div className={styles.viewRepo}>View</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
              <a href="https://github.com/cedricwang28/D3-assignment" target="_blank">
                <div className={styles.viewRepo}>Repo</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img src={require('../../assets/crafterina.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>Wordpress Site</h2>
            <p className={styles.intro}>A jewelry B2C website built with wordpress.</p>
            <p className={styles.skill}>Wordpress, CSS</p>
            <p className={styles.goto}>
              <a href="http://crafterina.cedricwang.com/crafterina/" target="_blank">
                <div className={styles.viewRepo}>View</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
              <a href="https://github.com/cedricwang28/wp-content" target="_blank">
                <div className={styles.viewRepo}>Repo</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img src={require('../../assets/grocery.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>Easy Grocery</h2>
            <p className={styles.intro}>A B2C online grocery site built with php and javascript.</p>
            <p className={styles.skill}>Javascript, jquery, PHP</p>
            <p className={styles.goto}>
              <a href="http://cedricwang.com/grocery/" target="_blank">
                <div className={styles.viewRepo}>View</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
              <a href="https://github.com/cedricwang28/easy_grocery" target="_blank">
                <div className={styles.viewRepo}>Repo</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
            </p>
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img src={require('../../assets/mad.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>Mad Movie</h2>
            <p className={styles.intro}>A Movie information site built with php and javascript.</p>
            <p className={styles.skill}>Javascript, jquery, PHP</p>
            <p className={styles.goto}>
              <a href="http://cedricwang.com/grocery/" target="_blank">
                <div className={styles.viewRepo}>View</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
              <a href="https://github.com/cedricwang28/easy_grocery" target="_blank">
                <div className={styles.viewRepo}>Repo</div>
                <div><img src={require('../../assets/arrow.png')} /></div>
              </a>
            </p>
          </div>
        </div>





      </div>

      
      
      

     

      


    </div>

  )
    
}