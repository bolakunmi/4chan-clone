import React from "react";
import "./App.css";

function App() {
  return (
    <div className="general">
      <img alt="logo" src={require('./media/logo-transparent.png')} className='logo' />
      <div className="description">
        <div className="menu_bar">
          <div>what is 4chan?</div>
        </div>
        <div>
          4 chan is a simple image - based bulletin board where anyone can post
        comments and share images.There are boards dedicated to a variety of
        topics, from Japanese animation and culture to videogames, music, and
        photography.Users do not need to register an account before
        participating in the community.Feel free to click on a board below that
        interests you and jump right in !
        </div>
        
      </div>
      <br></br>

      <div className="menus">
        <div className="menu_bar">
          <div>Boards</div>
          <div>filter ▼</div>
        </div>
        <div>post pictures and links</div>
      </div>
      <br></br>
      <div className="menus">
        <div className="menu_bar">
          <div>Popular Threads</div>
          <div>options</div>
        </div>
        <div>post pictures and links</div>
      </div>

<br></br>
      <div className="menus">
        <div className="menu_bar">
          <div>Stats</div>
        </div>
        <div>
          <span>Total Posts: 4,292,172,453</span>
          <span>Current Users: 233,427</span>
          <span>Active Content: 1217 GB</span>
        </div>
      </div>

      <div>
        Copyright © 2003-2022 4chan community support LLC. All rights reserved.
      </div>
    </div>
  );
}

export default App;
