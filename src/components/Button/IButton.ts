import React from "react";
export interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  label?: string | JSX.Element;
  variant?:string
}
