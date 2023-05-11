import { textStyles } from "../../../utils/textStyles";

const style = (disabled, sx) => ({
  cursor: disabled ? "not-allowed" : "pointer",
  textTransform: "unset",
  height: "35px",
  p: 0,
  width: "100%",
  ...textStyles.inter2,
  ...sx,
  color: '#fff'
});
export default style;
