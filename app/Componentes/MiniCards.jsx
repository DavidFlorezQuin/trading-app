import Link from "next/link";
import React from "react";
Link;

const MiniCards = (props) => {
  const { title, description } = props;

  return <>
   <article className="w-80 shadow-slate-600 shadow-md p-4 text-white">
    <h2 className="text-cyan-600 h-16 items-center flex text-lg font-bold border-b-2 border-gray-400">{title}</h2>
    <p className="text-sm mt-4">{description}</p>
   </article>
  
  
  </>;
};
export default MiniCards;
