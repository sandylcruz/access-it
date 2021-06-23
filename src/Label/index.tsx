import * as React from "react";

import styled from "styled-components";

const StyledLabel = styled.label`
  font-weight: bold;
`;

const Label = React.memo(({ children }) => {
  return <StyledLabel>{children}</StyledLabel>;
});

export default Label;
