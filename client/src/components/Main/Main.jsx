import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom"
import Login from "./Login";
import Home from "./Home";
import Metodo from "./Metodo";
import CargaDatos from "./CargaDatos";
import UserView from "./UserView";
import Oferta from "./Oferta";
import { UserContext } from "../../context/UserContext"
import { useNavigate } from "react-router-dom";

const Main = () => {
  const navigate = useNavigate()

  const { user } = useContext(UserContext);

  const noPermitirAcceso = () => {
    navigate(`/`)
  }

  return (
    <>
      <main>

        <Routes>
          <Route path="/" element={<Login />} />

          {user ? <Route path="/metodo" element={<Metodo />} /> : noPermitirAcceso}
          {user ? <Route path="/carga" element={<CargaDatos />} /> : noPermitirAcceso}
          {user ? <Route path="/home" element={<Home />} /> : noPermitirAcceso}
          {user ? <Route path="/profile" element={<UserView />} /> : noPermitirAcceso}
          {user ? <Route path="/pdf" element={<Oferta />} /> : noPermitirAcceso}
          <Route path="/*" element={<Navigate to={"/"} />} />
        </Routes>

      </main>

    </>
  );
};

export default Main;
