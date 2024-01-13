import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import UserView from "./UserView";
import Oferta from "./Oferta";
import TablaSeveral from "./TablaSeveral";
import TablaCliente from "./TablaCliente";

const Main = () => {
  // const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});
  return (
    <>
      <main>
        <Routes>
          <Route path="/profile" element={<UserView />} />
          <Route path="/home" element={<TablaSeveral />} />
        </Routes>
      </main>
    </>
  );
};

export default Main;
