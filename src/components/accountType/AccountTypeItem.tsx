import React, { InputHTMLAttributes } from "react";
import thick from "../../Assets/tick.svg";
import "../../styles/AccountType.css";

export type AccountTypeItemProps = InputHTMLAttributes<HTMLInputElement> & {
  avator: string;
  name: string;
  selected: boolean;
  error: boolean;
};

export const AccountTypeItem: React.FC<AccountTypeItemProps> = ({
  avator,
  name,
  selected,
  error,
  ...props
}) => {
  let className = "account__type__item";

  switch (true) {
    case selected:
      className += " selected";
      break;
    case error:
      className += " error";
  }
  return (
    <div {...props} className={className}>
      <img src={avator} alt={name} className="account__type__item__avator" />
      <p style={{ fontSize: "small" }}>{name}</p>
      {!selected ? null : (
        <img className="thick__icon" src={thick} alt={`thick icon`} />
      )}
    </div>
  );
};
