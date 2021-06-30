import * as React from 'react';

import styled from 'styled-components';

const StyledLabel = styled.label`
  font-weight: bold;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;

interface LabelProps extends React.HTMLProps<HTMLButtonElement> {}

const Label = React.memo<LabelProps>(({ children }) => <StyledLabel>{children}</StyledLabel>);

export default Label;
