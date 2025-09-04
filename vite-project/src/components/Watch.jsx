import Avatar from "react-avatar";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { LiaDownloadSolid } from "react-icons/lia";
import { API_KEY } from "../projectData/api";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");
  const [watchVideo, setWatchVideo] = useState(null);
  const [channelIcon, setChannelIcon] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`
        );
        setWatchVideo(res?.data?.items[0]);
        // console.log(res.data.items[0])
      
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  
 
  // this useEffect is for avatar icon fetching
   useEffect(() => {
     if (!watchVideo || !watchVideo.snippet) return;
    (async () => {
      try {
        const res2 = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${watchVideo.snippet.channelId}&key=${API_KEY}`
        );
         setChannelIcon(res2?.data?.items[0]?.snippet?.thumbnails?.high?.url);
        // console.log(res2?.data)

      } catch (error) {
        console.log(error);
      }
    })();
  }, [watchVideo]);
    

  return (
    <div className="mt-16">
      <section>
        <iframe
          width="880"
          height="520"
          src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write;  gyroscope; picture-in-picture; web-share"
        ></iframe>

        {!watchVideo ? (
          <div>Loading...</div>
        ) : (
          <>
           <div className="w-220 h-auto overflow-y-hidden ">
             <h1 className="font-bold my-3 text-xl">
              {watchVideo.snippet.title}
            </h1>
           </div>

            <div className="flex justify-between">
              <div className="flex mt-1 w-[44%] ">
                <Avatar  src={channelIcon} round={true} size="50" />
                <div className="mx-4 ">
                  <h2 className="font-semibold text-lg">
                    {watchVideo.snippet.channelTitle}
                  </h2>
                  <p className="text-gray-600">subscriber</p>
                </div>

                <button className="bg-gray-900 rounded-full text-gray-100 font-medium px-5 cursor-pointer">
                  Subscribe
                </button>
              </div>

              <div className="flex w-[37%] justify-between items-center">
                <div className="flex bg-gray-200 rounded-full px-4 py-2">
                  <BiLike className="text-2xl mr-4" />
                  <BiDislike className="text-2xl  " />
                </div>
                <div className="flex items-center bg-gray-200 rounded-full px-3 py-2 font-medium ">
                  <PiShareFatLight />
                  <p className="ml-2">Share</p>
                </div>
                <div className="flex items-center bg-gray-200 rounded-full px-3 py-2 font-medium ">
                  <LiaDownloadSolid />
                  <p className="ml-2">Download</p>
                </div>
              </div>
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default Watch;
