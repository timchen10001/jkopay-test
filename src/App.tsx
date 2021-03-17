import React, { useState } from "react";
import doctorAvator from "./Assets/img_doctor_90@3x.svg";
import patientAvator from "./Assets/img_patient_90@3x.svg";
import bgImgTown from "./Assets/img_town_370x170@3x.svg";
import { AccountType } from "./components/accountType/AccountType";
import { BackgroundImage } from "./components/backgroundImage/BackgroundImage";
import { LoginInput } from "./components/loginInput/LoginInput";
import { useCancelError } from "./hooks/useCancelError";
import { useStateValue } from "./StateProvider";
import "./styles/App.css";
import { FieldError } from "./types";
import {
  CheckAccountType,
  CheckPassword,
  CheckUserName,
  CheckUserNamePassword,
} from "./utils/validators";

function App() {
  const [inputForm, dispatch] = useStateValue();
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
        } else if ((error = CheckUserNamePassword({
          username: inputForm.username,
          password: inputForm.password
        }))) {
          setFieldError(error);
          return;
        }
        
        console.log({
          inputForm
        })
      }}
    >
      <AccountType
        name="accountType"
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
          //   avator: patient,
          //   name: "Student",
          //   replacements: ["student"],
          // },
          // {
          //   avator: doctor,
          //   name: "Doctor",
          //   replacements: ["doctor"],
          // },
          // 增加其餘 頭像與資訊於此
        ]}
      />
      <LoginInput error={[fieldError, setFieldError]} />
      <BackgroundImage bgImage={bgImgTown} />
    </form>
  );
}

export default App;
