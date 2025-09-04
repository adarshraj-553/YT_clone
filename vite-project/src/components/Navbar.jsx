import { CiMenuBurger } from "react-icons/ci";
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineMic } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";

import yticon from "../../public/yTicon.png";
import { useDispatch } from "react-redux";
import { toggle } from "../features/navFeatures/burger.jsx"; // toggle action from BurgerSlice
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [searchInput, setSearchInput] = useState("");

  const burgertoggler = useDispatch();

  function handleBurger() {
    burgertoggler(toggle());
  }

  return (
    <nav className=" flex justify-between fixed top-0 w-[100%] bg-white z-50 border shadow-lg">
      <div className="flex items-center space-x-4  w-40 cursor-pointer  py-2 ">
        <CiMenuBurger className="ml-6 cursor-pointer" onClick={handleBurger} />
        <Link to={"/"}>
          <img src={yticon} className="w-24  cursor-pointer " />
        </Link>
      </div>

      <div className=" w-[38%] flex items-center  px-2">
        <div className=" flex items-center w-[100%] rounded-l-full px-4 py-2 border border-gray-200">
          <input
            type="text"
            placeholder="Search"
            className="  w-[100%] outline-none "
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <Link to={`/results?q=${searchInput}`}>
          <BiSearchAlt
            size={"26px"}
            className="bg-gray-200 rounded-r-full p-2 w-12 h-11 cursor-pointer"
          />
        </Link>

        <MdOutlineMic
          size={"38px"}
          className="bg-gray-200 rounded-full ml-4 py-2 cursor-pointer hover:bg-gray-300 duration-300"
        />
      </div>

      <div className=" flex items-center w-45 ">
        <BsThreeDotsVertical size={"20px"} className="ml-4 cursor-pointer" />
        <button className="bg-sky-200 flex items-center px-2 py-1 rounded-full ml-6 cursor-pointer hover:bg-gray-300 duration-300 mr-3 focus:bg-sky-300">
          <FaRegUserCircle size={"20px"} className="mr-2 " /> sign up
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
