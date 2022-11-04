export interface RadioProps extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
}

export interface RadioGroupProps extends React.ComponentPropsWithoutRef<"div"> {
  size?: "sm" | "md" | "lg";
  label: string;
  radioList: string[];
  checkedRadio?:string
}
