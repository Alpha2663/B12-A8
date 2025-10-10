import React from "react";
import { FaDownload, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const AppCard = ({ app }) => {
  const { title, image, ratingAvg, downloads, id } = app;

  return (
    <Link to={`/apps/${id}`}>
      <div className="p-3 rounded-md bg-white">
        <img
          src={image}
          className="h-[250px] w-full object-cover rounded-md"
          alt="network error"
        />
        <h3 className="mt-1 font-semibold">{title}</h3>
        <div className="flex items-center justify-between mt-2 ">
          <h4 className="flex gap-2 items-center text-[#00D390] bg-[#F1F5E8] rounded-sm p-2 text-sm">
            <FaDownload />
            {downloads}
          </h4>
          <h4 className="flex gap-2 items-center text-[#FF8811] bg-[#FFF0E1]  rounded-sm p-2 text-sm">
            <FaStar />
            {ratingAvg}
          </h4>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;
