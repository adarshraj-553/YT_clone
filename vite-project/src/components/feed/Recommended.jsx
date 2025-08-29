import { useDispatch } from "react-redux";
import { addCategory } from "../../videoSlice";

const Recommended = () => {
  const dispatch = useDispatch();
  const recoms = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Movie",
      value: "movie",
    },
    {
      id: 3,
      name: "Gaming",
      value: "gaming",
    },
    {
      id: 4,
      name: "News",
      value: "news",
    },
    {
      id: 5,
      name: "API",
      value: "live",
    },
    {
      id: 6,
      name: "Anime",
      value: "anime",
    },
    {
      id: 7,
      name: "Modi",
      value: "modi",
    },
    {
      id: 8,
      name: "OnePiece",
    },
    {
      id: 9,
      name: "Food",
    },
    {
      id: 10,
      name: "TailwindCSS",
    },
    {
      id: 11,
      name: "Mixes",
      value: "mixes",
    },
    {
      id: 12,
      name: "Apple",
      value: "apple",
    },
    {
      id: 13,
      name: "Samsung",
      value: "samsung",
    },
    {
      id: 14,
      name: "React",
    },
    {
      id: 15,
      name: "Skills",
    },
    {
      id: 16,
      name: "Comedy",
    },
    {
      id: 17,
      name: "Programming",
    },
    {
      id: 18,
      name: "Recipe",
    },
  ];

  const recommendedbutton = (buttonName) => {
    dispatch(addCategory(buttonName));
  };

  return (
    <div className=" mt-14 flex z-49 ml-5 gap-3 sticky top-11 bg-white p-3 overflow-x-scroll w-[84%] no-scrollbar">
      {recoms.map(({ id, name }) => (
        <button
          onClick={() => recommendedbutton(name)}
          className=" w-auto  cursor-pointer bg-gray-200 h-7 p-3  py-0.5 rounded-lg hover:text-gray-100 hover:bg-gray-500 duration-200 focus:bg-black focus:text-gray-200"
          key={id}
        >
          {name}
        </button>
      ))}
    </div>
  );
};

export default Recommended;
