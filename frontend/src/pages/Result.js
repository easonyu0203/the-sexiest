import React, { useState, useEffect } from "react";
import "./Result.css";
import RankCard from "../components/RankCard";
import Card from "../components/Card";
import axios from "axios";

export default () => {
  const [profiles, setProfiles] = useState([]);
  const [displayed_profile, setDisplayed_profile] = useState({});
  useEffect(async () => {
    const res = await axios.get("http://localhost:5000/api/profile/top/10");
    setProfiles(res.data);
    setDisplayed_profile(res.data[0]);
  }, []);
  return (
    <>
      <div className="result-container">
        <div className="show-profile">
          <h1 className="title-text">ranking Board</h1>
          {displayed_profile.name ? (
            <Card
              name={displayed_profile.name}
              title={displayed_profile.title}
              intro={displayed_profile.intro}
              ig_link={displayed_profile.ig_link}
              ig_follwers={displayed_profile.ig_follwers}
              picture={displayed_profile.pictures[0]}
            />
          ) : (
            <h1>loading...</h1>
          )}
        </div>
        <div className="rank-list">
          {profiles.map((p, i) => (
            <RankCard
              onClick={(i) => {
                setDisplayed_profile(profiles[i]);
              }}
              rank={i + 1}
              rate={p.rate}
              name={p.name}
              title={p.title}
              img_url={p.pictures[0]}
            />
          ))}
        </div>
      </div>
    </>
  );
};
