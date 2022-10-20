import React from "react";
import {
  ArrowRight,
  ArrowLeft,
  BreadCrum,
  ChartCard,
  TopPlay,
  ListenHistoryCard,
} from "../components";
import PlayBackArrow from "../components/icons/PlayBackArrow";
import PlayButton from "../components/icons/PlayButton";
import PlayerFastForwrd from "../components/icons/PlayerFastForwrd";
import PlayerLength from "../components/icons/PlayerLength";
import PlayerNextBtn from "../components/icons/PlayerNextBtn";
import PlayerPlayButton from "../components/icons/PlayerPlayButton";
import PlayPreviousArrow from "../components/icons/PlayPreviousArrow";

const Discover = () => {
  return (
    <div className="flex flex-col justify-between gap-5 mb-20">
      <BreadCrum />
      <div className="flex flex-col topchart-card shadow-2xl">
        <div className="flex">
          <div className="w-3/4 text-xl font-bold ml-8 mt-2 mb-4 md:ml-8 md:mt-2 text-[#2E3271]">
            Charts: Top 50
          </div>
          <div className="w-1/4 flex space-x-8 justify-center items-center my-[18px] mx-[25px]">
            <ArrowLeft className="flex" />
            <ArrowRight className="flex" />
          </div>
        </div>
        <div className="topchartcards">
          <div class="cards-wrapper">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((top50) => (
              <ChartCard />
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col historyplayer-card mt-8 lg:flex-row gap-8">
        <div className="history-card w-full lg:w-2/3 shadow-2xl relative">
          <div className="flex">
            <div className="w-3/4 text-xl font-bold ml-8 mt-2 mb-4 md:ml-8 md:mt-2 text-[#2E3271]">
              Listening History
            </div>
            <div className="w-1/4 flex space-x-8 justify-center items-center my-[18px] mx-[25px]">
              <a href="#" className="opacity-50">
                See All
              </a>
            </div>
          </div>

          <div className="scrolling-area">
            <div class="scrolling-element-inside">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((top50) => (
                <ListenHistoryCard />
              ))}
            </div>
          </div>
        </div>
        <div className="player-card w-full lg:w-1/3 shadow-2xl">
          <div className="flex flex-col items-center gap-8 justify-between">
            <div className="relative flex justify-center items-center ">
              <img
                className=""
                src="./src/assets/images/album-cover-6.png"
                alt="Album Cover"
              />
            </div>
            <span className="playercardtitle">Living My Best Life</span>
            <span className="playercardsubtitle">Ben Hector</span>
            <div className="flex flex-col justify-between">
              <PlayerLength/>
              <div className="flex justify-between playertimer">
                <span>1:21</span>
                <span>3:26</span>
              </div>
              <div className="flex justify-between items-center">
                <PlayBackArrow/>
                <PlayPreviousArrow/>
                <PlayerPlayButton/>
                <PlayerNextBtn/>
                <PlayerFastForwrd/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
