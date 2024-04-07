import { useEffect, useState } from "react";
import Choice from "./components/Choice";
import Greetings from "./components/Greetings";
import List from "./components/List";
import Loading from "./components/Loading";
import MathList from "./components/MathList";
import OnYourWay from "./components/OnYourWay";
import ProgressBar from "./components/ProgressBar";
import { dataArray, greetings, mathData, onYourWay, path, professional } from "./constants/data";
import useMultiStep from "./hook/multiStep";
import ListTwo from "./components/ListTwo"
export default function App() {
  const [showLoading,setShowLoading]=useState(false);
  const { steps, currentIndex, back, next, isFirstIndex } = useMultiStep([
    <List array={professional} />,
   
    <ListTwo array={dataArray} />,
    <OnYourWay data={onYourWay} />,
    <MathList data={mathData} />,
    <Greetings greetData={greetings} />,
    <Loading />,
    <Choice pathValue={path}/>
  ]);
  const isLastIndex=currentIndex === steps.length - 1;
  const isLoadingIndex = currentIndex ===steps.length - 2;
  useEffect(()=>{
  
    if (isLoadingIndex) {
      
     setTimeout(() => {
        setShowLoading(false);
        next(); 
      }, 2000);
    }

  },[isLoadingIndex,next]);

  return (
    <div className="flex flex-col max-h-screen justify-center items-center pb-10 px-5 w-full h-screen">
          <div className="mt-8 max-w-[1200px] w-full  max-h-screen sm:h-full flex flex-col">
       {!isLastIndex && !isLoadingIndex && <ProgressBar
          currentIndex={currentIndex}
          firstIndex={isFirstIndex}
          backbutton={back}
        />}
      
        <div className=" flex-grow w-full mx-auto max-w-[800px] overflow-hidden">
        {showLoading && <Loading />}
          { !showLoading && steps[currentIndex]}
          <div className="text-center">
            <button
              onClick={next}
              className={`${isLastIndex ? "hidden":''} mt-4 bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded`}
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
