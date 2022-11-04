import { CheckboxProps } from "./ICheckbox";

function Checkbox({ label = "", ...props }: CheckboxProps): JSX.Element {
  return (
      <label className="storybook-checkbox" >
        <input type="checkbox" value={label} {...props} />
        {label}
      </label>
  );
}

export default Checkbox;
