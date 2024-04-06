import React, { useState, useEffect } from "react";
import axios from "axios";
import { YOUTUBE_VIDEO_API } from "../constants/youtube";
import VideoCart from "./VideoCart";
import {Link} from "react-router-dom";

const VideoContainer = () => {
  const [video, setvideo] = useState([]);
  const fetchVideo = async () => {
    try {
      const response = await axios.get(`${YOUTUBE_VIDEO_API}`);
      // console.log(response.data);
      setvideo(response.data.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchVideo();
  }, []);

  return (
    <div className="flex ml-28  items-center justify-center flex-wrap ">
      {video.map((item) => {
        return (
          <Link  to={`/watch?v=${item.id}`}  key={item.id} >
            <VideoCart item={item} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
