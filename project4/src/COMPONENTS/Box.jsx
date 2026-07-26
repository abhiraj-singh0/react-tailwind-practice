import React from "react";

export default function Box({ title }) {
    const divhw = "w-85 h-41.75";
    const styles =
    "text-white rounded-sm flex justify-center items-center bg-[#ff4343]";
  return (
    <div className={`${divhw} bg-transparent backdrop-blur-md rounded-lg flex`}>
      <img src="/images/Ellipse 1.png" className="w-35 h-35 mt-5" />
      <div className="flex flex-col gap-4">
        <h3 className="text-white mt-5">{title}</h3>
        <p className="text-xs text-white">
          Lorem ipsum dolor sit amet consectetur optio commodi, quod distinctio
          sunt.
        </p>
        <div className="w-42 flex justify-end">
          <button className={styles}>$10.00</button>
        </div>
      </div>
    </div>
  );
}
