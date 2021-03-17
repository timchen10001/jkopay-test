import { Action, StateValue } from "../types";

export const initialState = {
  accountType: "default",
  username: "",
  password: "",
};

export const actionTypes = {
  SET_ACCOUNT_TYPE: "SET_ACCOUNT_TYPE",
  SET_USERNAME: "SET_USERNAME",
  SET_PASSWORD: "SET_PASSWORD",
};

const reducer = (state: StateValue, action: Action) => {
  // console.log(action);

  switch (action.type) {
    case actionTypes.SET_ACCOUNT_TYPE:
      return {
        ...state,
        accountType: action.accountType,
      };
    case actionTypes.SET_USERNAME:
      return {
        ...state,
        username: action.username,
      };
    case actionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.password,
      };
    default:
      return state;
  }
};

export default reducer;
