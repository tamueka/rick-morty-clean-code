import React from "react";
import { Route, Routes } from "react-router-dom";
import  CharacterList  from "../pages/CharacterList";
import  CharacterDetail  from "../pages/CharacterDetail";


const AppWithProvider = () => (
  <Routes>
    <Route path="/" element={<CharacterList />} />
    <Route path="/detail/:id" element={<CharacterDetail />} />
  </Routes>
);

export default AppWithProvider;
