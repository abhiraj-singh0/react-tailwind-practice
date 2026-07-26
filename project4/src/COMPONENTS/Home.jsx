function Home({title, name}) {
  const styles =
    "text-white rounded-sm flex justify-center items-center bg-[#ff4343]";
  const spanstyle = "text-white";
  const divhw = "w-85 h-41.75";
  return (
    <div>
      <div className="bg-[#323334] h-45.25 flex gap-10 flex-col justify-center items-center">
        <div className="h-10 flex w-262.5 justify-between">
          <h1 className="font-semibold text-3xl w-46.25">
            <span className={spanstyle}>F</span>
            <span className="text-[#FF0A0A]">oo</span>
            <span className={spanstyle}>dy</span>
            <span className={spanstyle}>Z</span>
            <span className="text-[#FF0A0A]">o</span>
            <span className={spanstyle}>ne</span>
          </h1>
          <input
            type="search"
            placeholder="Search Food..."
            className=" placeholder:text-white placeholder:pl-2 w-61.25 border border-[#FF0909] rounded-sm"
          />
        </div>
        <div className="w-81.5 h-7.75 flex justify-between mr-5">
          <a href="" className={`${styles} w-10.75`}>
            All
          </a>
          <a href="" className={`${styles} w-24`}>
            Breakfast
          </a>
          <a href="" className={`${styles} w-17.75`}>
            Lunch
          </a>
          <a href="" className={`${styles} w-18.5`}>
            Dinner
          </a>
        </div>
      </div>
      <div className="bg-[url(/images/bg.png)] w-full h-125.5 flex flex-col justify-center items-center">
        </div>
    </div>
  );
}

export default Home;
