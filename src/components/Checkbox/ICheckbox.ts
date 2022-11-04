export interface CheckboxProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  onChange?:(e)=>void
}
