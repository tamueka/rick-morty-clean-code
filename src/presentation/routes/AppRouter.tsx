import styled from "@emotion/styled";
import React from "react";
import { useRoutes } from "react-router-dom";
import Spinner from "../components/Spinner";
import { characterContext } from "../context/CharacterContext";
import { routes } from "./routes";

const AppRouter: React.FC = () => {
  const { characters } = characterContext();
  const isLoading = characters.length === 0;

  return (
    <StyledSuspense
      fallback={
        <SpinnerContainer>
          <Spinner size={60} color="red" isLoading={isLoading} />
        </SpinnerContainer>
      }
    >
      {useRoutes(routes)}
    </StyledSuspense>
  );
};

const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const StyledSuspense = ({
  children,
  fallback,
}: {
  children: React.ReactNode;
  fallback: React.ReactNode;
}) => (
  <div>
    <React.Suspense fallback={fallback}>{children}</React.Suspense>
  </div>
);

export default AppRouter;
