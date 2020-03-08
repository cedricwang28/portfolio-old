import React, { useState } from 'react';
import styles from './App.module.scss';
import Intro from './pages/intro';
import Works from './pages/works';
import Resume from './pages/resume';
import {Route, NavLink, Redirect} from 'react-router-dom';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded.js';
import CloseIcon from '@material-ui/icons/Close.js';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default function App(){

  const [barMenu, setBarMenu] = useState(0);


  
  return (
    <div>
      <header>
        {/* <img src={require('./assets/logo.png')}></img> */}
        <span className={styles.logo}>TIANWEI WANG</span>
        
        <div>
          <MenuRoundedIcon className={styles.menu+' '+(barMenu?styles.openMenu:null)} style={{fill: "white", fontSize: 40}} onClick={()=>{
            
            if(barMenu){
              setBarMenu(barMenu-1);
            }else{
              setBarMenu(barMenu+1);
            }
          
           }} />
          <CloseIcon className={styles.close+' '+(barMenu?styles.showClose:null)} style={{fill: "white", fontSize: 40}} onClick={()=>{
            
            if(barMenu){
              setBarMenu(barMenu-1);
            }else{
              setBarMenu(barMenu+1);
            }
          
           }} />
          
          <ul className={styles.linkUl+' '+(barMenu?null:styles.showSide)}>
            <li><NavLink to="/home" className={styles.navlink} activeClassName={styles.activeLink} onClick={()=>{
            
              if(barMenu){
                setBarMenu(barMenu-1);
              }else{
                setBarMenu(barMenu+1);
              }
            
            }} >About</NavLink></li>
            <li><NavLink to="/works" className={styles.navlink} activeClassName={styles.activeLink} onClick={()=>{
            
              if(barMenu){
                setBarMenu(barMenu-1);
              }else{
                setBarMenu(barMenu+1);
              }
          
           }}>Works</NavLink></li>
            <li><NavLink to="/resume" className={styles.navlink} activeClassName={styles.activeLink} onClick={()=>{
            
              if(barMenu){
                setBarMenu(barMenu-1);
              }else{
                setBarMenu(barMenu+1);
              }
          
           }}>Resume</NavLink> </li>
          </ul>

          
          
          
        </div>
      </header>

      <main>
        <Route path="/home" exact component={Intro}></Route>
        <Route path="/works" exact component={Works}></Route>
        <Route path="/resume" exact component={Resume}></Route>
        <Redirect to="/home"></Redirect>
      </main>

      
      
      <footer>
        <p>
         <a href="https://github.com/cedricwang28"><GitHubIcon className={styles.socialIcon}></GitHubIcon></a> 
          <LinkedInIcon className={styles.socialIcon+' '+styles.linkIn}></LinkedInIcon>
        </p>
        Tianwei Wang © 2020
      </footer>

    </div>

  )
    
}