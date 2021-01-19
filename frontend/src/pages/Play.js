import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

import "./Play.css";

import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";

export default function Play() {
  const profiles = useRef([]);
  const [displayed_profiles, setDisplayed_profiles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/profile/random/11").then((res) => {
      profiles.current = res.data;
      const _displayed_profiles = [];
      _displayed_profiles.push(profiles.current.pop());
      _displayed_profiles.push(profiles.current.pop());
      setDisplayed_profiles(_displayed_profiles);
    });
  }, []);

  const nextRound = (name) => {
    const _displayed_profiles = [];
    let index = 0;
    if (displayed_profiles[1]["name"] === name) {
      index = 1;
    }
    if (profiles.current.length > 0) {
      if (index === 1) {
        _displayed_profiles.push(profiles.current.pop());
        _displayed_profiles.push(displayed_profiles[index]);
      } else {
        _displayed_profiles.push(displayed_profiles[index]);
        _displayed_profiles.push(profiles.current.pop());
      }
      setDisplayed_profiles(_displayed_profiles);
    } else {
    }
  };

  return (
    <>
      <div className="container">
        <div className="game-title">Who is Sexier</div>
        <div className="card-container">
          {displayed_profiles.map((p, index) => (
            <Card
              key={index}
              name={p.name}
              title={p.title}
              intro={p.intro}
              picture={p.pictures[0]}
              ig_followers={p.ig_followers}
              ig_link={p.ig_link}
              onClick={nextRound}
            />
          ))}
        </div>
        <ProgressBar />
      </div>
    </>
  );
}
