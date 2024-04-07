
import { useState } from "react";
import { Profession } from "../constants/data";



interface ListProps {
  array: Profession[];

}

export default function List({ array }: ListProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      <h1 className="text-center text-2xl  font-semibold my-4">
        Which describes you best
      </h1>
      <p className="my-2 text-center text-gray-700">
      This will help us personalize your experience.
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
            <p className="font-bold ">{item.profession}
            </p>
            <p className="font-normal text-gray-700">   
              {item.desc}
            </p>
          </li>
        ))}
      </ul>
   
    </div>
  );
}
