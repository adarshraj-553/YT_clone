import axios from "axios";
import { useEffect, useState } from "react";
import { API_KEY, Video_url } from "../../projectData/api.jsx";
import VideoCard from "./VideoCard.jsx";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addVideos } from "../../videoSlice";

const VideoContainer = () => {
  const { videos, category } = useSelector((state) => state.video);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        if (category === "All") {
          const res = await axios.get(`${Video_url}`);
          // console.log(res);
          dispatch(addVideos(res?.data?.items));
          console.log(res?.data?.items);
        } else {
          // fetchin videos by category
          const res2 = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&key=${API_KEY}`
          );
          console.log(res2.data.items);
          dispatch(addVideos(res2?.data?.items));
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [category]);

  return (
    <div className="ml-5 mt-1 grid grid-cols-3 overflow-scroll h-[calc(100vh-15vh)] w-320 ">
      {videos.map((item) => (
        <Link to={`/watch?v=${typeof item.id === 'object' ? item.id.videoId : item.id}`} key={typeof item.id === 'object' ? item.id.videoId : item.id}>
          <VideoCard item={item} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
