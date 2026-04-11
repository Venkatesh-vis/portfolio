import * as React from "react";

const Phone = (props) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm10 0H8v14h8z"
      fill="rgb(214 211 209)"
    />
    <path d="M13 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" fill="rgb(214 211 209)" />
  </svg>
);

export default Phone;
