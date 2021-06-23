import React from "react";

import styled from "styled-components";
import Button from "./ButtonSection";
import CheckboxSection from "./CheckboxSection";

const H1 = styled.h1`
  position: relative;
  font-weight: bold;
  margin-bottom: 24px;
  margin-top: ;
`;

const Components = React.memo(() => {
  return (
    <div>
      {" "}
      <H1>Components</H1>
      <Button />
      <CheckboxSection />
    </div>
  );
});

export default Components;
