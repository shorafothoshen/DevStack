import { IoMdClose } from "react-icons/io";

function StackCard() {
  return (
    <div className="w-full flex flex-col gap-3 border border-gray-700 rounded-md p-5">
      <h1 className="font-medium text-2xl">Your Stack</h1>
      <p>2 Technology Selected</p>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center border border-gray-600 p-4 rounded-md">
          <div className="flex gap-4">
            <img
              className="w-10"
              src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"
              alt=""
            />
            <div>
              <h1>React</h1>
              <p>Fronted</p>
            </div>
          </div>
          <div>
            <button>
              <IoMdClose className="text-4xl" />
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center border border-gray-600 p-4 rounded-md">
          <div className="flex gap-4">
            <img
              className="w-10"
              src="https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg"
              alt=""
            />
            <div>
              <h1>React</h1>
              <p>Fronted</p>
            </div>
          </div>
          <div>
            <button>
              <IoMdClose className="text-4xl" />
            </button>
          </div>
        </div>
      </div>
      <button className="border border-pink-700 text-pink-700 mt-10 py-2 rounded-md">
        Remove All
      </button>
    </div>
  );
}

export default StackCard;
