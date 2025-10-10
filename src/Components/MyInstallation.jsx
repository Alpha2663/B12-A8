import React, { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyInstallation = () => {
    const [installedApps, setInstalledApps] = useState([]);

    useEffect(() => {
        const apps = JSON.parse(localStorage.getItem('installedApps')) || [];
        setInstalledApps(apps);
    }, []);

    const handleUninstall = (appId) => {
        const updatedApps = installedApps.filter(app => app.id !== appId);
        setInstalledApps(updatedApps);
        localStorage.setItem('installedApps', JSON.stringify(updatedApps));
        toast.success('App uninstalled successfully!', {
            position: "top-center",
        });
    };

    return (
        <div className="bg-[#F5F5F5] py-10">
            <h1 className="text-center text-3xl font-bold mb-3">My Installed Apps</h1>
            <p className="text-center text-[#627382] mb-6">
                Here are all the apps you have installed.
            </p>
            {installedApps.length > 0 ? (
                <div className="">
                    {installedApps.map((app) => (
  <div
    key={app.id}
    className=" bg-white shadow-md rounded-md p-4 mb-3"
  >
 <div className='flex justify-between'>
       <div className='flex gap-5'>
    <div>
      <img
      src={app.image}
      alt="network error"
      className="w-16 h-16 rounded-md object-cover"
    />
   </div>

    <div className="">
      <h3 className="text-lg font-semibold">{app.title}</h3>
      <p className="text-gray-500 text-sm">{app.companyName}</p>
      
    </div>
     </div>
    <div>
        <button
        onClick={() => handleUninstall(app.id)}
        className="btn bg-red-500 hover:bg-red-600 text-white px-4 py-1 mt-3 rounded-md"
      >
        Uninstall
      </button>
    </div>
 </div>
  
  </div>
))}
                </div>
            ) : (
                <div className="text-center py-10">
                    <h2 className="text-2xl font-bold">No Apps Installed Yet</h2>
                </div>
            )}
            <ToastContainer />
        </div>
    );
};

export default MyInstallation;