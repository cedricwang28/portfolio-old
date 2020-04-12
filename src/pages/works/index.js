import React, { Component } from 'react';
import styles from './works.module.scss';

export default function Works(){
  
  return (
    <div className={styles.wrapper}>
      <h1>My Projects</h1>

      <div className={styles.grid}>

        <div className={styles.card}>
          <div>
            <img src={require('../../assets/connect4.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>Connect Four</h2>
            <p className={styles.intro}>A real-time Connect4 game, two real players required. When two windows are opened, the game starts.</p>
            <p className={styles.skill}>Express, Socket.io, Jquery</p>
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
          </div>
        </div>

        <div className={styles.card}>
          <div>
            <img src={require('../../assets/articleManagement.png')}></img>
          </div>
          
          <div className={styles.text}>
            <h2>Article Management</h2>
            <p className={styles.intro}>Article management system, It has user sign-up, log-in and article management function.</p>
            <p className={styles.skill}>NodeJS, Express, ejs, MongoDB</p>
          </div>
        </div>





      </div>

      
      
      

     

      


    </div>

  )
    
}