import { greetingList } from "../constants/data"

interface GreetingListProps{
  greetData:greetingList[]
}
export default function Greetings({greetData}:GreetingListProps) {
  return (
    <div className="grid grid-row sm:grid-cols-3 px-6   h-[500px]  pt-2 sm:pt-20 pb-10 ">
    
      <div className="col-span-1   content-center translate-x-20 sm:translate-x-0 ">
        <img src="/assets/monster.jpg" alt="monster-greet"  />
      </div>
    
      <div className="col-span-2 pl-0 sm:pl-10 content-center ">
      { greetData.map((item,index)=>(
        <div key={index}>
        <h2 className="text-2xl font-bold py-5">{item.title}</h2>
        <p className="py-2 text-3xl text-orange-400">{item.ratings}</p>
        <p className=" py-2 italic">"{item.quote}"</p>
        <p className="py-2 italic">{item.writer}</p>
        </div>
       ))}
      </div>
    </div>
  );
  
}
