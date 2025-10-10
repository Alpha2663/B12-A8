import { useParams } from "react-router";
import useFetchApps from "../Hook/useFetchApps";
import { IoMdDownload } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { AiTwotoneLike } from "react-icons/ai";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./NotFound";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

const AppDetails = () => {
  const { id } = useParams();
  const { apps, loading, error } = useFetchApps();
  const [install, setInstall] = useState(false);

  useEffect(() => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    const isInstalled = installedApps.some((installedApp) => installedApp.id === Number(id));
    if (isInstalled) {
      setInstall(true);
    }
  }, [id]);

  if (loading)
    return <div className="text-center py-10"><span className="loading loading-bars loading-xl p-4 m-4"></span></div>;
  if (error) return <div className="text-center py-10"><span className="loading loading-bars loading-xl"></span></div>;

  const app = apps.find((app) => app.id === Number(id));

  if (!app) {
    return <NotFound></NotFound>;
  }

  const handleInstallBtn = () => {
    const installedApps = JSON.parse(localStorage.getItem("installedApps")) || [];
    installedApps.push(app);
    localStorage.setItem("installedApps", JSON.stringify(installedApps));
    setInstall(true);
    toast.success("App installed successfully!", {
      position: "top-center",
    });
  };

  return (
    <div className="bg-[#F5F5F5] ">
      <div className="w-11/12 mx-auto py-10  border-b border-[#00193133] flex flex-col md:flex-row gap-6">
        <img
          src={app.image}
          className="h-[200px] w-[250px] rounded-sm"
          alt="not found"
        />
        <div>
          <div className="border-b border-[#00193133] pb-3 ">
            <h2 className="font-bold text-2xl">{app.title}</h2>
            <p className="text-[#627382] mt-1 text-sm">
              Developed by <span className="text-[#632EE3]">productive.io</span>
            </p>
          </div>
          <div className="flex gap-5 mt-2">
            <div>
              <IoMdDownload className="text-[#54CF68] h-8 w-8"> </IoMdDownload>
              <h2 className="font-semibold text-sm">Downloads</h2>
              <h2 className="text-3xl font-bold">{app.downloads}</h2>
            </div>
            <div>
              <FaStar className="text-[#FF8811] h-8 w-8"></FaStar>

              <h2 className="font-semibold text-sm">Average Ratings</h2>
              <h2 className="text-3xl font-bold">{app.ratingAvg}</h2>
            </div>
            <div>
              <AiTwotoneLike className="text-[#632EE3] h-8 w-8">
                {" "}
              </AiTwotoneLike>
              <h2 className="font-semibold text-sm">Downloads</h2>
              <h2 className="text-3xl font-bold">{app.reviews}</h2>
            </div>
          </div>

          <button
            onClick={handleInstallBtn}
            disabled={install}
            className="flex items-center gap-2 btn text-white bg-[#00D390] mt-2"
          >
            {install ? "Installed" : `Install (${app.size} MB)`}
          </button>
        </div>
      </div>
      <div className="w-full px-4 sm:w-11/12 mx-auto pb-8 sm:pb-10">
        <h1 className="font-bold text-xl sm:text-2xl mb-5">Ratings</h1>
        <div className="overflow-x-auto">
          <ResponsiveContainer width="100%" height={300} minWidth={300}>
            <BarChart
              layout="vertical"
              data={app.ratings}
              margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis dataKey="name" type="category" width={60} />
              <Tooltip />
              <Bar dataKey="count" fill="#FF8811">
                <LabelList dataKey="count" position="right" />
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="w-11/12 mx-auto pb-8">
        <h1 className="font-bold text-2xl mt-5 mb-2">Description</h1>
        <p className="text-[#627382]">{app.description}</p>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AppDetails;