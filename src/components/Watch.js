import axios from "axios";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import API_KEY from "../constants/youtube";
import Avatar from "react-avatar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { RiShareForwardLine } from "react-icons/ri";
import { MdFileDownload } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import Livechat from "./Livechat";
const Watch = () => {
  const [singleVideo, setSingleVideo] = useState(null);
  const [searchParam] = useSearchParams();
  const videoId = searchParam.get("v");

  const getSingleVideo = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
      );
      console.log(res);
      setSingleVideo(res?.data?.items[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleVideo();
  }, []);
  console.log("hi");
console.log(singleVideo);
  return (
    <div className="ml-64 flex ">
      {singleVideo && (
        <div>
          <iframe
            width="850"
            height="500"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
          <h1 className="py-1 font-bold text-lg">
            {singleVideo?.snippet?.title}
          </h1>
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-between w-[35%]">
              <div className="flex items-center">
                <Avatar
                  className="rounded-full"
                  src={singleVideo?.snippet?.thumbnails?.high?.url}
                  size={30}
                  round={true}
                />
                <h1 className="px-3 text-base font-serif">{singleVideo?.snippet?.channelTitle}</h1>
            
              </div>
              <button className="bg-black text-white py-1 px-4 cursor-pointer rounded-3xl font-semibold">
                Subscribe
              </button>
            </div>
            <div className="flex gap-5 items-center ">
              <div className="bg-gray-200 py-2 flex px-2 w-20 cursor-pointer  items-center gap-5 rounded-2xl">
                <AiOutlineLike size="20px" />
                {/* <h2 className="text-xs">{singleVideo?.statistics?.likeCount}</h2> */}
                <AiOutlineDislike size="20px" />
              </div>
              <div className="bg-gray-200 py-2 cursor-pointer px-2 flex items-center gap-1 rounded-2xl ">
                <RiShareForwardLine size="20px" />
                <h1>Share</h1>
              </div>
              <div className="bg-gray-200 py-2 cursor-pointer px-2 font-semibold  flex items-center gap-1 rounded-2xl">
                <MdFileDownload size="18px" />
                <h1>Download</h1>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="border-t-gray-300">
        <div className="p-3 ml-9 rounded-xl h-[500px] border-lime-200 w-80 bg-gray-200">
        <div className="flex justify-between">
         <h1 className="font-semibold"> Top Chat</h1>
          < BsThreeDotsVertical />
        </div>
        <div className="overflow-y-auto h-[24rem] mt-4">
          <Livechat/>
        </div>
        <div className="mt-2 border border-t-2">
          <hr></hr>
          <div className="flex items-center justify-around mt-2">
          <Avatar
            className="rounded-[50%]"
            src="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg"
            size={28}
            round="true"
          />
          <input className="outline-none border-b-gray-200 w-52 py-1 rounded-lg" type="text" placeholder="Send message"></input>
          <IoMdSend size={28}/>
            </div>
          </div>
        </div>
        </div> 
    </div>
  
  );
};

export default Watch;
