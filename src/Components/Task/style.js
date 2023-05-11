import { textStyles } from "../../utils/textStyles";

const style = {
  due: {
    ...textStyles.poppins3,
    mb: { xs: "10px", sm: "20px", lg: "40px" },
    color: "secondary.heading",
  },
  divider: {
    backgroundColor: "secondary.divider",
    height: "1px",
  },
  main: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    p: { xs: "10px 0px 18px", sm: "21px 0px 37px", lg: "42px 0px 75px" },
  },
  sub: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
  },
  addedBy: {
    minWidth: { xs: "100px", sm: "128px", lg: "257px" },
    textTransform: "uppercase",
    ...textStyles.poppins4,
    color: "secondary.heading",
    mb: { xs: 2, md: 0 },
  },
  name: {
    color: "secondary.heading",
    ...textStyles.poppins4,
    fontWeight: "600",
    cursor: "pointer",
    mb: { xs: 2, md: "21px" },
  },
  checkbox: {
    mb: { xs: 2, md: 0 },
  },
  label: {
    color: "secondary.heading",
    ...textStyles.poppins6,
    mr: "20px",
  },
  assignedTo: {
    mr: "20px",
    display: "flex",
    alignItems: "center",

    mb: { xs: 2, md: 0 },
  },
  text: { color: "#64748B", ...textStyles.poppins6 },
  whenDone: {
    display: "flex",
    alignItems: "center",

    mb: { xs: 2, md: 0 },
  },
};
export default style;
