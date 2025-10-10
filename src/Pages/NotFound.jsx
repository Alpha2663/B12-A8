import React from 'react';
import notFoundImg from '../assets/App-Error.png'
import { Link } from 'react-router';
import Footer from './Footer';
import Navbar from '../Pages/Navbar';
const NotFound = () => {
    return (
         <div className="flex flex-col min-h-screen overflow-x-hidden">
          <Navbar></Navbar>
      <div className="flex-1 w-full flex flex-col items-center justify-center px-4 py-4">
        <img
          src={notFoundImg}
          alt="Error 404"
          className="max-w-full max-h-[60vh] object-contain"
        />
        <h1 className="text-4xl mt-4 text-center font-bold">
         OPPS!! APP NOT FOUND
        </h1>
        <p className="text-center mt-2 text-[#627382]">
          The App you are requesting is not found on our system.  please try another apps
        </p>
        <div className="flex justify-center items-center my-5">
          <Link to='/' className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
            Go Back!
          </Link>
        </div>
      </div>
      <Footer></Footer>
   
    </div>
    );
};

export default NotFound;