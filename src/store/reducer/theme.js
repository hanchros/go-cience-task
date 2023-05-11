import { SET_THEME_REDUX } from "../types";
import { getThemeType, getTheme, setThemeType } from "../../themes";

const data = getTheme(getThemeType());

const themeReducer = (state = data, action) => {
  const payload = action.payload;

  switch (action.type) {
    case SET_THEME_REDUX:
      let theme = getTheme(payload);
      setThemeType(theme.type);
      return theme;

    default:
      return state;
  }
};

export default themeReducer;
