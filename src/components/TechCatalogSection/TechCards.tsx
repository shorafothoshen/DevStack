import type { ITechType } from "../../Types/TechDataType";

interface TechCardProps{
    TechData:ITechType[]
}

const TechCards = ({TechData}:TechCardProps) => {
    console.log(TechData)
  return (
    TechData.map(data=>{
      <div className="p-6 card flex flex-col gap-4 border rounded-lg w-80 shadow-sm">
      <div className="flex justify-between items-start">
        <img
          className="w-10"
          src={data.icon}
          alt=""
        />
        <h1 className="bg-blue-50 text-blue-500 text-sm font-medium rounded-full px-3 py-1">
          {data.badge}
        </h1>
      </div>

      <div className="flex flex-col gap-2">
        <h1 className="font-bold text-2xl">{data.name}</h1>
        <p className="text-gray-500 text-sm">
          {data.description}
        </p>
      </div>

      <div className="flex justify-between items-center">
        <h1 className="bg-gray-200 text-sm px-2 py-1 rounded-md">Frontend</h1>
        <h1 className="text-gray-500 text-sm">Beginner-Friendly</h1>
        <h1 className="text-sm">⭐ 4.9</h1>
      </div>

      <button className="bg-black text-white font-medium rounded-lg py-3 w-full">
        Add to Stack
      </button>
    </div>
    })
  );
};

export default TechCards;
