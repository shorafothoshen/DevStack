import { Suspense, useEffect, useState } from "react";
import BannerSection from "./components/BannerSection";
import NavBar from "./components/NavBar";
import Technologies from "./components/TechCatalogSection/Technologies";
import type { ITechType } from "./Types/TechDataType";
import Footer from "./components/Footer";

function App() {
  const [TechData, setTechData]=useState<ITechType[]>([]);
  const [isLoading, setLoading]=useState<boolean>(true);

  useEffect(()=>{
    const FetchData=async()=>{
      const res=await fetch('/data.json');
      const data=await res.json();
      setTechData(data);
      setLoading(false);
    }
    FetchData();
  },[])

  return (
    <>
      <div className="bg-gray-100 md:bg-white">
        <NavBar />
        <BannerSection />
        <Suspense fallback={<><h1 className="flex justify-center items-center px-20 text-3xl">Loading.....</h1></>}> 
          <Technologies TechData={TechData} isLoading={isLoading}/> 
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
