import React, { InputHTMLAttributes } from "react";

interface InputSubmitProps {
  name: string;
  mt?: string;
  complementary?: InputHTMLAttributes<HTMLInputElement>;
}

export const InputSubmit: React.FC<InputSubmitProps> = ({
  name,
  mt,
  complementary,
}) => {
  return (
    <div className="input__submit" style={{ marginTop: mt }}>
      <div className="input__submit__complementary">{complementary}</div>
      <button className="input__submit__button" type="submit">
        {name}
      </button>
    </div>
  );
};
