import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import "./Play.css";

import Card from "../components/Card";

export default function Play() {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/profile/random/2").then((res) => {
      console.log(res.data);
      setProfiles(res.data);
    });
  }, []);

  return (
    <>
      <div className="container">
        {profiles.map((p, index) => (
          <Card
            key={index}
            name={p.name}
            title={p.title}
            intro={p.intro}
            picture={p.pictures[0]}
            ig_followers={p.ig_followers}
            ig_link={p.ig_link}
          />
        ))}
      </div>
    </>
  );
}
