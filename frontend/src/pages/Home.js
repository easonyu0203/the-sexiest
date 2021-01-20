import React, { useState } from "react";
// import "../App.css";
// import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <section id="home" className={`showcase ` + (openMenu ? "active" : "")}>
        <header>
          <h2 className="logo">Sexiest</h2>
          <div
            onClick={() => {
              setOpenMenu((pre) => !pre);
            }}
            className={`toggle ` + (openMenu ? "active" : "")}
          ></div>
        </header>
        <video
          src={process.env.PUBLIC_URL + "home.mp4"}
          muted
          loop
          autoPlay
        ></video>
        <div className="overlay"></div>
        <div className="text">
          <h2>Find your</h2>
          <h3>celebrity crush</h3>
          <p>A mini game for you to find your type </p>
          <Link to="/play">
            <div className="home-start-btn">start</div>
          </Link>
          <Link to="/about">
            <div className="home-guide-btn">guide</div>
          </Link>
        </div>
        <ul className="social">
          <li>
            <a href="">
              <img src="https://i.ibb.co/x7P24fL/facebook.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/Wnxq2Nq/twitter.png" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="https://i.ibb.co/ySwtH4B/instagram.png" />
            </a>
          </li>
        </ul>
      </section>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">
              <div>Home</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>News</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>Destination</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>Blog</div>
            </Link>
          </li>
          <li>
            <Link to="/">
              <div>Contact</div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
