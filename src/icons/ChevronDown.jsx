import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={14}
    height={8}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1.963 1.107 5.056 5.664 5.134-5.594"
      stroke="#2F80ED"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
