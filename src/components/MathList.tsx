import { useState } from "react";
import { mathList } from "../constants/data";

interface MathListProps {
  data: mathList[];
}
export default function MathList({ data }: MathListProps) {
  const [isActive,showIsActive]=useState<number|null>(null);
  return (
    <div className=" h-[600px] space-y-8 sm:h-[400px]">
      <h1 className="text-center text-xl sm:text-2xl font-semibold pt-4 my-0 sm:my-4">
        What is your math comfort level?
      </h1>
      <p className="my-2 text-center text-gray-700 sm:text-lg text-md">
        Choose the highest level you feel confident in — you can always adjust
        later.
      </p>
      <ul className="flex flex-wrap sm:flex-nowrap py-2 mt-2 sm:mt-10 justify-center gap-3">
  {data.map((item, index) => (
    <li key={index} onClick={()=>showIsActive(index)} className={` ${ isActive === index
      ? "border-yellow-500 cursor-pointer border-3"
      : "hover:border-yellow-500 hover:cursor-pointer hover:border-3"} w-[175px] sm:w-full h-[200px] rounded-xl text-center flex-col py-2 px-3 border hover:border-yellow-500`}>
      <img src={item.image} alt="math-images" className="sm:size-40 size-20 items-center mx-auto" />
      <p className="text-md">{item.content}</p>
      <p className="text-lg font-semibold text-gray-500 pb-2">{item.category}</p>
    </li>
  ))}
</ul>

    </div>
  );
}
