import React, { useState } from "react";
import UseEffectFetchPopularData from "./popular";
import { Link } from "react-router-dom";

const Main = () => {
  const [descriptionDisplay, setDescriptionDisplay] = useState(true);

  const Boards_data = [
    {
      topic: "Japanese Culture",
      items: [
        { subtopic: "Anime & Manga", to: "/" },
        { subtopic: "Anime/Cute", to: "/" },
        { subtopic: "Anime/Wallpaper", to: "/" },
        { subtopic: "Mecha", to: "/" },
        { subtopic: "Cosplay & ELG", to: "/" },
        { subtopic: "Cute/Male", to: "/" },
        { subtopic: "Flash", to: "/" },
        { subtopic: "Transportation", to: "/" },
        { subtopic: "Otaku Culture", to: "/" },
        { subtopic: "Virtual Youtubers", to: "/" },
      ],
    },
    {
      topic: "Video Games",
      items: [
        { subtopic: "Video Games", to: "/" },
        { subtopic: "Video Games General", to: "/" },
        { subtopic: "Video Games/ Multiplayer", to: "/" },
        { subtopic: "Video Games/ Mobile", to: "/" },
        { subtopic: "Naruto", to: "/" },
        { subtopic: "Retro Games", to: "/" },
        { subtopic: "Video Games/RPG", to: "/" },
        { subtopic: "Video Games/Strategy", to: "/" },
      ],
    },
    {
      topic: "Interest",
      items: [
        { subtopic: "Comics & Cartoons", to: "/" },
        { subtopic: "Technology", to: "/" },
        { subtopic: "Television & Film", to: "/" },
        { subtopic: "Weapons", to: "/" },
        { subtopic: "Auto", to: "/" },
        { subtopic: "Animals & Nature", to: "/" },
        { subtopic: "Traditional Games", to: "/" },
        { subtopic: "Sports", to: "/" },
        { subtopic: "Extreme Sports", to: "/" },
        { subtopic: "Professional Wrestling", to: "/" },
        { subtopic: "Science & Math", to: "/" },
        { subtopic: "History & Humanities", to: "/" },
        { subtopic: "International", to: "/" },
        { subtopic: "Outdoors", to: "/" },
        { subtopic: "Toys", to: "/" },
      ],
    },
    {
      topic: "Creative",
      items: [
        { subtopic: "Oekaki", to: "/" },
        { subtopic: "Papercraft & Origami", to: "/" },
        { subtopic: "Photography", to: "/" },
        { subtopic: "Food & Cooking", to: "/" },
        { subtopic: "Artwork/Critique", to: "/" },
        { subtopic: "Wallpapers/General", to: "/" },
        { subtopic: "Literature", to: "/" },
        { subtopic: "Music", to: "/" },
        { subtopic: "Fashion", to: "/" },
        { subtopic: "3DCG", to: "/" },
        { subtopic: "Graphic Design", to: "/" },
        { subtopic: "Do-It-Yourself", to: "/" },
        { subtopic: "Worksafe GIF", to: "/" },
        { subtopic: "Quests", to: "/" },
      ],
    },
    {
      topic: "Other",
      items: [
        { subtopic: "Business & Finance", to: "/" },
        { subtopic: "Travel", to: "/" },
        { subtopic: "Fitness", to: "/" },
        { subtopic: "Paranormal", to: "/" },
        { subtopic: "Advice", to: "/" },
        { subtopic: "LGBT", to: "/" },
        { subtopic: "Pony", to: "/" },
        { subtopic: "Current News", to: "/" },
        { subtopic: "Worksafe Requests", to: "/" },
        { subtopic: "Very Important Posts", to: "/" },
      ],
    },
    {
      topic: "Misc.",
      items: [
        { subtopic: "Random", to: "/" },
        { subtopic: "ROBOT9001", to: "/" },
        { subtopic: "Politically Incorrect", to: "/" },
        { subtopic: "International/Random", to: "/" },
        { subtopic: "Cams & Meetups", to: "/" },
        { subtopic: "Shit 4chan Says", to: "/" },
      ],
    },
    {
      topic: "Adults",
      items: [
        { subtopic: "Sexy Beautiful Women", to: "/" },
        { subtopic: "Hardcore", to: "/" },
        { subtopic: "Handsome Men", to: "/" },
        { subtopic: "Hentai", to: "/" },
        { subtopic: "Ecchi", to: "/" },
        { subtopic: "Yuri", to: "/" },
        { subtopic: "Hentai/Alternative", to: "/" },
        { subtopic: "Yaoi", to: "/" },
        { subtopic: "Torrents", to: "/" },
        { subtopic: "High Resolution", to: "/" },
        { subtopic: "Adult GIF", to: "/" },
        { subtopic: "Adult Cartoons", to: "/" },
        { subtopic: "Adult Requests", to: "/" },
      ],
    },
  ];

  return (
    <div className="general">
      <div className="main">
        <Link to={"/"}>
          <img
            alt="logo"
            src={require("../media/logo-transparent.png")}
            className="logo"
          />
        </Link>

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
                  src={require("../media/icon-close-red.png")}
                  alt="close-button"
                />
              </button>
            </div>

            <div className="logo-content">
              4chan is a simple image - based bulletin board where anyone can
              post comments and share images.There are boards dedicated to a
              variety of topics, from Japanese animation and culture to
              videogames, music, and photography.Users do not need to register
              an account before participating in the community.Feel free to
              click on a board below that interests you and jump right in!
              <br></br>
              <br></br>
              Be sure to familiarize yourself with the{" "}
              <Link to="/rules">Rules</Link> before posting, and read the{" "}
              <a href="/">FAQ</a> if you wish to learn more about how to use the
              site.
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
                <div>
                  <a href="/">Show All Boards</a>
                </div>
                <div>
                  <a href="/">Show NSFW Boards only</a>
                </div>
                <div>
                  <a href="/">Show Worksafe Boards Only</a>
                </div>
                <div>
                  <a href="/">Show All Boards (Classic)</a>
                </div>
                <hr></hr>
                <div>
                  <a href="/">Use Frames</a>
                </div>
                <div>
                  <a href="/">Use Catalog</a>
                </div>
              </div>
            </div>
          </div>
          <div className="Boards-content">
            {Boards_data.map((each) => {
              const { topic, items } = each;
              return (
                <div>
                  <h6>{topic}</h6>
                  {items.map((each_link) => {
                    const { subtopic, to } = each_link;
                    return (
                      <div>
                        <a href={to}>{subtopic}</a>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
        <br></br>
        <div className="menus">
          <div className="menu_bar">
            <h4>Popular Threads</h4>

            <div className="dropdown">
              <div className="dopdown-button">options ▼</div>
              <div className="dropdown-content">
                <div>
                  <a href="/">Show Worksafe Content Only</a>
                </div>
                <div>
                  <a href="/">Show NSFW Content only</a>
                </div>
                <div>
                  <a href="/">Show All Content</a>
                </div>
              </div>
            </div>
          </div>
          <div className="Popular_Threads_content">
            <UseEffectFetchPopularData />
          </div>
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
          Copyright © 2003-2022 4chan community support LLC. All rights
          reserved.
        </div>
        <br></br>
      </div>
    </div>
  );
};

export default Main;
