import { FieldError } from "../types";

export const CheckAccountType = (accountType: string): FieldError | null => {
  if (accountType === "default") {
    return {
      field: "accountType",
      message: "不可留空",
    };
  }
  return null;
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

export const CheckPassword = (password: string): FieldError | null => {
  if (!password.length) {
    return {
      field: "password",
      message: "不可留空",
    };
  }
  return null;
};

export const CheckUserNamePassword = (input: {
  username: string;
  password: string;
}): FieldError | null => {
  const hashTable: Record<string, boolean> = {};
  if (input.username.length >= 6) {
    for (let i = 0; i <= input.username.length - 6; i++) {
      const splitUsername = input.username.slice(i, i + 6);
      hashTable[splitUsername] = true;
    }
    for (let i = 0; i <= input.password.length - 6; i++) {
      const splitPassword = input.password.slice(i, i + 6);
      if (hashTable[splitPassword]) {
        return {
          field: "password",
          message: "密碼的任意連續 6 碼，不可以和帳號的任意連續 6 碼重複。",
        };
      }
    }
  }
  return null;
};
