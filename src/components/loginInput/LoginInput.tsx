import React, { useState } from "react";
import emailIcon from "../../Assets/email.svg";
import lockIcon from "../../Assets/padlock.svg";
import { useCancelFocus } from "../../hooks/useCancelFocus";
import { actionTypes } from "../../reducers/reducer";
import { useStateValue } from "../../StateProvider";
import "../../styles/LoginInput.css";
import { FieldError } from "../../types";
import { InputField } from "./InputField";
import { InputSubmit } from "./InputSubmit";

interface LoginInputProps {
  error: [
    FieldError | null,
    React.Dispatch<React.SetStateAction<FieldError | null>>
  ];
}

export const LoginInput: React.FC<LoginInputProps> = ({ error }) => {
  const [fieldError, setFieldError] = error;
  const [, dispatch] = useStateValue();
  const [select, setSelect] = useState<"username" | "password" | undefined>();

  useCancelFocus((e) => {
    if ((e.target as any).className !== "input__field__content") {
      setSelect(undefined);
    }
  });

  return (
    <div className="login__input" onChange={() => setFieldError(null)}>
      <InputField
        selected={select === "username"}
        icon={emailIcon}
        error={fieldError?.field === "username"}
        name="username"
        onFocus={() => setSelect("username")}
        onChange={(e) => {
          dispatch({
            type: actionTypes.SET_USERNAME,
            username: e.target.value,
          });
        }}
      />
      <InputField
        mt="1rem"
        selected={select === "password"}
        icon={lockIcon}
        error={fieldError?.field === "password"}
        name="password"
        type="password"
        onFocus={() => setSelect("password")}
        onChange={(e) => {
          dispatch({
            type: actionTypes.SET_PASSWORD,
            password: e.target.value,
          });
        }}
        complementary={<a href="#">Forgot?</a>}
      />

      <InputSubmit
        mt="1rem"
        name="Login"
        complementary={
          <p>
            No account? <a href="#">Signup</a>
          </p>
        }
      />
    </div>
  );
};
