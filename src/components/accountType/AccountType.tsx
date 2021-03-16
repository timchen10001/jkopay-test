import "./AccountType.css";
import React, { useState } from "react";
import { AccountTypeItem, AccountTypeItemProps } from "./AccountTypeItem";
import useRWD from "../../hooks/useRWD";
import { accountTypeInfo } from "../../types";

interface AccountTypeProps {
  title: string;
  accountTypes: accountTypeInfo[];
}

export const AccountType: React.FC<AccountTypeProps> = ({
  title,
  accountTypes,
}) => {
  const [select, setSelect] = useState(-1);
  // const device = useRWD();

  return (
    <div className="account__type">
      <h3 className="account__type__title">{title}</h3>
      <ul className="account__type__list__item">
        {accountTypes.map((accountType, index) => (
          <AccountTypeItem
            {...accountType}
            key={`account-type-${index}`}
            selected={select === index}
            onClick={() => {
              if (select === index) {
                setSelect(-1);
              } else {
                setSelect(index);
              }
            }}
          />
        ))}
      </ul>
      {select === -1 ? null : (
        <p>{`Hello ${accountTypes[
          select
        ].name.toLowerCase()}! Please fill out the form below to get started`}</p>
      )}
    </div>
  );
};
