import { textStyles } from "../../utils/textStyles";

const style = {
  main: {
    width: "100%",
    px: "20px",
  },
  tabs: {
    width: "100%",
    mx: "auto",
    borderBottom: "1px solid #E2E8F0",
    height: "75px",
    display: "flex",
    alignItems: "center",
  },
  tab: (match) => ({
    ...textStyles.poppins7,
    px: { xs: "10px", sm: "15px" },
    borderBottom: "1px solid",
    height: "100%",
    borderColor: match ? "#3076FF" : "transparent",
    color: match ? "#3076FF" : "#64748B",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    position: "relative",
    top: "1px",
    width: { xs: "40%", sm: "auto" },
  }),
};
export default style;
