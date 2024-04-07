
import { useState } from "react";
import { mathList } from "../constants/data";

interface MathListProps {
  data: mathList[];
}

export default function MathList({ data }: MathListProps) {
  const [isActive, setShowIsActive] = useState<number | null>(null);

  return (
    <div className="h-[550px] space-y-8 sm:h-[400px]">
      <h1 className="text-center text-xl sm:text-2xl font-semibold pt-4 my-0 sm:my-4">
        What is your math comfort level?
      </h1>
      <p className="my-0 sm:my-2 text-center text-gray-700 sm:text-lg text-md">
        Choose the highest level you feel confident in — you can always adjust
        later.
      </p>
      <ul className="grid grid-cols-2 sm:grid-cols-4 gap-3 justify-center mt-2 sm:mt-10">
        {data.map((item, index) => (
          <li
            key={index}
            onClick={() => setShowIsActive(index)}
            className={`${
              isActive === index
                ? "border-yellow-500 cursor-pointer border-3"
                : "hover:border-yellow-500 hover:cursor-pointer hover:border-3"
            } rounded-xl text-center flex flex-col py-2 px-3 border hover:border-yellow-500`}
           
          >
            <img
              src={item.image}
              alt="math-images"
              className="mx-auto mb-2 w-18 h-18 sm:w-40 sm:h-40"
            />
            <p className="text-md mb-2">{item.content}</p> {/* Add bottom margin */}
            <p className="text-lg font-semibold text-gray-500">
              {item.category}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
