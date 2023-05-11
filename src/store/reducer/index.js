import { combineReducers } from "redux";

import alert from "./alert";
import theme from "./theme";
import quillData from "./quillData";
const rootReducer = combineReducers({
  alert,
  theme,
  quillData
});

export default rootReducer;
