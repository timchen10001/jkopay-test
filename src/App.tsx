/*eslint no-cond-assign: ["error", "except-parens"]*/
import React, { useState } from "react";
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
  CheckUserName,
} from "./utils/validators";

function App() {
  const [inputForm] = useStateValue();
  const [fieldError, setFieldError] = useState<FieldError | null>(null);
  return (
    <form
      className="App"
      onSubmit={(e) => {
        e.preventDefault();
        let error: FieldError | null = null;
        if ((error = CheckAccountType(inputForm.accountType))) {
          setFieldError(error);
          return;
        } else if ((error = CheckUserName(inputForm.username))) {
          setFieldError(error);
          return;
        } else if ((error = CheckPassword(inputForm.password))) {
          setFieldError(error);
          return;
        } else if (
          (error = CheckSuccessiveNumber(
            inputForm.username,
            inputForm.password,
            6
          ))
        ) {
          setFieldError(error);
          return;
        }
        // ... 進行其餘檢查

        alert(
          `通過輸入測試！\n類型：${inputForm.accountType}\n使用者名稱：${inputForm.username}\n密碼：${inputForm.password}`
        );
      }}
    >
      <AccountType
        title={"Choose Account Type"}
        description={{
          default: "Hello user! \n Select a account type to get started",
          withState: `Hello $1! \n Please fill out the form below to get started`,
        }}
        error={[fieldError, setFieldError]}
        types={[
          {
            avator: doctorAvator,
            name: "Doctor",
            replacements: ["doctor"],
          },
          {
            avator: patientAvator,
            name: "Patient",
            replacements: ["patient"],
          },
          // {
          //   avator: patientAvator,
          //   name: "Student",
          //   replacements: ["student"]
          // },
          // {
          //   avator: doctorAvator,
          //   name: "Doctor",
          //   replacements: ["doctor"]
          // }
          // 增加其餘 頭像與資訊於此
        ]}
      />
      <LoginInput error={[fieldError, setFieldError]} />
      <BackgroundImage bgImage={bgImgTown} />
    </form>
  );
}

export default App;
