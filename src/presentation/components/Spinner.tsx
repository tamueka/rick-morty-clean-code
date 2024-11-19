import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import React from "react";

interface SpinnerProps {
  size?: number;
  color?: string;
  isLoading: boolean;
}

const Spinner: React.FC<SpinnerProps> = ({ size, color }) => {
  return <SpinnerStyles size={size} color={color} />;
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerStyles = styled.div<{ size?: number; color?: string }>`
  display: inline-block;
  width: ${(props) => props.size || 50}px;
  height: ${(props) => props.size || 50}px;
  border: 4px solid ${(props) => props.color || "#3498db"};
  border-radius: 50%;
  border-color: ${(props) => props.color || "#3498db"} transparent transparent
    transparent;
  animation: ${spin} 1.2s linear infinite;
`;

export default Spinner;
