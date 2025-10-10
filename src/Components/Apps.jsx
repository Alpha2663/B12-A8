import React, { useState } from "react";
import { Link } from "react-router";
import appError from "../assets/App-Error.png";
import useFetchApps from "../Hook/useFetchApps";
import AppCard from "../Pages/AppCard";

const Apps = () => {
  const { apps, loading } = useFetchApps();
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const filteredApps = apps
    .filter((app) =>
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOrder === "high-to-low") {
        return b.downloads - a.downloads;
      } else if (sortOrder === "low-to-high") { 
        return a.downloads - b.downloads;
      } else {
        return 0;
      }
    });

  return (
    <>
      <div className="bg-[#F5F5F5] py-10">
        <h1 className="text-center text-3xl font-bold mb-3">
          Our All Applications
        </h1>
        <p className="text-center text-[#627382] mb-6">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
        <div className="flex justify-between items-center my-3 w-11/12 mx-auto">
          <h2 className="font-bold">({filteredApps.length}) Apps Found</h2>
          <div className="flex items-center gap-4">
            <select
              className="select select-bordered"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="" disabled>
                Sort by Downloads
              </option>
              <option value="high-to-low">High-Low</option>
              <option value="low-to-high">Low-High</option>
            </select>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                required
                placeholder="Search Apps"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </label>
          </div>
        </div>
        {loading ? (
          <div className="text-center py-10">
            <h2 className="text-2xl font-bold">Loading...</h2>
          </div>
        ) : filteredApps.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-11/12 mx-auto">
            {filteredApps.map((app) => (
              <AppCard key={app.id} app={app}></AppCard>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <img src={appError} alt="App Not Found" className="max-w-full max-h-[60vh] object-contain mx-auto" />
            <h1 className="text-4xl mt-4 text-center font-bold">Oops, App not found!</h1>
            <p className="text-center mt-2 text-[#627382]">The app you are looking for is not available.</p>
            <div className="flex justify-center items-center my-5">
              <Link to='/' className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">Go Back!</Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Apps;
