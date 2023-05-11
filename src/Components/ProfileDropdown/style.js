import { textStyles } from "../../utils/textStyles";

const style = {
  main: (sx) => ({
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    ...sx,
  }),
  details: {
    display: { xs: "none", sm: "block" },
    flexGrow: 1,
    mx: "10px",
  },
  name: { color: "#FFFFFF", ...textStyles.inter2 },
  designation: {
    mt: "1px",
    color: "#FFFFFF",
    opacity: 0.5,
    ...textStyles.inter1,
  },
};

export default style;
