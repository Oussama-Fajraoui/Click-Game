import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRouter = () => {
  const { currentUser } = useSelector((state) => state.userName);
  return (
    <div>
      {!currentUser?.payload ? <Navigate to="/" replace /> : <Outlet />}
    </div>
  );
};

export default PrivateRouter;