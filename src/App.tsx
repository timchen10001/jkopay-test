import doctor from "./Assets/img_doctor_90@3x.svg";
import patient from "./Assets/img_patient_90@3x.svg";
import { AccountType } from "./components/accountType/AccountType";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <div>你好</div>
      <AccountType
        title={"Choose Account Type"}
        accountTypes={[
          {
            avator: doctor,
            name: "Doctor",
          },
          {
            avator: patient,
            name: "Patient",
          },
          // { avator: patient, name: "Patient" },
          // { avator: patient, name: "Patient" },
          // 增加其餘 頭像與資訊於此
        ]}
      />
    </div>
  );
}

export default App;
