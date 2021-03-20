import { FieldError } from "../types";

export const CheckAccountType = (accountType: string): FieldError | null => {
  if (accountType === "default") {
    return {
      field: "accountType",
      message: "請選擇 Account Type"
    };
  }
  return null;
};

export const CheckUserName = (username: string): FieldError | null => {
  if (!username.length) {
    return {
      field: "username",
      message: "請輸入使用者名稱"
    };
  }
  return null;
};

export const CheckPassword = (password: string): FieldError | null => {
  if (!password.length) {
    return {
      field: "password",
      message: "請輸入使用者密碼"
    };
  }
  return null;
};

export const CheckSuccessiveNumber = (
  a: string,
  b: string,
  successiveNumber: number
): FieldError | null => {
  if (a.length >= successiveNumber && b.length >= successiveNumber) {
    const hashTable: Record<string, boolean> = {};
    for (let i = 0; i <= a.length - successiveNumber; i++) {
      const slicedA = a.slice(i, i + successiveNumber);
      hashTable[slicedA] = true;
    }
    for (let i = 0; i <= b.length - successiveNumber; i++) {
      const slicedB = b.slice(i, i + successiveNumber);
      if (hashTable[slicedB]) {
        return {
          field: "password",
          message: `密碼的任意連續 ${successiveNumber} 碼，不可以和帳號的任意連續 ${successiveNumber} 碼重複。`
        };
      }
    }
  }
  return null;
};
