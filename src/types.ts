export type accountTypeInfo = {
  avator: string;
  name: string;
  replacements: string[];
};

export type accountTypeDescriptionProps = {
  default: string;
  withState: string;
};

export type StateProvider = {
  initialState: IStateValue;
};

export interface IStateValue {
  accountType: string;
  username: string;
  password: string;
  fieldError: FieldError | null;
}

export interface IAction extends IStateValue {
  type:
    | "SET_ACCOUNT_TYPE"
    | "SET_USERNAME"
    | "SET_PASSWORD"
    | "SET_FIELD_ERROR";
}

export type FieldError = {
  field: string;
  message: string;
};
