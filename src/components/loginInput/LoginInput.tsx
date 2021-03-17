import "../../styles/LoginInput.css";
import React, { useState } from "react";
import emailIcon from "../../Assets/email.svg";
import lockIcon from "../../Assets/padlock.svg";
import { useCancelFocus } from "../../hooks/useCancelFocus";
import { actionTypes } from "../../reducers/reducer";
import { useStateValue } from "../../StateProvider";
import { InputField } from "./InputField";
import { InputSubmit } from "./InputSubmit";
import { validators } from "../../utils/validators";
import { FieldError } from "../../types";

interface LoginInputProps {}

export const LoginInput: React.FC<LoginInputProps> = () => {
  const [data, dispatch] = useStateValue();
  const [fieldError, setFieldError] = useState<FieldError>();
  const [select, setSelect] = useState<"username" | "password" | undefined>();

  useCancelFocus((e) => {
    if ((e.target as any).className !== "input__field__content") {
      setSelect(undefined);
    }
  });

  return (
    <form className="login__input" onSubmit={e => {
      e.preventDefault();
      validators(data, (fieldError) => {
        setFieldError(fieldError);
      });
      
    }} >
      <InputField
        selected={select === "username"}
        icon={emailIcon}
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
    </form>
  );
};
