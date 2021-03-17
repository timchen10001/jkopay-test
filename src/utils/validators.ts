import { FieldError, StateValue } from "../types";

export const validators = (
  input: StateValue,
  handleError: (fe: FieldError) => void
) => {
  console.log({
    input
  })
  handleError({ field: "username", message: "hi" })
};

export const CheckUserName = (username: string): FieldError | null => {
  if (!username.length) {
    return {
      field: "username",
      message: "不可留空",
    };
  }
  return null;
};

export const CheckPassword = (password: string) => {
  if (!password.length) {
    return {
      field: "password",
      message: "不可留空",
    };
  }
};
