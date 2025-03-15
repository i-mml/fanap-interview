import { InputHTMLAttributes, TextareaHTMLAttributes } from "react";

export type BaseProps = {
  label: string;
  className?: string;
};

export type InputProps = BaseProps & InputHTMLAttributes<HTMLInputElement>;

export type TextareaProps = BaseProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export type SelectProps = BaseProps & {
  options: string[];
  value: string;
  onChange: (value: string) => void;
};
