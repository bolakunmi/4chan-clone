import React, { useState } from "react";
import "./App.css";

function App() {
  const [descriptionDisplay, setDescriptionDisplay] = useState(true);

  return (
    <div className="general">
      <img
        alt="logo"
        src={require("./media/logo-transparent.png")}
        className="logo"
        href="/"
      />

      {descriptionDisplay && (
        <div className="description">
          <div className="menu_bar">
            <h4>what is 4chan?</h4>
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
          <h4>Boards</h4>
          <div className="dropdown">
            <div className="dopdown-button">filter ▼</div>
            <div className="dropdown-content">
              <div><a href="/">Show All Boards</a></div>
              <div><a href="/">Show NSFW Boards only</a></div>
              <div><a href="/">Show Worksafe Boards Only</a></div>
              <div><a href="/">Show All Boards (Classic)</a></div>
              <hr></hr>
              <div><a href="/">Use Frames</a></div>
              <div><a href="/">Use Catalog</a></div>
            </div>
          </div>
        </div>
        <div className="Boards-content">
          <div>
            <h6>Japanese Culture</h6>
            <div><a href="/">Anime & Manga</a></div>
            <div><a href="/">Anime/Cute</a></div>
            <div><a href="/">Anime/Wallpaper</a>s</div>
            <div><a href="/">Mecha</a></div>
            <div><a href="/">Cosplay & EGL</a></div>
            <div><a href="/">Cute/Male</a></div>
            <div><a href="/">Flas</a>h</div>
            <div><a href="/">Transportation</a></div>
            <div><a href="/">Otaku Culture</a></div>
            <div><a href="/">Virtual YouTubers</a></div>
          </div>

          <div>
            <h6>Video Games</h6>
            <div><a href="/">Video Games</a></div>
            <div><a href="/">Video Games General</a></div>
            <div><a href="/">Video Games/ Multilayer</a></div>
            <div><a href="/">Video Games/ Mobile</a></div>
            <div><a href="/">Naruto</a></div>
            <div><a href="/">Retro Games</a></div>
            <div><a href="/">Video games/RPG</a></div>
            <div><a href="/">Video games/Strategy</a></div>
          </div>

          <div>
            <h6>Interests</h6>
            <div><a href="/">Comics & Cartoons</a></div>
            <div><a href="/">Technology</a></div>
            <div><a href="/">Television & Film</a></div>
            <div><a href="/">Weapons</a></div>
            <div><a href="/">Auto</a></div>
            <div><a href="/">Animals & Nature</a></div>
            <div><a href="/">Traditional Games</a></div>
            <div><a href="/">Sports</a></div>
            <div><a href="/">Extreme Sports</a></div>
            <div><a href="/">Professional Wrestling</a></div>
            <div><a href="/">Science & Math</a></div>
            <div><a href="/">History & Humanities</a></div>
            <div><a href="/">International</a></div>
            <div><a href="/">Outdoors</a></div>
            <div><a href="/">Toys</a></div>
          </div>

          <div>
            <h6>Creative</h6>
            <div><a href="/">Oekaki</a></div>
            <div><a href="/">Papercraft & Origami</a></div>
            <div><a href="/">Photography</a></div>
            <div><a href="/">Food & Cooking</a></div>
            <div><a href="/">Artwork/Critique</a></div>
            <div><a href="/">Wallpapers/General</a></div>
            <div><a href="/">Literature</a></div>
            <div><a href="/">Music</a></div>
            <div><a href="/">Fashion</a></div>
            <div><a href="/">3DCG</a></div>
            <div><a href="/">Graphic Design</a></div>
            <div><a href="/">Do-It-Yourself</a></div>
            <div><a href="/">Worksafe GIF</a></div>
            <div><a href="/">Quests</a></div>
          </div>

          <div>
            <h6>Other</h6>
            <div><a href="/">Business & Finance</a></div>
            <div><a href="/">Travel</a></div>
            <div><a href="/">Fitness</a></div>
            <div><a href="/">Paranormal</a></div>
            <div><a href="/">Advice</a></div>
            <div><a href="/">LGBT</a></div>
            <div><a href="/">Pony</a></div>
            <div><a href="/">Current News</a></div>
            <div><a href="/">Worksafe Requests</a></div>
            <div><a href="/">Very Important Posts</a></div>
          </div>

          <div>
            <h6>Misc.</h6>
            <div><a href="/">Random</a></div>
            <div><a href="/">ROBOT9001</a></div>
            <div><a href="/">Politically Incorrect</a></div>
            <div><a href="/">International/Random</a></div>
            <div><a href="/">Cams & Meetups</a></div>
            <div><a href="/">Shit 4chan Says</a></div>
          </div>

          <div>
            <h6>Adults</h6>
            <div><a href="/">Sexy Beautiful Women</a></div>
            <div><a href="/">Hardcore</a></div>
            <div><a href="/">Handsome Men</a></div>
            <div><a href="/">Hentai</a></div>
            <div><a href="/">Ecchi</a></div>
            <div><a href="/">Yuri</a></div>
            <div><a href="/">Hentai/Alternative</a></div>
            <div><a href="/">Yaoi</a></div>
            <div><a href="/">Torrents</a></div>
            <div><a href="/">High Resolution</a> </div>
            <div><a href="/">Adult GIF</a></div>
            <div><a href="/">Adult Cartoons</a></div>
            <div><a href="/">Adult Requests</a></div>
          </div>
        </div>
      </div>
      <br></br>
      <div className="menus">
        <div className="menu_bar">
          <h4>Popular Threads</h4>

          <div className="dropdown">
            <div className="dopdown-button">options ▼</div>
            <div className="dropdown-content">
              <div>Show Worksafe Content Only</div>
              <div>Show NSFW Content only</div>
              <div>Show All Content</div>
            </div>
          </div>
        </div>
        <div>post pictures and links</div>
      </div>

      <br></br>
      <div className="menus">
        <div className="menu_bar">
          <h4>Stats</h4>
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
            <a href="/">Home</a>
          </span>
          <span>
            <a href="/">News</a>
          </span>
          <span>
            <a href="/">Blog</a>
          </span>
          <span>
            <a href="/">FAQ</a>
          </span>
          <span>
            <a href="/">Rules</a>
          </span>
          <span>
            <a href="/">Support 4chan</a>
          </span>
          <span>
            <a href="/">Advertise</a>
          </span>
          <span>
            <a href="/">Press</a>
          </span>
          <span>
            <a href="/">日本語</a>
          </span>
        </div>
      </div>

      <br></br>
      <div className="menus-more2">
        <span>
          <a href="/">About</a>
        </span>
        <span>•</span>
        <span>
          <a href="/">Feedback</a>
        </span>
        <span>•</span>
        <span>
          <a href="/">Legal</a>
        </span>
        <span>•</span>
        <span>
          <a href="/">Contact</a>
        </span>
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
