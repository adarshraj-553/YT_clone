import Feed from "./components/feed/Feed";
import Recommended from "./components/feed/Recommended";
import VideoContainer from "./components/feed/VideoContainer";
import Navbar from "./components/Navbar";
import Result from "./components/Result.jsx";
import Sidebar from "./components/Sidebar/Sidebar";
import Watch from "./components/Watch.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: 
        <div className="flex fixed ">
           <Navbar />
          <Sidebar />
          <Feed />
        </div>,
      children: [
        {
          path: "/",
          element: <div>
            <Recommended />
            <VideoContainer/>
          </div>
        },
        {
          path: "watch",
          element: <Watch />,
        },
        {
          path: "results",
          element: <Result/>,
        },
      ],
      
    },
  ]);

  return (
    <>
      
      <RouterProvider router={router} />
    </>
  );
}

export default App;
