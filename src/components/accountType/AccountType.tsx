import React, { InputHTMLAttributes, useState } from "react";
import useRWD from "../../hooks/useRWD";
import { actionTypes } from "../../reducers/reducer";
import { useStateValue } from "../../StateProvider";
import "../../styles/AccountType.css";
import { accountTypeDescriptionProps, accountTypeInfo } from "../../types";
import { AccountDescription } from "./AccountDescription";
import { AccountTypeItem } from "./AccountTypeItem";

type AccountTypeProps = InputHTMLAttributes<HTMLInputElement> & {
  name?: string;
  title: string;
  types: accountTypeInfo[];
  description: accountTypeDescriptionProps;
};

export const AccountType: React.FC<AccountTypeProps> = ({
  title,
  description,
  types,
  size: _
}) => {
  const [{ fieldError }, dispatch] = useStateValue();
  const [select, setSelect] = useState(-1);
  const device = useRWD();
  const isMobile = device === "mobile";
  const isNotSelected = select === -1;

  return (
    <div className="account__type">
      <h3 className="account__type__title">{title}</h3>
      <ul
        className="account__type__list__item"
        style={{ cursor: isMobile ? "none" : "pointer" }}
        onClick={() => dispatch({ type: "SET_FIELD_ERROR", fieldError: null })}
      >
        {types.map((type, index) => (
          <AccountTypeItem
            {...type}
            key={`account-type-${index}`}
            selected={select === index}
            error={fieldError?.field === "accountType"}
            onClick={() => {
              let accountType: string;
              if (select === index) {
                setSelect(-1);
                accountType = "default";
              } else {
                setSelect(index);
                accountType = types[index].name;
              }
              dispatch({
                type: actionTypes.SET_ACCOUNT_TYPE,
                accountType
              });
            }}
          />
        ))}
      </ul>
      <p className="account__type__list__description">
        {fieldError?.field ? (
          <span style={{ color: "#F12A29" }}>{fieldError?.message}</span>
        ) : (
          <AccountDescription
            description={
              isNotSelected ? description.default : description.withState
            }
            replacements={isNotSelected ? [] : types[select].replacements}
          />
        )}
      </p>
    </div>
  );
};
