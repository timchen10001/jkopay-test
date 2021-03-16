import "../../styles/AccountType.css";
import thick from "../../Assets/tick.svg";
import React, { InputHTMLAttributes } from "react";

export type AccountTypeItemProps = InputHTMLAttributes<HTMLInputElement> & {
  avator: string;
  name: string;
  selected: boolean;
};

export const AccountTypeItem: React.FC<AccountTypeItemProps> = ({
  avator,
  name,
  selected,
  ...props
}) => {
  return (
    <div
      {...props}
      className={
        !selected ? `account__type__item` : `account__type__item selected`
      }
    >
      <img src={avator} alt={name} className="account__type__item__avator" />
      <p>{name}</p>
      {!selected ? null : (
        <img className="thick__icon" src={thick} alt={`thick icon`} />
      )}
    </div>
  );
};
