import React, { Component } from 'react';
import styles from './App.module.scss';
import './app.css';
import Intro from './pages/intro';
import Works from './pages/works';
import Contact from './pages/contact';
import {Link, Route, NavLink} from 'react-router-dom';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded.js';

export default function App(){
  
  return (
    <div>
      <header>
        <img src={require('./assets/logo.png')}></img>
        
        <div>
          <MenuRoundedIcon className={styles.menu} style={{fill: "white", fontSize: 40}} />

          <NavLink to="/home" className={styles.navlink} activeStyle={{color:'white'}}>About</NavLink>  
          <NavLink to="/works" className={styles.navlink} activeStyle={{color:'white'}}>Works</NavLink>
          <NavLink to="/contact" className={styles.navlink} activeStyle={{color:'white'}}>Contact</NavLink> 
        </div>
      </header>

      <main>
        <Route path="/home" exact component={Intro}></Route>
        <Route path="/works" exact component={Works}></Route>
        <Route path="/contact" exact component={Contact}></Route>
      </main>

      
      
      <footer>
        Tianwei Wang © 2020
      </footer>

    </div>

  )
    
}