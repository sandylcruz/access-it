import React from "react";

import { Checkbox } from "access-it";
import styled from "styled-components";

const CheckboxContainer = styled.div``;

const CheckboxSection = React.memo(() => {
  return (
    <CheckboxContainer id="checkbox">
      <h1>Checkbox</h1>
      <Checkbox>value</Checkbox>
    </CheckboxContainer>
  );
});

export default CheckboxSection;
