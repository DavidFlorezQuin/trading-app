import Link from "next/link";
import React from "react";
Link;

const MiniCards = (props) => {
  const { title, description, num } = props;

  return (
    <>
      <article className="w-80 shadow-slate-600 bg-gradient-to-b rounded-md from-cyan-600 to-cyan-400 shadow-md p-4 text-white">
        <div className="flex gap-5 border-b-2">
          <span className="self-center text-xl font-bold border-2 p-2 rounded-full w-10 h-10 flex justify-center items-center">{num}</span>
          <h3 className="text-white h-16 items-center flex text-lg font-bold ">
            {title}
          </h3>
        </div>

        <p className="text-sm mt-4">{description}</p>
      </article>
    </>
  );
};
export default MiniCards;
