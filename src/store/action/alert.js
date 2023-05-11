import { EMPTY_ALERT_REDUX, SET_ALERT_REDUX } from "../types";

export const setAlertRedux = (payload) => ({
  type: SET_ALERT_REDUX,
  payload,
});
export const emptyAlertRedux = () => ({
  type: EMPTY_ALERT_REDUX,
});
