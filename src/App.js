import React, { Component } from 'react';
import styles from './App.module.scss';
import Intro from './pages/intro';
import Works from './pages/works';
import {Link, Route, NavLink} from 'react-router-dom'

export default function App(){
  
  return (
    <div>
      <header>
        <img src={require('./assets/logo.png')}></img>
        <div>
          <NavLink to="/home" className={styles.navlink} activeStyle={{color:'white'}}>Home</NavLink>  
          <NavLink to="/works" className={styles.navlink} activeStyle={{color:'white'}}>Works</NavLink> 
        </div>
      </header>

      <main>
        <Route path="/home" exact component={Intro}></Route>
        <Route path="/works" exact component={Works}></Route>
      </main>
      
      <footer>
        @2020 - Tianwei Wang
      </footer>

    </div>

  )
    
}