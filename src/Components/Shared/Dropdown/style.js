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
    p: "10px",
  }),
  value: {
    flexGrow: 1,
    ...textStyles.inter3,
    color: "secondary.date",
  },

  icon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderLeft: "1px solid",
    color: "#E2E8F0",
    borderColor: "#E2E8F0",
    pl: "10px",
  },
};

export default style;
