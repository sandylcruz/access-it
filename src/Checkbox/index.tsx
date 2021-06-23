import * as React from "react";
import { useState } from "react";

interface CheckboxProps {
  children: string;
}

const Checkbox = React.memo<CheckboxProps>(({ children }) => {
  const [ariaChecked, setAriaChecked] = useState(false);

  return (
    <div>
      <label htmlFor="vehicle1">label</label>
      <input type="checkbox"></input>
      {/* <span
        role="checkbox"
        aria-checked={ariaChecked}
        tabIndex={0}
        aria-labelledby={children}
      ></span>{" "}
      <label id="chk1-label" className="whatever">
        Remember my preferences
      </label> */}
    </div>
  );
});

export default Checkbox;
