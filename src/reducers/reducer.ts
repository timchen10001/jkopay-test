import { IAction, IStateValue } from "../types";

export const initialState: IStateValue = {
  accountType: "default",
  username: "",
  password: "",
  fieldError: null
};

export enum actionTypes {
  SET_ACCOUNT_TYPE = "SET_ACCOUNT_TYPE",
  SET_USERNAME = "SET_USERNAME",
  SET_PASSWORD = "SET_PASSWORD",
  SET_FIELD_ERROR = "SET_FIELD_ERROR"
}

const reducer = (state: IStateValue, action: IAction): IStateValue => {
  // console.log(action);

  switch (action.type) {
    case actionTypes.SET_ACCOUNT_TYPE:
      return {
        ...state,
        accountType: action.accountType
      };
    case actionTypes.SET_USERNAME:
      return {
        ...state,
        username: action.username
      };
    case actionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.password
      };
    case actionTypes.SET_FIELD_ERROR:
      return {
        ...state,
        fieldError: action.fieldError
      };
    default:
      return state;
  }
};

export default reducer;
