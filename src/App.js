import React, { useState } from 'react';
import "./App.css";
import Burger from "../src/img/download 1.png";
import { MdBorderColor, MdOutlineClose, MdOutlineFeedback, MdOutlineLocalOffer } from "react-icons/md";
import { GrContactInfo } from "react-icons/gr";

function App() {
  const [showLogo, setShowLogo] = useState(true);

  const closeBtn = () => {
    setShowLogo(false);
  };

  return (
    <>
      <div className="h-screen w-full grid grid-cols-1 bg-white bg-opacity-25">
        {showLogo && (
          <div className="h-80 bg-black bg-opacity-50">
            <div className="text-white mx-3">
              <button onClick={closeBtn}>
                <MdOutlineClose size={30} />
              </button>
            </div>
            <img src={Burger} alt="" className="mx-24 my-5 sm:mx-[40%] rounded-2xl" />
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-4 mx-6">
          <div className="h-40 w-40 md:h-48 md:w-47 lg:w-48 xl:w-64 2xl:w-80 2xl:h-80 bg-black bg-opacity-80 rounded-md text-white">
            <MdBorderColor size={90} className="mx-7 my-6" />
          </div>
          <div className="h-40 w-40 md:h-48 md:w-47 lg:w-48 xl:w-64 2xl:w-80 2xl:h-80 bg-black bg-opacity-80 rounded-md text-white">
            <GrContactInfo size={90} className="mx-7 my-6" />
          </div>
          <div className="h-40 w-40 md:h-48 md:w-47 lg:w-48 xl:w-64 2xl:w-80 2xl:h-80 bg-black bg-opacity-80 rounded-md text-white">
            <MdOutlineLocalOffer size={90} className="mx-7 my-6" />
          </div>
          <div className="h-40 w-40 md:h-48 md:w-47 lg:w-48 xl:w-64 2xl:w-80 2xl:h-80 bg-black bg-opacity-80 rounded-md text-white">
            <MdOutlineFeedback size={90} className="mx-7 my-6" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
