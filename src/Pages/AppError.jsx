import { Link } from "react-router-dom";
import appError from "../assets/App-Error.png";

const AppError = () => {
  return (
    <div className="flex-1 w-full flex flex-col items-center justify-center px-4 py-4">
      <img
        src={appError}
        alt="App Not Found"
        className="max-w-full max-h-[60vh] object-contain"
      />
      <h1 className="text-4xl mt-4 text-center font-bold">
        Oops, App not found!
      </h1>
      <p className="text-center mt-2 text-[#627382]">
        The app you are looking for is not available.
      </p>
      <div className="flex justify-center items-center my-5">
        <Link to='/' className="btn text-white bg-gradient-to-r from-[#632EE3] to-[#9F62F2]">
          Go Back!
        </Link>
      </div>
    </div>
  );
};

export default AppError;