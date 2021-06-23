import React from "react";

import { Checkbox } from "access-it";

const CheckboxSection = React.memo(() => {
  return (
    <div>
      <h1>Checkbox</h1>
      <Checkbox>value</Checkbox>
    </div>
  );
});

export default CheckboxSection;
