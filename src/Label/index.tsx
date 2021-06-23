import * as React from "react";

import styled from "styled-components";

const StyledLabel = styled.label`
  font-weight: bold;
  user-select: none;
  cursor: pointer;
`;

interface LabelProps extends React.HTMLProps<HTMLButtonElement> {
  children: string;
}

const Label = React.memo<LabelProps>(({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
});

export default Label;
