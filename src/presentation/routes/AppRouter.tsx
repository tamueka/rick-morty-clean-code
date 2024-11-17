import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes"; // Importa las rutas definidas en el archivo routes.ts

const AppWithProvider: React.FC = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<div>Loading...</div>}>{routing}</Suspense>;
};

export default AppWithProvider;
