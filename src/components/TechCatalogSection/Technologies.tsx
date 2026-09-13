import { use } from "react";
import type { ITechType } from "../../Types/TechDataType";
import TechCards from "./TechCards";

interface TechPromiseProps{
    TechPromise:Promise<ITechType[]>
}

function Technologies({TechPromise}:TechPromiseProps) {

    const TechData=use(TechPromise);

  return (
    <main className="md:px-20 block items-center">
      <div className="space-y-2">
        <h1 className="text-center text-3xl md:text-left ">
          Explore the{" "}
          <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
            Technologies
          </span>
        </h1>
        <p className=" text-center md:text-left text-gray-700 text-sm">Pick one technology per category to build your ideal stack.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="md:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-3 items-center">
                {TechData.map((data:ITechType,ind:number)=>(
                  <TechCards key={ind} data={data}/>
                ))}
            </div>
        </div>
        <div className="md:col-span-4">

        </div>
      </div>
    </main>
  );
};

export default Technologies;
