function Sidebarstamp({ name, icon, color }) {
  return (
    <section className=" my-2">
      <div className="flex space-x-4 hover:bg-gray-100 duration-200 py-2 px-4 rounded-xl items-center text-l cursor-pointer">
        <div className={`text-xl text-${color}-600`}>{icon}</div>
        <span >{name}</span>
      </div>
    </section>
  );
}

export default Sidebarstamp;
