import { useEffect, useState } from "react";
import Avatar from "react-avatar";
import { API_KEY } from "../../projectData/api";
import axios from "axios";

function VideoCard({ item }) {

  const [channelicon, setChannelicon] = useState(""); // state and useEffect to fetch channel's avatar

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`
        ); 
        setChannelicon(res.data.items[0].snippet.thumbnails.medium.url);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="w-100 mb-3 ">
      <img
        className="rounded-xl w-full h-55 object-cover "
        src={item.snippet.thumbnails.high.url}
        alt="videoimg"
      />

      <div className="flex  p-1 ">
        <div>
          <Avatar
            className="mt-0.5 mx-0.5"
            alt="avatar"
            src={channelicon}
            round={true}
            size="38"
          />
        </div>

        <div className="ml-3 mt-1">
          <p className="font-medium">{item.snippet.title}</p>
          <p className="text-xs text-gray-800">{item.snippet.channelTitle}</p>
          {/* <span className="text-xs">__k views • </span>
          <span className="text-xs">date</span> */}
        </div>
      </div>
    </div>
  );
}

export default VideoCard;
