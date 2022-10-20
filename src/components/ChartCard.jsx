import React from "react";
import PlayButton from "./icons/PlayButton";
import Cover from "../assets/images/album-cover-6.png";

const ChartCard = () => {
  return (
    <a class="card">
    <div className="flex flex-col items-center gap-2 ">
      <div className="relative flex justify-center items-center ">
        <div className="cardimgovalay"></div>
        <img
          className="album-cover"
          src={Cover}
          alt="Album Cover"
        />
        <PlayButton />
      </div>
      <span className="topchart-card-title">Al Music Genre</span>
      <span className="topchart-card-subtitle">Top 50</span>
    </div>
  </a>
  );
};

export default ChartCard;
