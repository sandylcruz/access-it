import * as React from "react";

const Button = React.memo(({ children, onClick }) => {
  return <button onClick={onClick}>{children}</button>;
});

export default Button;
