import React from "react";
import { Route, Routes, Navigate } from "react-router-dom"
import Login from "./Login";
import Home from "./Home";


const Main = () => {
  return (
    <>
    <main>
    <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </main>
    </>
  )
};

export default Main;
