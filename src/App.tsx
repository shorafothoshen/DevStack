import { Suspense } from "react";
import BannerSection from "./components/BannerSection";
import NavBar from "./components/NavBar";
import Technologies from "./components/TechCatalogSection/Technologies";
import type { ITechType } from "./Types/TechDataType";
import Footer from "./components/Footer";

const TechFetchData=async():Promise<ITechType[]>=>{
    const res=await fetch('/data.json');
    const data=await res.json();
    return data;
  }

function App() {

  const TechPromise=TechFetchData();

  return (
    <>
      <div className="bg-gray-100 md:bg-white">
        <NavBar />
        <hr className="border border-gray-100" />
        <BannerSection />
        <Suspense>
          <Technologies TechPromise={TechPromise} />
        </Suspense>
        <Footer/>
      </div>
    </>
  );
}

export default App;
