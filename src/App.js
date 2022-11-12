import React, { useState } from "react";
import "./App.css";

function App() {
  const [descriptionDisplay, setDescriptionDisplay] = useState(true);
  console.log(descriptionDisplay);
  return (
    <div className="general">
      <img
        alt="logo"
        src={require("./media/logo-transparent.png")}
        className="logo"
      />

      {descriptionDisplay && (
        <div className="description">
          <div className="menu_bar">
            <div>what is 4chan?</div>
            <button
              type="button"
              className="close-button"
              onClick={() => setDescriptionDisplay(!descriptionDisplay)}
            >
              <img
                src={require("./media/icon-close-red.png")}
                alt="close-button"
              />
            </button>
          </div>

          <div>
            4chan is a simple image - based bulletin board where anyone can post
            comments and share images.There are boards dedicated to a variety of
            topics, from Japanese animation and culture to videogames, music,
            and photography.Users do not need to register an account before
            participating in the community.Feel free to click on a board below
            that interests you and jump right in!
            <br></br>
            <br></br>
            Be sure to familiarize yourself with the <a href="/">Rules</a>{" "}
            before posting, and read the <a href="/">FAQ</a> if you wish to
            learn more about how to use the site.
          </div>
        </div>
      )}
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
          <div>options ▼</div>
        </div>
        <div>post pictures and links</div>
      </div>

      <br></br>
      <div className="menus">
        <div className="menu_bar">
          <div>Stats</div>
        </div>
        <div className="stats">
          <span>Total Posts: 4,292,172,453</span>
          <span>Current Users: 233,427</span>
          <span>Active Content: 1217 GB</span>
        </div>
      </div>
      <br></br>

      <div className=" menus-more">
        <div className="more more-options">
          <span>
            <a href="#">Home</a>
          </span>
          <span>
            <a href="#">News</a>
          </span>
          <span>
            <a href="#">Blog</a>
          </span>
          <span>
            <a href="#">FAQ</a>
          </span>
          <span>
            <a href="#">Rules</a>
          </span>
          <span>
            <a href="#">Support 4chan</a>
          </span>
          <span>
            <a href="#">Advertise</a>
          </span>
          <span>
            <a href="#">Press</a>
          </span>
          <span>
            <a href="#">日本語</a>
          </span>
        </div>
      </div>

      <br></br>
      <div className="menus-more2">
        <span><a href="#">About</a></span>
        <span>•</span>
        <span><a href="#">Feedback</a></span>
        <span>•</span>
        <span><a href="#">Legal</a></span>
        <span>•</span>
        <span><a href="#">Contact</a></span>

      </div>
      <br></br>
      <div className="copyright">
        Copyright © 2003-2022 4chan community support LLC. All rights reserved.
      </div>
      <br></br>
    </div>
  );
}

export default App;
