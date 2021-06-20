import * as React from "react";

import styled from "styled-components";

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ kind }) => (kind === "basic" ? "white" : "#29614d")};
  font-size: 20px;
  color: ${({ kind }) => (kind === "basic" ? "#0e3431" : "white")};

  width: 120px;
  height: 50px;
  border: 1px solid #165549;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ kind }) =>
      kind === "basic" ? "#e2eeee" : "#1c4335"};
  }

  &:active {
    background-color: ${({ kind }) =>
      kind === "basic" ? "#dfecec" : "#143026"};
  }

  &:focus {
    background-color: ${({ kind }) =>
      kind === "basic" ? "#9ed6c3" : "#10261e"};

    box-shadow: ${({ kind }) =>
      kind === "basic" ? "#cfe3e3 0px 0px 0px 5px" : "#afd0d0 0px 0px 0px 5px"};

    &:active {
      background-color: ${({ kind }) =>
        kind === "basic" ? "#2C6853" : "#9ed6c3"};

      color: ${({ kind }) => (kind === "basic" ? "white" : "#0e3431")};
    }
  }
`;

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: string;
  kind: "basic" | "primary" | "secondary";
}

const Button = React.memo<ButtonProps>(
  ({ children, kind, onClick, onKeyDown }) => {
    return (
      <StyledButton
        aria-label={children}
        onClick={onClick}
        onKeyDown={onKeyDown}
        kind={kind}
      >
        {children}
      </StyledButton>
    );
  }
);

export default Button;
