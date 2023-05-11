import { textStyles } from "../../../utils/textStyles";

const style = {
  inputContainer: (isLightTheme) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    width: "100%",
    height: "35px",
    border: "solid",
    borderWidth: "1px",
    borderColor: isLightTheme ? "secondary.divider" : 'secondary.date',
    borderRadius: "5px",
    color: "secondary.date",
  }),
  input: {
    color: 'secondary.date',
    backgroundColor: 'inherit',
    borderRadius: "inherit",
    flexGrow: 1,
    height: "100%",
    border: 0,
    outline: "none",
    p: "10px",
    ...textStyles.inter3,
  },
};

export default style;
