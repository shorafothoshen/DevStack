import { type Dispatch, type SetStateAction } from "react";
import type { ITechType } from "../../Types/TechDataType";
import { toast, Bounce } from "react-toastify";
import { FaCheck } from "react-icons/fa";
import LoadingState from "./LoadingState";
interface TechCardsProps {
  TechData: ITechType[];
  isSelectedObj: ITechType[];
  setSelectedObj: Dispatch<SetStateAction<ITechType[]>>;
  // isCount:number
  setCount: Dispatch<SetStateAction<number>>;
  isLoading: boolean;
}

const TechCards = ({TechData,isSelectedObj,setSelectedObj,setCount,isLoading}: TechCardsProps) => {

  const HandleIsSelecteded = (id: string): boolean => {
    let isSelected = false;
    for (let i = 0; i < isSelectedObj.length; i++) {
      if (isSelectedObj[i].id === id) {
        isSelected = true;
        break;
      }
    }
    return isSelected;
  };

  const HandleSelected = (selection: ITechType) => {
    if (!isSelectedObj.includes(selection)) {
      setSelectedObj((prev) => [...prev, selection]);
      setCount((cnt) => cnt + 1);

      toast.success(
        `${selection.name} has been added to your Technology Stack!`,
        {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        },
      );
    }
  };

  return isLoading?(<LoadingState/>):(
    TechData.map((data) => (
      <div key={data.id}
        className={`p-6 card flex flex-col gap-4 border-2 ${HandleIsSelecteded(data.id) ? "border-pink-500" : "border-green-400"} rounded-lg w-95 md:w-full md:h-full shadow-sm`}
      >
        <div className="flex justify-between items-start">
          <img className="w-10" src={data.icon} alt={data.icon} />
          <h1
            className={`${data.color} text-sm font-medium rounded-full px-3 py-1`}
          >
            {data.badge}
          </h1>
        </div>

        <div className="flex flex-col gap-2">
          <h1 className="font-bold text-2xl">{data.name}</h1>
          <p className="text-gray-500 text-sm">{data.description}</p>
        </div>

        <div className="flex justify-between items-center">
          <h1 className="bg-gray-200 text-sm px-2 py-1 rounded-md">
            {data.category}
          </h1>
          <h1 className="text-gray-500 text-sm">{data.difficulty}</h1>
          <h1 className="text-sm">⭐ {data.rating}</h1>
        </div>

        <button
          onClick={() => HandleSelected(data)}
          className={`${HandleIsSelecteded(data.id) ? "bg-pink-300/20 text-pink-600" : "bg-black text-white"} font-medium rounded-lg py-3 w-full mt-auto cursor-pointer disabled:cursor-not-allowed`}
          disabled={HandleIsSelecteded(data.id)}
        >
          {HandleIsSelecteded(data.id) ? (<><FaCheck className="inline mr-2" />Added to Stack</>) : (
            "Add to Stack"
          )}
        </button>
      </div>
    ))
  );
};

export default TechCards;
