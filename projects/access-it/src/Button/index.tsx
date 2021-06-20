import * as React from "react";

import styled from "styled-components";

const StyledButton = styled.button<ButtonProps>`
  background-color: ${({ kind }) =>
    kind === "basic"
      ? "white"
      : kind === "primary"
      ? "#29614d"
      : "transparent"};
  font-size: 20px;
  color: ${({ kind }) =>
    kind === "basic" ? "#0e3431" : kind === "primary" ? "white" : "#29614d"};

  width: 120px;
  height: 50px;
  border: ${({ kind }) =>
    kind === "secondary" ? "transparent" : "1px solid #165549"};
  border-radius: 6px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: ${({ kind }) =>
      kind === "basic"
        ? "#e2eeee"
        : kind === "primary"
        ? "#1c4335"
        : "#e2eeee"};
  }

  &:active {
    background-color: ${({ kind }) =>
      kind === "primary" ? "143026" : "#dfecec"};
  }

  &:focus {
    background-color: ${({ kind }) =>
      kind === "primary" ? "#10261e" : "#9ed6c3"};

    box-shadow: ${({ kind }) =>
      kind === "primary"
        ? "#afd0d0 0px 0px 0px 5px"
        : "#cfe3e3 0px 0px 0px 5px"};

    &:active {
      background-color: ${({ kind }) =>
        kind === "primary" ? "#9ed6c3" : "#2C6853"};

      color: ${({ kind }) => (kind === "primary" ? "#0e3431" : "white")};
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
