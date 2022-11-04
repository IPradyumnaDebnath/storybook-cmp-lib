import { RadioProps } from "./IRadio";

const RadioButton = ({ label = "", ...props }: RadioProps): JSX.Element => (
  <div>
    <label className="flex items-center gap-x-2">
      <input type="radio" {...props} />
      {label}
    </label>
  </div>
);

export default RadioButton;
