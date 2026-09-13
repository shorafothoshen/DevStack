import type { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import type { ITechType } from "../../Types/TechDataType";

interface StackProps {
  isCount: number;
  setCount: Dispatch<SetStateAction<number>>;
  isSelected: ITechType[];
}

function StackCard({ isCount, setCount, isSelected }: StackProps) {
  return (
    <div className="w-full flex flex-col gap-3 border border-gray-700 rounded-md p-5">
      <div className="flex flex-col gap-1">
        <h1 className="font-medium text-2xl">Your Stack</h1>
        <p className="text-gray-500">{isCount} Technology Selected</p>
      </div>
      <div className="flex flex-col gap-4">
        {isSelected.map((Stack) => (
          <div className="flex justify-between items-center border border-gray-600 p-4 rounded-md mt-2">
            <div className="flex gap-4">
              <img className="w-10" src={Stack.icon} alt="" />
              <div>
                <h1 className="font-bold text-xl">{Stack.name}</h1>
                <p className="text-gray-500 font-medium">{Stack.category}</p>
              </div>
            </div>
            <div>
              <button className="cursor-pointer ">
                <IoMdClose className="text-4xl hover:bg-gray-400 rounded-md hover:text-white hover:w-9 hover:h-9" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button className="border border-pink-700 text-pink-700 mt-10 py-2 rounded-md cursor-pointer hover:bg-pink-300 font-bold">
        Remove All
      </button>
    </div>
  );
}

export default StackCard;
