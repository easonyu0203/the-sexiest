import React from "react";
import "./ProgressBar.css";

export default function ProgressBar() {
  return (
    <>
      <div className="progress-bar-container">
        <div
          className="progress-bar"
          style={{ "--width": 30 }}
          text={"?/10"}
        ></div>
      </div>
    </>
  );
}
