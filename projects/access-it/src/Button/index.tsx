import * as React from "react";

import styled from "styled-components";

const StyledButton = styled.button`
  background-color: white;
  color: blue;
  width: 120px;
  height: 50px;
  border: 0;
  border-radius: 10px;

  &:hover {
  }

  &:focus {
  }

  &:active {
  }
`;

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {
  children: string;
}

const Button = React.memo<ButtonProps>(({ children, onClick, onKeyDown }) => {
  return (
    <StyledButton aria-label={children} onClick={onClick} onKeyDown={onKeyDown}>
      {children}
    </StyledButton>
  );
});

export default Button;
