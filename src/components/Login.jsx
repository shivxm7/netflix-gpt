import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setisSignIn] = useState(true);
  const toggleSignIn = () => {
    setisSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/05e91faa-6f6d-4325-934e-5418dcc2567b/web/IN-en-20250630-TRIFECTA-perspective_159086b1-425f-435b-bcd5-1ed8039cdef9_medium.jpg"
          alt="body"
        />
      </div>
      <form className="bg-black/80 absolute p-12 w-3/12 my-36 mx-auto right-0 left-0 text-white">
        <h1 className="text-3xl text-white font-bold py-4">
          {" "}
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="m-2 p-3 w-full text-white bg-gray-500 rounded-xs"
          />
        )}
        <input
          type="email"
          placeholder="Email"
          className="m-2 p-3 w-full text-white bg-gray-500 rounded-xs"
        />
        <input
          type="password"
          placeholder="Password"
          className="m-2 p-3 w-full bg-gray-500 rounded-xs text-white"
        />
        <button className="mx-2 my-6 py-4 bg-red-700 text-white rounded-xs w-full cursor-pointer hover:bg-red-800">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p className="p-2 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix? Sign Up now"
            : "Already Register? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
