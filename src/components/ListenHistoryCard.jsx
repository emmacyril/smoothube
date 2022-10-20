import React from "react";
import CommentIcon from "./icons/CommentIcon";
import FavoriteIcon from "./icons/FavoriteIcon";
import PlayButton2 from "./icons/PlayButton2";
import PlayCount from "./icons/PlayCount";

const ListenHistoryCard = () => {
  return (
    <a className="card">
      <div className="flex bg-white w-full lg:w-[80%] mt-6 h-12 lg:h-20 m-auto justify-between items-center rounded-[40px] shadow-md">
        <img
          src="./src/assets/images/album-cover-6.png"
          className="h-[42px] w-[42px] lg:h-[84px] lg:w-[84px] rounded-[20px] historycardimg"
        />
        <div className="flex flex-col w-9/12 lg:w-2/4">
          <span className="heading3">She Will Be Loved</span>
          <span className="heading4">Maroon 5</span>
        </div>
        <div className="hidden lg:flex">
          <div className="flex relative">
            <PlayCount />
            <span className="absolute right-0 globtext">120k</span>
          </div>
          <CommentIcon />
          <FavoriteIcon />
        </div>
        <div className="flex lg:hidden relative right-4">
          <PlayButton2/>
        </div>
      </div>
    </a>
  );
};

export default ListenHistoryCard;
