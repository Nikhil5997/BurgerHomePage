/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

export default function Contact() {
  return (
    <div className=" h-screen container  rounded-md mx-auto">
      <div className="text-white h-[80%] w-[50%] mx-auto border-double border-4 border-white rounded-md bg-opacity-25 mt-5">
        <h1 className="text-center text-3xl font-sans">Log in</h1>
        <div className="h-8 w-[80%] border border-white mx-auto rounded-md my-9">
          <input
            type="text"
            className="bg-transparent text-white mx-2 border-hidden"
            placeholder="email or Phone "
          />
        </div>
        <div className="h-8 w-[80%] border border-white mx-auto rounded-md my-3">
          <input
            type="password"
            className="bg-transparent text-white mx-2 border-hidden"
            placeholder="Password"
          /><br/>
          <a href="#" className="text-xs text-blue-600">
            forget Password
          </a>
          <div className="h-8 w-[80%] border border-white bg-blue-500 mx-auto rounded-md my-3">
         <p className="text-center font-mono leading-7 ">logIn</p>  <br/>
        </div>
        <p className="text-center font-semibold leading-7 ">or</p> 
        <a href="#" className="text-sm text-blue-600 text-center mx-3">
          <p className="text-center text-2xl ">Create new account</p>  
          </a>
          
        </div>
      </div>
    </div>
  );
}
