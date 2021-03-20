import React, { useState } from "react";
import emailIcon from "../../Assets/email.svg";
import lockIcon from "../../Assets/padlock.svg";
import { useCancelFocus } from "../../hooks/useCancelFocus";
import { actionTypes } from "../../reducers/reducer";
import { useStateValue } from "../../StateProvider";
import "../../styles/LoginInput.css";
import { InputField } from "./InputField";
import { InputSubmit } from "./InputSubmit";

interface LoginInputProps {}

export const LoginInput: React.FC<LoginInputProps> = () => {
  // const [fieldError, setFieldError] = error;
  const [{ fieldError }, dispatch] = useStateValue();
  const [select, setSelect] = useState<"username" | "password" | undefined>();

  useCancelFocus((e) => {
    if ((e.target as any).className !== "input__field__content") {
      setSelect(undefined);
    }
  });

  return (
    <div
      className="login__input"
      onChange={() => dispatch({ type: "SET_FIELD_ERROR", fieldError: null })}
    >
      <InputField
        selected={select === "username"}
        icon={emailIcon}
        error={fieldError?.field === "username"}
        name="username"
        placeholder="Username"
        autoComplete="username"
        onFocus={() => setSelect("username")}
        onChange={(e) => {
          dispatch({
            type: actionTypes.SET_USERNAME,
            username: e.target.value
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
        autoComplete="current-password"
        placeholder="Password"
        onFocus={() => setSelect("password")}
        onChange={(e) => {
          dispatch({
            type: actionTypes.SET_PASSWORD,
            password: e.target.value
          });
        }}
        complementary={<a href="#">Forgot?</a>}
      />

      <InputSubmit
        mt="1.45rem"
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
