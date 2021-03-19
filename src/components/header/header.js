import React, { Component } from 'react';
//import './header.css';

const Header = () => {
    return <header className="shadow">
                <div className="container">
                <a href="#" className="logo">
                    ReactApp
                </a>
              <nav id="main-menu">
                  <ul>
                      <li>
                          <a href="#">Home</a>
                      </li>
                      <li>
                          <a href="#">About</a>
                      </li>
                      <li>
                          <a href="#">Contact</a>
                      </li>
                  </ul>
              </nav>
                </div>
           </header>
    }
  
export default Header;
