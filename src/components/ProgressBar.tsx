import { IoIosArrowBack } from "react-icons/io";

interface ProgressBarProps {
  backbutton: () => void,
  firstIndex: boolean,
  currentIndex: number
}

export default function ProgressBar({ backbutton, firstIndex, currentIndex }: ProgressBarProps) {
  const widthValue: string = ((currentIndex + 1) * 20).toString() + "%";

  return (
    <div className="flex items-center">
      <span>
        {
          !firstIndex && <IoIosArrowBack className="hover:cursor-pointer" onClick={backbutton} />
        }
      </span>
      <div className="w-full bg-gray-200 rounded-full h-1 flex-grow ml-2">
        <div
          className="bg-green-600 h-1 rounded-full"
          style={{ width: widthValue }}
        ></div>
      </div>
    </div>
  );
}
