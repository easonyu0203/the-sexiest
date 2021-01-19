import React from "react";
import "./Card.css";

export default function Card(props) {
  const { name, title, intro, ig_link, ig_followers, picture } = props;
  return (
    <>
      <div className="card">
        <div className="card-image">
          <img src={picture} alt=""></img>
        </div>
        <div className="card-text">
          <div className="name">{name}</div>
          <div className="title">{title}</div>
          <p className="intro">"{intro}"</p>
        </div>
        <div className="card-stats">
          {ig_followers ? (
            <>
              <a href={ig_link} target="_blank" rel="noreferrer">
                <i className="fab fa-instagram fa-3x"></i>
              </a>
              <div>
                <b>{ig_followers}</b>
                <br />
                Followers
              </div>
            </>
          ) : (
            <>
              <i class="fab fa-instagram fa-3x"></i>
              <div>no official account</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
