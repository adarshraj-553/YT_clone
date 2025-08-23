export const Recommended = () => {
  const recoms = [
    {
      id: 1,
      name: "All",
      value: "",
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
      name: "Live",
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
      name: "India",
      value: "india",
    },
    {
      id: 9,
      name: "War",
      value: "war",
    },
    {
      id: 10,
      name: "Operating Systems",
      value: "operatingsystems",
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
      name: "Comedy",
      
    },
     {
      id: 15,
      name: "Skills",
      
    },

    
   

  ];

  return (
   
    <div className=" mt-11 flex z-49 ml-5 gap-3 sticky top-11 bg-white p-5">
      {recoms.map(({id,name}) => (
        <div className="cursor-pointer bg-gray-200 h-7 p-3  py-0.5 rounded-lg hover:text-gray-100 hover:bg-gray-600 duration-200" key={id}>{name}</div>
      ))}

      
    </div>
    
  )
};
