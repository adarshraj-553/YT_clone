import { Home } from "./components/HomePage/Home";
import Navbar from "./components/navbar";
import { Recommended } from "./components/HomePage/Recommended";
import Sidebar from "./components/Sidebar/Sidebar";



function App() {

  
  return (
    <>
        <Navbar />
        <div className="flex fixed ">
         <Sidebar/> 
         <Home/>
        </div>
        
    </>
  );
}

export default App;