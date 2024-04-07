import { pathData } from "../constants/data";

export interface ChoiceProps {
  pathValue: pathData[];
}

export default function Choice({ pathValue }: ChoiceProps) {
  return (
    <div className="flex flex-wrap items-center h-screen justify-center sm:h-screen">
      <div className="w-full flex-col h-84  flex items-center ">
        <h2 className="sm:text-3xl text-xl font-bold sm:mb-10 mb-4 text-center">
          Learning paths based on your answers
        </h2>
        <p className="text-center font-normal text-md mb-4">
          Choose one to get started. You can switch anytime.
        </p>
        <div className="grid grid-row-2 sm:grid-cols-2 w-full sm:h-full h-1/2 py-5 px-1  gap-4">
          {pathValue.map((item, index) => (
            <div key={index} className="path-item">
              <div className="grid grid-cols-3 border  hover:border-yellow-300 h-full relative">
                {index === 0 && (
                  <span className="bg-yellow-500 translate-x-36  text-xs font-bold  py-1 px-2 -translate-y-3  rounded-2xl  absolute">
                    MOST POPULAR
                  </span>
                )}

                <div className="col-span-2 p-4 h-full">
                  <div className=" w-full h-full mt-2 ">
                    <p className="py-3">
                      <strong>{item.heading}</strong> {item.details}
                    </p>
                  </div>
                </div>
                <div className="col-span-1 sm:p-4 px-0 py-8 h-full">
                  <div className="w-full h-full flex ">
                    <img src="/assets/monster.jpg" alt="monster" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
