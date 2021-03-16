import React from "react";
import { accountTypeDescription } from "../../utils/accountTypeDescription";

interface AccountDescriptionProps {
  description: string;
  replacements: string[];
}

export const AccountDescription: React.FC<AccountDescriptionProps> = ({
  description,
  replacements,
}) => {
  return (
    <>
      {accountTypeDescription(description, replacements).map((span, idx) => (
        <span key={`accountTypeDescription-${idx}`}>
          {span} <br />
        </span>
      ))}
    </>
  );
};
