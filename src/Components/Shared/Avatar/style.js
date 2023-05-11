import { textStyles } from "../../../utils/textStyles";

const style = {
  main: ({ profilePic, background, sx, size }) => ({
    minWidth: size,
    height: size,
    borderRadius: "100%",
    background: !profilePic && background,
    overflow: "hidden",
    ...sx,
  }),
  image: { borderRadius: "100%", width: "100%", height: "100%" },
  name: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    color: "#fff",
    ...textStyles.inter4,
  },
};
export default style;
