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
      d="M12.14 6.76 7.032 1.142 1.95 6.782"
      stroke="#2F80ED"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default SvgComponent
