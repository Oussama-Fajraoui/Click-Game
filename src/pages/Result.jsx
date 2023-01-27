import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import useDataCall from "../hooks/useDataCall";

const Result = () => {
  const { currentUser } = useSelector((state) => state.userName);
  const navigate = useNavigate();
  const { addData } = useDataCall();
  const location = useLocation();
  const { clickCount, userSelectTime } = location?.state;
  const point = ((clickCount / userSelectTime) * 1.0022).toFixed(2);
  const info = {
    userName: currentUser?.payload || "guest",
    userSetTime: userSelectTime,
    userClickCount: clickCount,
    userPoint: point,
  };

  useEffect(() => {
    addData(info);
  }, []);

  return (
    <div className="text-white text-center h-screen flex justify-center items-center flex-col -mb-20 gap-3">
      <h1 className="text-3xl">Hey {currentUser?.payload} !!!</h1>
      <h1 className="text-4xl">Your Score is : {point}</h1>
      <button
        onClick={() => navigate("/home")}
        className="inline-block px-6 py-2 border-2 border-[#FFC18E] text-[#FFC18E] font-medium text-md leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">
        Try Again
      </button>
    </div>
  );
};

export default Result;