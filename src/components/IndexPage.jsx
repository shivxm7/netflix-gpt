import React from "react";
import Header from "./Header";
import { BG_IMAGE } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { toggleGetStarted } from "../store/getStartSlice";
import Login from "./Login";
import Footer from "./Footer";

const IndexPage = () => {
  const dispatch = useDispatch();
  const getStartState = useSelector((store) => store.getStart.getStartState);

  const handleGetStart = () => {
    dispatch(toggleGetStarted());
  };

  return (
    <div>
      {getStartState ? (
        <Login />
      ) : (
        <>
          {" "}
          <Header />
          <div className="relative ">
            <img src={BG_IMAGE} className="w-full h-auto object-cover" alt="" />
            <div className="absolute inset-0 bg-black opacity-60"></div>
            <div className="absolute inset-0 text-white flex justify-center items-center flex-col">
              <h1 className="text-5xl font-bold my-2">
                The biggest Indian hits. Ready to watch here{" "}
              </h1>
              <h1 className="text-5xl font-bold my-2">from ₹ 149.</h1>
              <p className="text-2xl my-2">Join Today. Cancel Anytime.</p>
              <p className="text-2xl my-2">
                Ready to watch? Get Started to create or restart your
                membership.
              </p>
              <button
                onClick={handleGetStart}
                className="mt-2 px-10 py-3 text-lg bg-red-600 rounded-sm cursor-pointer hover:bg-red-700"
              >
                Get Started
              </button>
            </div>
          </div>{" "}
        </>
      )}

      <Footer />
    </div>
  );
};

export default IndexPage;
