export type accountTypeInfo = {
  avator: string;
  name: string;
  replacements: string[];
};

export type accountTypeDescriptionProps = {
  default: string;
  withState: string;
};

export type StateValue = {
  accountType: string;
  username: string;
  password: string;
};


export type StateProvider = {
  initialState: StateValue;
}

export type Action = {
  type: "SET_ACCOUNT_TYPE" | "SET_USERNAME" | "SET_PASSWORD" | string;
  actionType: "SET_ACCOUNT_TYPE" | "SET_USERNAME" | "SET_PASSWORD" | string;
}