import axios from "axios";
import Avatar from "react-avatar";
import { API_KEY } from "../projectData/api";
import { useState,useEffect } from "react";


const ResultVideoCards = ({ item }) => {
  const [channelicon, setChannelIcon] = useState("");
  let [viewscount, setViewscount] = useState(null)

  function getviews() {
    if (viewscount > 0 && viewscount <= 999) {
      return <>{viewscount}</>;
    }
     else if (viewscount > 999 && viewscount <= 999999) {
      viewscount = (viewscount - (viewscount % 1000)) / 1000
    //   console.log(`${viewscount}k`);
      return<>{viewscount}k</>
    } 
    else if (viewscount > 999999 && viewscount <= 999999999) {
      viewscount = (viewscount - (viewscount % 100000)) / 1000000;
    //   console.log(`${viewscount}M`);
      return<>{viewscount}M</>
    }
  }

  useEffect(() => {
    (async () => {
      const res = await axios.get( `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`) 
    //    console.log(res.data)
         setChannelIcon(res.data.items[0].snippet.thumbnails.medium.url)
         setViewscount(Number(res.data.items[0].statistics.viewCount));
    })();

  }, []);
  return (
    <div className="flex p-1 h-70 cursor-pointer">
      <img
        className="rounded-2xl p-1 w-120 h-65"
        src={item.snippet.thumbnails.medium.url}
      />
      <div>
        <div className="  w-200 h-auto overflow-y-hidden p-1 ml-1">
          <p className="text-2xl font-semibold font-sans">
            {item.snippet.title}
          </p>
        </div>

        <div className=" text-gray-600 ml-2 text-sm">
          <span>{getviews()} views</span>
          {/* <span>time passed</span> */}
        </div>

        <div className="flex items-center ml-2 my-2 text-gray-600 font-sans text-base ">
          <Avatar src={channelicon} size="30" round={true} />
          <p className="ml-3">{item.snippet.channelTitle}</p>
        </div>

        <p className="ml-2.5 w-190 h-12 overflow-y-hidden text-sm text-gray-500 font-light">
          {item.snippet.description}
        </p>
      </div>
    </div>
  );
};

export default ResultVideoCards;
