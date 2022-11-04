import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={10}
    height={10}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m9.667 1.273-.94-.94L5 4.06 1.273.333l-.94.94L4.06 5 .333 8.727l.94.94L5 5.94l3.727 3.727.94-.94L5.94 5l3.727-3.727Z"
      fill="#fff"
    />
  </svg>
)

export default SvgComponent
