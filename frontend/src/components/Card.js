import React from "react";
import "./Card.css";

export default function Card(props) {
  const {
    name,
    title,
    intro,
    ig_link,
    ig_followers,
    picture,
    onClick,
    onIn,
    onOut,
  } = props;
  return (
    <>
      <div className="card">
        <div
          onClick={() => (onClick ? onClick(name) : "")}
          onMouseOver={onIn}
          onMouseOut={onOut}
          className="card-image"
        >
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
              <i className="fab fa-instagram fa-3x"></i>
              <div className="no-account-text">no official account</div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
