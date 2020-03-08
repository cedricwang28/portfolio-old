import React, { Component } from 'react';
import styles from './resume.module.scss';


export default function Resume(){
  
  return (
    <div className={styles.wrapper}>
      <h1>Tianwei Wang</h1>
      <h4>Toronto, Canada</h4>
      <h4>Tel:2899969350</h4>
      <h4>Email:cedricwang28@gmail.com</h4>

      <h2>EDUCATION</h2>
      <div className={styles.content}>
        <h3>Durham College <span>&#40;Oshawa,Canada&#41;</span></h3>
        <time>Sept. 2018 - June 2020</time>
        <p>Diploma of Comtemporary Web Design</p>

        <h3>Shanghai International Study University <span>&#40;Shanghai,China&#41;</span></h3>
        <time>Sept. 2015 - June 2017</time>
        <p>Master Degree of Finance</p>

        <h3>Shandong Jianzhu University <span>&#40;Jinan,China&#41;</span></h3>
        <time>Sept. 2010 - June 2014</time>
        <p>Bachelor Degree of Network Engineering</p>
      </div>

      <h2>EXPERIENCE</h2>
      <div className={styles.content}>
        <h3>Lakeview Park web app <span>&#40;Oshawa,Canada&#41;</span></h3>
        <time>April 2010 - July 2020</time>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <h3>China Continental Insurance Company <span>&#40;Shanghai,China&#41;</span></h3>
        <time>Dec. 2016 - May 2018</time>
        <ul>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>

      <h2>SKILL</h2>
      <div className={styles.content+" "+styles.skill}>
        <ul>
            <li>HTML5 and CSS3</li>
            <li>JavaScript with ES6+</li>
            <li>Jquery, Bootstrap and Socket.io</li>
            <li>SVG and Canvas</li>
            <li>React/React Hook and Redux</li>
            <li>Dart and Flutter</li>
            <li>Node.js, Express and KOA</li>
            <li>Mongodb</li>
          </ul>
      </div>
    </div>
  )
    
}