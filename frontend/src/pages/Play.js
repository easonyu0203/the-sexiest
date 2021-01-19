import React from "react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";

import "./Play.css";

import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";

export default function Play() {
  const profiles = useRef([]);
  const [displayed_profiles, setDisplayed_profiles] = useState([]);
  const [round, setRound] = useState(1);

  useEffect(() => {
    axios.get("http://localhost:5000/api/profile/random/11").then((res) => {
      for (let i = 0; i < res.data.length; i++) {
        res.data[i]["clickCnt"] = 0;
        res.data[i]["showCnt"] = 0;
      }

      profiles.current = res.data;
      const _displayed_profiles = [];
      _displayed_profiles.push(profiles.current[0]);
      _displayed_profiles.push(profiles.current[1]);
      setDisplayed_profiles(_displayed_profiles);
    });
  }, []);

  const nextRound = (name) => {
    if (round > 10) {
      return;
    }
    const _displayed_profiles = [];
    let index = 0;
    if (displayed_profiles[1]["name"] === name) {
      index = 1;
    }
    displayed_profiles[0]["showCnt"] += 1;
    displayed_profiles[1]["showCnt"] += 1;
    displayed_profiles[index]["clickCnt"] += 1;
    if (round < 10) {
      if (index === 1) {
        _displayed_profiles.push(profiles.current[round + 1]);
        _displayed_profiles.push(displayed_profiles[index]);
      } else {
        _displayed_profiles.push(displayed_profiles[index]);
        _displayed_profiles.push(profiles.current[round + 1]);
      }
      setDisplayed_profiles(_displayed_profiles);
    } else {
      // game over
      const ps = [];
      for (let i = 0; i < profiles.current.length; i++) {
        ps.push(
          axios.patch(
            `http://localhost:5000/api/profile/${profiles.current[i]["name"]}`,
            {
              showCnt: profiles.current[i]["showCnt"],
              clickCnt: profiles.current[i]["clickCnt"],
            }
          )
        );
      }
      Promise.all(ps).then(() => {
        console.log("game over, data have been collect to the server");
      });
      //   laoding to result page animation...
    }
    setRound((pre) => pre + 1);
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
        <ProgressBar round={round - 1} />
      </div>
    </>
  );
}
