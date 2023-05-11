import { textStyles } from "../../utils/textStyles";

const style = {
  main: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    p: { xs: "12px 10px 20px", md: "26px 10px 40px", lg: "52px 10px 79px" },
  },
  here: { ...textStyles.poppins1, color: "primary.dark", textAlign: "center" },
  childContainer: {
    backgroundColor: "secondary.background",
    p: { xs: "12px 12px 20px", md: "24px 25px 42px", lg: "48px 50px 85px" },
  },
};
export default style;
