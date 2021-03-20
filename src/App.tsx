/*eslint no-cond-assign: ["error", "except-parens"]*/
import React from "react";
import doctorAvator from "./Assets/img_doctor_90@3x.svg";
import patientAvator from "./Assets/img_patient_90@3x.svg";
import bgImgTown from "./Assets/img_town_370x170@3x.svg";
import { AccountType } from "./components/accountType/AccountType";
import { BackgroundImage } from "./components/backgroundImage/BackgroundImage";
import { LoginInput } from "./components/loginInput/LoginInput";
import { useStateValue } from "./StateProvider";
import "./styles/App.css";
import { FieldError } from "./types";
import {
  CheckAccountType,
  CheckPassword,
  CheckSuccessiveNumber,
  CheckUserName
} from "./utils/validators";

function App() {
  const [inputForm, dispatch] = useStateValue();
  return (
    <form
      className="App"
      onSubmit={(e) => {
        e.preventDefault();
        let fieldError: FieldError | null = null;
        switch (true) {
          case !!(fieldError = CheckAccountType(inputForm.accountType)):
            break;
          case !!(fieldError = CheckUserName(inputForm.username)):
            break;
          case !!(fieldError = CheckPassword(inputForm.password)):
            break;
          case !!(fieldError = CheckSuccessiveNumber(
            inputForm.username,
            inputForm.password,
            6
          )):
            break;
          // ... 進行其餘檢查
        }
        if (fieldError) {
          return dispatch({
            type: "SET_FIELD_ERROR",
            fieldError
          });
        }

        alert(
          `通過輸入測試！\n類型：${inputForm.accountType}\n使用者名稱：${inputForm.username}\n密碼：${inputForm.password}`
        );
      }}
    >
      <AccountType
        title={"Choose Account Type"}
        description={{
          default: "Hello user! \n Select a account type to get started",
          withState: `Hello $1! \n Please fill out the form below to get started`
        }}
        types={[
          {
            avator: doctorAvator,
            name: "Doctor",
            replacements: ["doctor"]
          },
          {
            avator: patientAvator,
            name: "Patient",
            replacements: ["patient"]
          }
          // {
          //   avator: patientAvator,
          //   name: "Student",
          //   replacements: ["student"]
          // }
          // {
          //   avator: doctorAvator,
          //   name: "Doctor",
          //   replacements: ["doctor"]
          // }
          // 增加其餘 頭像與資訊於此
        ]}
      />
      <LoginInput />
      <BackgroundImage bgImage={bgImgTown} />
    </form>
  );
}

export default App;
