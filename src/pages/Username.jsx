import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { enterUserName } from "../features/userNameSlice";

const Username = () => {
  const [userName, setUserName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = () => {
    dispatch(enterUserName(userName));
    navigate("/home");
  };

  return (
    <>
      <Navbar />

      <div className="mt-12 w-full flex justify-center items-center gap-4">
        <form onSubmit={handleSubmit} className="my-6 text-center">
          {userName.trim() ? (
            <input
              type="text"
              id="success"
              className="bg-green-300 border border-green-500 text-green-900  placeholder-green-700 text-xl rounded-lg focus:outline-none focus:ring-green-500 focus:border-green-500 block w-full p-3"
              placeholder="Enter Your Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          ) : (
            <input
              type="text"
              id="success"
              className="bg-red-300 border border-red-500 text-red-900 dark:text-red-400 placeholder-red-700 text-xl rounded-lg focus:outline-none focus:ring-red-500 focus:border-red-500 block w-full p-3"
              placeholder="Enter Your Username"
              onChange={(e) => setUserName(e.target.value)}
            />
          )}
          <button
            type="submit"
            disabled={!userName.trim()}
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 disabled:bg-purple-300 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 my-6 w-3/4">
            Ok
          </button>
        </form>
      </div>
    </>
  );
};

export default Username;