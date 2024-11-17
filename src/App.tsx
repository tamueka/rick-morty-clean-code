import React from "react";
import { BrowserRouter } from "react-router-dom";
import { RickAndMortyProvider } from "../src/presentation/context/RickAndMortyProvider";
import AppRouter from '../src/presentation/routes/AppRouter';

const App: React.FC = () => {
  return (
    <RickAndMortyProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </RickAndMortyProvider>
  );
};

export default App;
