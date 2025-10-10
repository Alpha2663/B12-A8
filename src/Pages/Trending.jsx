import React, { useState } from "react";
import useFetchApps from "../Hook/useFetchApps";
import AppCard from "./AppCard";

const Trending = () => {
  const { apps } = useFetchApps();

  const [showAll, setShowAll] = useState(false);

  const displayApps = showAll ? apps : apps.slice(0, 8);

  return (
    <div className="bg-[#F5F5F5] py-8">
      <div className="w-11/12 mx-auto ">
        <h1 className="text-3xl md:text-4xl font-bold text-center">
          Trending Apps
        </h1>
        <p className="text-center text-[#627382] mt-2 mb-5">
          Explore All Trending Apps on the Market developed by us
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {displayApps.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
       {
        !showAll && (
           <div className="flex justify-center items-center">
          <button
            onClick={() => setShowAll(true)}
            className="text-white bg-gradient-to-r mt-8 mb-8 md:mb-16 from-[#632EE3] to-[#9F62F2] btn text-center"
          >
            Show All
          </button>
        </div>
        )
       }
      </div>
    </div>
  );
};

export default Trending;
