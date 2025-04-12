import React from 'react';
import '../allcss/home.css';

import { Link } from 'react-router-dom';

import foot from "C:/Users/acer/Desktop/geointeledashboard/footer.jpg";
import crew from "C:/Users/acer/Desktop/geointeledashboard/crew.jpg";
function Home() {
  return (
    <>
    <div>
      <header className="header">
        <nav>
          <ul className="nav-items">
            <div className="main-header">
              <li>
                <a id="item-1" href="">
                 CODEX-CREW
                </a>

              </li>
            </div>
            <div className="second-header">
              <li id="item-3">
             </li>
             
            </div>
          </ul>
        </nav>
      </header>
      <br />
      <br />
      <main>
        <div className="logo">
        <img id="icon" src={crew}alt="Codex" />  <br />
   
           
        
          
        </div>    
           <h1 className='cdx'>  Codex Geo- Intelligent Health Insights</h1>
        </main>
        <br />
        <br />
        <div className="navbar">
          <ul id="flex-navbar">
        </ul>
           <Link className='link' to="/application">APPLICATION </Link><br />
   <Link className="link" to="/alert">  LATEST UPDATES  </Link> <br />
         
           <Link  className='link' to="/heatmap" >REGIONAL HEALTH INSIGHTS DASHBOARD  </Link>
      
        </div>
      
        </div>
        <div className="thumb">
          <h3 className="h3-color"></h3>
          <br />
          <figure>
            <img src="/" alt="" />
       
             

              <a className='news' href='https://news.yahoo.com/?fr=sycsrp_catchall'> THE NEWEST NEWS  </a> 
      
          </figure>
        </div>
  
      <footer>
        <div className="footer1">
          <div className="footerSections">
            <h3>Regions</h3>
            <ul style={{ listStyleType: 'none' }}>
              <li>Asia</li>
            </ul>
          </div>
          <div className="footerSections">
            <h3>About Us</h3>
            <ul style={{ listStyleType: 'none' }}>
              <li>Careers</li>
              <li>Frequently asked questions</li>
              <li>Library</li>
              <li>Newsletters</li>
              <li>Procurement</li>
              <li>Publications</li>
            </ul>
          </div>
          <div className="footerSections">
            <h3>Contact Us</h3>
            <a href=""></a>
            <button>Report Misconduct</button>
          </div>
          <div className="footerSection1-2">
            <img
              style={{ height: '300px', width: '400px' }}
              id="who-logo"
              src={foot}
            />
          </div>
        </div>
        <div className="footer2">
          <h3>Privacy Policy</h3>
      
          <h3>&copy;</h3>
        </div>
      </footer>
   
    </>
  );
}

export default Home;