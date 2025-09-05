
const VideoSuggestion = ({ item }) => {
  
  let viewscount = Number(item.statistics.viewCount);

  function getviews() {
    if (viewscount > 0 && viewscount <= 999) {
      return <>{viewscount}</>;
    }
     else if (viewscount > 999 && viewscount <= 999999) {
      viewscount = (viewscount - (viewscount % 1000)) / 1000
      console.log(`${viewscount}k`);
      return<>{viewscount}k</>
    } 
    else if (viewscount > 999999 && viewscount <= 999999999) {
      viewscount = (viewscount - (viewscount % 100000)) / 1000000;
      console.log(`${viewscount}M`);
      return<>{viewscount}M</>
    }
  }

  return (
    <div className="flex h-26 overflow-y-hidden">
      <div className="w-42 h-33">
        <img src={item.snippet.thumbnails.medium.url} className="rounded-xl" />
      </div>

      <div className="ml-0.5">
        <div className="text-sm leading-4.5 font-semibold w-52 h-9 overflow-y-hidden ">
          <p>{item.snippet.title} </p>
        </div>

        <p className="text-xs font-light ">{item.snippet.channelTitle}</p>
        <div className="text-xs font-extralight">
          <span>{getviews()} views</span> 
          {/* <span>time</span> */}
        </div>
      </div>
    </div>
  );
};

export default VideoSuggestion;
