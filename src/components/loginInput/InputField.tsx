import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: string;
  name: string;
  selected: boolean;
  mt?: string;
  complementary?: InputHTMLAttributes<HTMLInputElement>;
};

export const InputField: React.FC<InputFieldProps> = ({
  icon,
  name,
  selected,
  mt,
  complementary,
  ...props
}) => {
  return (
    <div
      className={selected ? "input__field selected" : "input__field"}
      style={{ marginTop: mt }}
    >
      <img src={icon} alt="" className="input__field__icon" />
      <input {...props} className="input__field__content" />
      <div className="input__field__complementary">{complementary}</div>
      {!selected ? null : <p className="input__field__label">{name}</p>}
    </div>
  );
};
