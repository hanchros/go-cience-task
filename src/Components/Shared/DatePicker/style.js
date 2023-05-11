import { textStyles } from "../../../utils/textStyles";

const style = {
  inputContainer: (isLightTheme) => ({
    display: "flex",
    alignItems: "center",

    width: "100%",
    height: "35px",
    border: "solid",
    borderWidth: "1px",
    borderColor: isLightTheme ? "secondary.divider" : 'secondary.date',

    borderRadius: "5px",
    p: "10px",
  }),
  value: {
    ...textStyles.inter3,
    color: "secondary.date",

  },
};

export default style;
