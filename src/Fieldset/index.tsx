import * as React from "react";
import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  display: flex;
  align-items: center;
  border: none;
`;

const Fieldset = React.memo(({ children }) => {
  return <StyledFieldset>{children}</StyledFieldset>;
});

export default Fieldset;
