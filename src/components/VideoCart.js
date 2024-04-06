import axios from "axios";
import React,{useEffect, useState

} from "react";
import Avatar from "react-avatar";
import API_KEY from "../constants/youtube";
const VideoCart = ({item}) => {
    const [ytIcon, setytIcon] = useState("");
    const  getchannelname = async()=>{
        try {
            const res=await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
       console.log(res);
       setytIcon(res.data.items[0].snippet.thumbnails.high.url)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
    getchannelname();
    }, [])
    
  return (
    <div className="ml-5 my-1 w-96 cursor-pointer">
      <img
        className="w-full cursor-pointer rounded-lg"
        src={item.snippet.thumbnails.high.url}
      />
      <div>
        <div className="w-92 h-20 py-2 flex mt-2">
          <Avatar
            className="rounded-[50%]"
            src={ytIcon}
            size={30}
            round="true"
          />
          <div className="px-3">
              <h1 className="font-bold text-sm">{item.snippet.title}</h1>
               <p className="opacity-90">{item.snippet.channelTitle }</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCart;
