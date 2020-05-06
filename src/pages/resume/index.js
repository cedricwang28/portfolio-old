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

      <h2>PROJECT EXPERIENCE</h2>
      <div className={styles.content}>
        <h3>Lakeview Park web app <span>&#40;Oshawa,Canada&#41;</span></h3>
        <time>March 2020 - May 2020</time>
        <ul>
          <li>a navigation and interactive Web app made for Lakeview Park tourists, the park map in this app
is coded based on Google Map, and with the use of HTML5 geolocation feature, users can see their
real-time geolocation in the app and use it to navigate.</li>
        </ul>

        <h3>ORSIE Backend Management System <span>&#40;Oshawa,Canada&#41;</span></h3>
        <time>April 2020 - May 2020</time>
        <ul>
          <li>ORSIE is a meeting that Durham College hosts every year, I made a backend management system
for school administrator to do CRUD operations of user and event data,
and it allows to download pdf report. It is built with React Hook, Node.js, Express and Mongodb.</li>
        </ul>
      </div>


      <h2>WORK EXPERIENCE</h2>
      <div className={styles.content}>
        <h3>China Continental Insurance Company <span>&#40;Shanghai,China&#41;</span></h3>
        <time>Dec. 2016 - June 2018</time>
        <ul>
          <li>Checking the eligibility of insurance applicants to decide if they meet the condition and requirement
of being insured</li>
          <li>Collecting and analyzing data of insurance clients</li>
          <li>Making daily, weekly and monthly report of the company including revenue, persistency ratio, risk
probability, profit margin, etc.</li>
        </ul>

        <h3>Haitong Securities <span>&#40;Shanghai,China&#41;</span></h3>
        <time>Sept. 2016 - Dec. 2016</time>
        <ul>
          <li>Keeping record of daily corporate actions of CSI300/A50 companies in an excel sheet, then sent out
the English and Chinese version to customers.</li>
          <li>Sorting and uploading reports from analysts, providing support to the maintenance of company website
from the backstage</li>
          <li>Writing the English Version of QFII/QDII/RQFII/RQDII monthly report</li>
        </ul>
      </div>

      <h2>SKILL</h2>
      <div className={styles.content+" "+styles.skill}>
        <ul>
            <li>HTML5 and CSS3</li>
            <li>JavaScript with ES6+</li>
            <li>Jquery, Bootstrap</li>
            <li>SVG and Canvas</li>
            <li>React/React Hook and Redux</li>
            <li>Sass, Webpack</li>
            <li>Dart and Flutter</li>
            <li>Node.js, Express and KOA</li>
            <li>Socket.io</li>
            <li>Mongodb and Mysql</li>
            <li>Git and Github</li>
          </ul>
      </div>
    </div>
  )
    
}