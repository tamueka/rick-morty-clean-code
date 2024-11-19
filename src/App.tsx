import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "../src/presentation/routes/AppRouter";
import { CharacterProvider } from "./presentation/context/Character.Provider";

const App: React.FC = () => {
  return (
    <CharacterProvider>
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <AppRouter />
      </BrowserRouter>
    </CharacterProvider>
  );
};

export default App;
