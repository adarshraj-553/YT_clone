import { Link, useSearchParams } from "react-router-dom";
import ResultVideoCards from "./ResultVideoCards";
import { API_KEY } from "../projectData/api";
import { useEffect, useState } from "react";
import axios from "axios";

const Result = () => {
  const [queryParam] = useSearchParams();
  const query = queryParam.get("q");
  const [videoResults, setVideoResults] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&key=${API_KEY}`
        );
        // console.log(res?.data?.items);
        setVideoResults(res?.data?.items);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [query]);

  return (
    <div className="mt-14 h-[calc(100vh-12vh)] overflow-y-scroll w-320">
      {videoResults.map((item) => (
        <Link to={`/watch?v=${item.id.videoId}`} key={item.id.videoId}>
         <ResultVideoCards item={item}  />
        </Link>
      ))}
    </div>
  );
};

export default Result;
