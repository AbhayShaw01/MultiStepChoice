
import { useState } from "react";
import {  TopicItem } from "../constants/data";



interface ListProps {
  array: TopicItem[];

}

export default function List({ array }: ListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  return (
    <div>
      
        
      <h1 className="text-center text-2xl font-semibold my-4">
      Which are you most interested in?
      </h1>
      <p className="my-2 text-center text-gray-700">
        Choose just one. This will help us get you started (but won't limit your
        experience).
      </p>
      <ul className="flex flex-col rounded-lg py-2 mt-10">
        {array.map((item, index) => (
          <li
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`py-3 px-3 flex gap-3 mb-2 border rounded ${
              activeIndex === index
                ? "border-yellow-500 cursor-pointer border-3"
                : "hover:border-yellow-500 hover:cursor-pointer hover:border-3"
            }`}
          >
            <span>{item.Icon}</span>
            
            <p className="font-semibold ">   
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
   
    </div>
  );
}
