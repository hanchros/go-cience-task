import { light, dark } from ".";

export const getThemeType = () => localStorage.getItem("theme") || "light";
export const setThemeType = (type) => localStorage.setItem("theme", type);

let lightTheme = {
  type: "light",
  theme: light,
};
let darkTheme = {
  type: "dark",
  theme: dark,
};

export const getTheme = (type) => {
  switch (type) {
    case "light":
      return lightTheme;
    case "dark":
      return darkTheme;
    default:
      return lightTheme;
  }
};
