import { ButtonProps } from "./IButton";

import "./style.css";

const Button = ({
  label = "",
  variant = "primary",
  children,
  ...props
}: ButtonProps): JSX.Element => (
  <button
    className={`storybook-button-container ${variant}`}
    type="button"
    {...props}
  >
    {children}
    <span className="label">
    {label}
    </span>
  </button>
);
export default Button;
