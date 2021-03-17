import React, { InputHTMLAttributes } from "react";

type InputFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  icon: string;
  name: string;
  selected: boolean;
  mt?: string;
  complementary?: InputHTMLAttributes<HTMLInputElement>;
  error: boolean;
};

export const InputField: React.FC<InputFieldProps> = ({
  icon,
  name,
  selected,
  mt,
  complementary,
  error,
  ...props
}) => {
  let className = "input__field";
  switch (true) {
    case selected:
      className += " selected";
      break;
    case error:
      className += " error";
  }
  return (
    <div className={className} style={{ marginTop: mt }}>
      <img src={icon} alt="" className="input__field__icon" />
      <input {...props} className="input__field__content" />
      <div className="input__field__complementary">{complementary}</div>
      {!selected ? null : <p className="input__field__label">{name}</p>}
    </div>
  );
};
