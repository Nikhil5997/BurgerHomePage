import React, { useState } from "react";
import Burger from "../img/download 1.png";
import {
  MdBorderColor,
  MdOutlineClose,
  MdOutlineFeedback,
  MdOutlineLocalOffer,
} from "react-icons/md";
import { CiBurger } from "react-icons/ci";
import { Link } from "react-router-dom";

function Home() {
  const [showLogo, setShowLogo] = useState(true);

  const closeBtn = () => {
    setShowLogo(false);
  };

  return (
    <>
      <div className=" container mx-auto h-screen w-full grid grid-cols-1 bg-white bg-opacity-20">
        {showLogo && (
          <div className="h-80 bg-black bg-opacity-50">
            <div className="text-white mx-3">
              <button onClick={closeBtn}>
                <MdOutlineClose size={30} />
              </button>
            </div>
            <img
              src={Burger}
              alt=""
              className="mx-24 my-5 sm:mx-[40%] rounded-2xl "
            />
          </div>
        )}
        <div className="grid grid-cols-2 sm:grid-cols-4 mx-6">
          <div className="h-40 w-40 md:h-48 md:w-47 lg:w-48 xl:w-64 2xl:w-80 2xl:h-80 bg-black bg-opacity-80 rounded-md text-white">
            {" "}
            <Link to="order">
              <MdBorderColor
                size={90}
                className="mx-7 my-6 xl:mx-20  hover:text-gray-600 "
              />{" "}
              <h5 className="text-white hover:text-gray-600 xl:text-2xl font-serif text-center">
                Order here..
              </h5>
            </Link>
          </div>
          <div className="h-40 w-40 md:h-48 md:w-47 lg:w-48 xl:w-64 2xl:w-80 2xl:h-80 bg-black bg-opacity-80 rounded-md text-white">
            <CiBurger
              size={90}
              className="mx-7 my-6 xl:mx-20  hover:text-yellow-300"
            />
            <h5 className="text-white  xl:text-2xl font-serif text-center  hover:text-yellow-300">
              family Combo
            </h5>
          </div>
          <div className="h-40 w-40 md:h-48 md:w-47 lg:w-48 xl:w-64 2xl:w-80 2xl:h-80 bg-black bg-opacity-80 rounded-md text-white">
            <MdOutlineLocalOffer
              size={90}
              className="mx-7 my-6 xl:mx-20 hover:text-blue-300"
            />
            <h5 className="text-white  xl:text-2xl font-serif text-center hover:text-blue-300">
              Offer
            </h5>
          </div>
          <div className="h-40 w-40 md:h-48 md:w-47 lg:w-48 xl:w-64 2xl:w-80 2xl:h-80 bg-black bg-opacity-80 rounded-md text-white">
            <Link to="/contact">
              <MdOutlineFeedback
                size={90}
                className="mx-7 my-6 xl:mx-20 hover:text-red-300"
              />
              <h5 className="text-white  xl:text-2xl font-serif text-center hover:text-red-300">
                {" "}
                Contact{" "}
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
