import { Outlet } from "react-router-dom";
// import { Recommended } from "./Recommended";
// import { VideoContainer } from "./VideoContainer";


const Feed = () => {

return(
  <div className="p-1.5 items-center">
    <Outlet/>
  </div>
)
};

export default Feed;

