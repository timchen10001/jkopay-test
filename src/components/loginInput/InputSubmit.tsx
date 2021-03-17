import React, { InputHTMLAttributes } from "react";

type InputSubmitProps = InputHTMLAttributes<HTMLButtonElement> & {
  name: string;
  mt?: string;
  complementary?: InputHTMLAttributes<HTMLInputElement>;
};

export const InputSubmit: React.FC<InputSubmitProps> = ({
  name,
  mt,
  complementary,
  ...props
}) => {
  return (
    <div className="input__submit" style={{ marginTop: mt }}>
      <div className="input__submit__complementary">{complementary}</div>
      <button {...props} className="input__submit__button" type="submit">
        {name}
      </button>
    </div>
  );
};
