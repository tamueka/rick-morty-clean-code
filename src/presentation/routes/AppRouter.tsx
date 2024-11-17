import React, { Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const AppWithProvider: React.FC = () => {
  const routing = useRoutes(routes);

  return <Suspense fallback={<div>Cargando...</div>}>{routing}</Suspense>;
};

export default AppWithProvider;
