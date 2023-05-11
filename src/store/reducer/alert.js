import { EMPTY_ALERT_REDUX, SET_ALERT_REDUX } from "../types";

const data = {
  message: "",
  type: "",
};

const authReducer = (state = data, action) => {
  const payload = action.payload;

  switch (action.type) {
    case SET_ALERT_REDUX:
      return { ...state, ...payload };

    case EMPTY_ALERT_REDUX:
      return { ...data };

    default:
      return state;
  }
};

export default authReducer;
