import { OnYourWayData } from '../constants/data';

interface OnYourWayProps {
  data: OnYourWayData[];
}

export default function OnYourWay({ data }: OnYourWayProps) {
  return (
    <div className="grid grid-row sm:grid-cols-3 sm:mt-0 mt-10 h-[450px] pt-0 sm:pt-20 pb-10 ">
      <div className="col-span-1 flex justify-center items-center">
        <div className='translate-x-24 sm:translate-x-0'>
          <img src="/assets/pulley.jpg" alt="pulley" className="sm:max-w-[200px] w-full" />
        </div>
      </div>
      <div className="col-span-2 px-5 content-center">
        {data.map((item, index) => (
          <div key={index}>
            <h2 className="text-2xl font-bold py-5">{item.title}</h2>
            <p className="py-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
