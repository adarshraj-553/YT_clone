import Sidebarstamp from "./Sidebarstamp";
import { sec1, sec2, sec3, sec4, sec5, sec6 } from "./icons";

function Sidebar() {
  return (
    <div className=" w-58 px-2  fixed h-[calc(100vh-6.5vh)] overflow-y-scroll overflow-x-hidden mt-14 scroll-smooth ">
      {sec1.map(({ id, name, icon }) => (
        <Sidebarstamp key={id} name={name} icon={icon} />
      ))}

      <hr></hr>

      {sec2.map(({ id, name, icon }) => (
        <Sidebarstamp key={id} name={name} icon={icon} />
      ))}

      <hr></hr>

      <span className="mt-2 px-3 font-semibold">Explore</span>
      {sec3.map(({ id, name, icon }) => (
        <Sidebarstamp key={id} name={name} icon={icon} />
      ))}

      <hr></hr>

      <span className="m-1 px-3 font-semibold ">More From YouTube</span>
      {sec4.map(({ id, name, icon }) => (
        <Sidebarstamp key={id} name={name} icon={icon} color={"red"} />
      ))}

      <hr />

      {sec5.map(({ id, name, icon }) => (
        <Sidebarstamp key={id} name={name} icon={icon} />
      ))}

      <hr />

      <section className="ml-3 mt-4">
        {sec6.map((item) =>
          item.map((str) => (
            <a href="#" className="mr-2 cursor-pointer text-xs">
              {str}
            </a>
          ))
        )}
      </section>
    </div>
  );
}

export default Sidebar;
