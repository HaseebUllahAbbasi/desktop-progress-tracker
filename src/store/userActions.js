import { LOGIN, LOGOUT } from "./userDefinedActions";

export const LoginUser = (_id, email, username) => async (dispatch) => {
  console.log("In the start of dispatch");
  const action = {
    type: LOGIN,
    payload: { _id, email, username },
  };
  dispatch(action);
};

export const LogoutUser = () => async (dispatch) => {
  const action = { type: LOGOUT };
  dispatch(action);
};
