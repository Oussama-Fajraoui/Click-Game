import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Result from "../pages/Result";
import TopScores from "../pages/TopScores";
import Username from "../pages/Username";
import PrivateRouter from "./PrivateRouter";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Username />} />
        <Route path="/home" element={<PrivateRouter />}>
          <Route path="" element={<Home />} />
        </Route>
        <Route path="/result" element={<PrivateRouter />}>
          <Route path="" element={<Result />} />
        </Route>
        <Route path="/topscores" element={<PrivateRouter />}>
          <Route path="" element={<TopScores />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default AppRouter;