import React from "react";
import styled from "styled-components";

interface ButtonProps {
  onClick?: () => void;
  isLoading?: boolean;
  children: React.ReactNode;
}

const StyledButton = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: #40e0d0;
  width: 100%;
  color: white;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Button: React.FC<ButtonProps> = ({ onClick, isLoading, children }) => (
  <StyledButton onClick={onClick} disabled={isLoading}>
    {isLoading ? <span className="spinner">Loading...</span> : children}
  </StyledButton>
);

export default Button;
