import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, Video_url } from "../../projectData/api.jsx";
import VideoCard from "./VideoCard.jsx";

export const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Video_url}`);
        console.log(res);
        setVideos(res?.data?.items);
        console.log(res?.data?.items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="ml-5 mt-2 grid grid-cols-3 gap-1 overflow-scroll h-[calc(100vh-15vh)] ">
      {videos.map((item) => (
        <VideoCard key={item.id} item={item} />
      ))}
    </div>
  );
};
