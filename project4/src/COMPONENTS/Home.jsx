function Home() {
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
        <div className="flex w-266.75 justify-between">
            <div className={`${divhw} bg-transparent backdrop-blur-md rounded-lg flex`}>
                <img src="/images/Ellipse 1.png" className="w-35 h-35 mt-5"/>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white mt-5">Boiled Egg</h3>
                    <p className="text-xs text-white">Lorem ipsum dolor sit amet consectetur
                         optio commodi, quod distinctio sunt.</p>
                    <div className="w-42 flex justify-end">
                        <button className={styles}>$10.00</button>
                    </div>
                </div>
            </div>
            <div className={`${divhw} bg-transparent backdrop-blur-md rounded-lg flex`}>
                <img src="/images/Ellipse 1 (1).png" className="w-35 h-35 mt-5"/>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white mt-5">Boiled Egg</h3>
                    <p className="text-xs text-white">Lorem ipsum dolor sit amet consectetur
                         optio commodi, quod distinctio sunt.</p>
                    <div className="w-42 flex justify-end">
                        <button className={styles}>$10.00</button>
                    </div>
                </div>
            </div>
            <div className={`${divhw} bg-transparent backdrop-blur-md rounded-lg flex`}>
                <img src="/images/Ellipse 1 (2).png" className="w-35 h-35 mt-5"/>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white mt-5">Boiled Egg</h3>
                    <p className="text-xs text-white">Lorem ipsum dolor sit amet consectetur
                         optio commodi, quod distinctio sunt.</p>
                    <div className="w-42 flex justify-end">
                        <button className={styles}>$10.00</button>
                    </div>
                </div>
            </div>
        </div>
        <div className="flex w-266.75 justify-between">
            <div className={`${divhw} bg-transparent backdrop-blur-md rounded-lg flex`}>
                <img src="/images/Ellipse 1 (3).png" className="w-35 h-35 mt-5"/>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white mt-5">Boiled Egg</h3>
                    <p className="text-xs text-white">Lorem ipsum dolor sit amet consectetur
                         optio commodi, quod distinctio sunt.</p>
                    <div className="w-42 flex justify-end">
                        <button className={styles}>$10.00</button>
                    </div>
                </div>
            </div>
            <div className={`${divhw} bg-transparent backdrop-blur-md rounded-lg flex`}>
                <img src="/images/Ellipse 1 (4).png" className="w-35 h-35 mt-5"/>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white mt-5">Boiled Egg</h3>
                    <p className="text-xs text-white">Lorem ipsum dolor sit amet consectetur
                         optio commodi, quod distinctio sunt.</p>
                    <div className="w-42 flex justify-end">
                        <button className={styles}>$10.00</button>
                    </div>
                </div>
            </div>
            <div className={`${divhw} bg-transparent backdrop-blur-md rounded-lg flex`}>
                <img src="/images/Ellipse 1 (5).png" className="w-35 h-35 mt-5"/>
                <div className="flex flex-col gap-4">
                    <h3 className="text-white mt-5">Boiled Egg</h3>
                    <p className="text-xs text-white">Lorem ipsum dolor sit amet consectetur
                         optio commodi, quod distinctio sunt.</p>
                    <div className="w-42 flex justify-end">
                        <button className={styles}>$10.00</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
