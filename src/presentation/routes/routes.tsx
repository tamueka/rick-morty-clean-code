import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const CharacterList = lazy(
  () => import("../../../src/presentation/pages/CharacterList")
);
const CharacterDetail = lazy(
  () => import("../../../src/presentation/pages/CharacterDetail")
);

export const routes: RouteObject[] = [
  { path: "/", element: <CharacterList /> },
  { path: "/detail/:id", element: <CharacterDetail /> },
];
