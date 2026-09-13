import { use, useState } from "react";
import type { ITechType } from "../../Types/TechDataType";
import TechCards from "./TechCards";
import StackCard from "./StackCard";
interface TechPromiseProps{
    TechPromise:Promise<ITechType[]>
}

function Technologies({TechPromise}:TechPromiseProps) {
    const TechData=use(TechPromise);

    const [isCount, setCount]=useState<number>(0);
    const [isSelected, setSelected]=useState<ITechType[]>([]);
    console.log(isSelected)

  return (
    <main className="md:px-20 block items-center">
      <div className="space-y-2">
        <h1 className="text-center text-3xl md:text-left ">
          Explore the  <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">Technologies
          </span>
        </h1>
        <p className=" text-center md:text-left text-gray-700 text-sm">Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-10">
        <div className="md:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch justify-items-center md:justify-items-stretch">
                {TechData.map((data:ITechType)=>(
                  <TechCards key={data.id} data={data} isSelectedObj={isSelected} setSelectedObj={setSelected} setCount={setCount} />
                ))}
            </div>
        </div>
        <div className="md:col-span-1 justify-items-center">
             <StackCard isCount={isCount} setCount={setCount} isSelected={isSelected} setSelected={setSelected}/>
        </div>
      </div>
    </main>
  );
};

export default Technologies;
