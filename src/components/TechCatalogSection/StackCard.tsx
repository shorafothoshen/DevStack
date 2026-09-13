import { type Dispatch, type SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import type { ITechType } from "../../Types/TechDataType";
import { toast, Bounce } from "react-toastify";

interface StackProps {
  isCount: number;
  setCount: Dispatch<SetStateAction<number>>;
  isSelected: ITechType[];
  setSelected: Dispatch<SetStateAction<ITechType[]>>;
}

function StackCard({ isCount, setCount, isSelected, setSelected }: StackProps) {

  const HandleRemoveStack = (RerStack: ITechType) => {
    const restStack = isSelected.filter(
      (Selected: ITechType) => Selected.id != RerStack.id,
    );
    setSelected(restStack);
    setCount((cnt) => cnt - 1);
    toast.warn(`${RerStack.name} has been removed from your stack.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const HandleRemoveAll = () => {
    setSelected([]);
    setCount(0);
    toast.warn(`Removed All stack.`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  return (
    <div className="w-94 md:w-full flex flex-col gap-3 border-2 border-gray-700 rounded-md p-5">
      <div className="flex flex-col gap-1">
        <h1 className="font-medium text-2xl">Your Stack</h1>
        <p className="text-gray-500">
          {isCount === 0
            ? "No technologies selected yet."
            : `${isCount} Technology Selected`}
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {isCount === 0 ? (<h1 className="text-center text-gray-500 border border-gray-500 rounded-md p-3">Your stack is empty.</h1>) : (
          isSelected.map((Stack) => (
            <div className="flex justify-between items-center border border-gray-600 p-4 rounded-md mt-2"
            >
              <div className="flex gap-4">
                <img className="w-10" src={Stack.icon} alt="" />
                <div>
                  <h1 className="font-bold text-xl">{Stack.name}</h1>
                  <p className="text-gray-500 font-medium">{Stack.category}</p>
                </div>
              </div>
              <button
                onClick={() => HandleRemoveStack(Stack)}
                className="cursor-pointer"
              >
                <IoMdClose className="text-4xl hover:bg-gray-400 rounded-md hover:text-white hover:w-9 hover:h-9" />
              </button>
            </div>
          ))
        )}
      </div>
      {isCount!==0?(<button
        onClick={HandleRemoveAll}
        className="border border-pink-700 text-pink-700 mt-10 py-2 rounded-md cursor-pointer hover:bg-pink-300 font-bold"
      >
        Remove All
      </button>):""}
    </div>
  );
}

export default StackCard;
