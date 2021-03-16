import React from "react";
import doctorAvator from "./Assets/img_doctor_90@3x.svg";
import patientAvator from "./Assets/img_patient_90@3x.svg";
import bgImgTown from "./Assets/img_town_370x170@3x.svg";
import { AccountType } from "./components/accountType/AccountType";
import { BackgroundImage } from "./components/backgroundImage/BackgroundImage";
import { LoginInput } from "./components/loginInput/LoginInput";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <AccountType
        name="accountType"
        title={"Choose Account Type"}
        description={{
          default: "Hello user! \n Select a account type to get started",
          withState: `Hello $1! \n Please fill out the form below to get started`,
        }}
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
      <LoginInput />
      <BackgroundImage bgImage={bgImgTown}/>
    </div>
  );
}

export default App;
