import { textStyles } from "../../utils/textStyles";

const style = {
  subHeader: {
    width: "100%",
    p: { xs: "25px 0 11px", sm: "50px 0 22px", lg: "100px 0 44px" },
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  subHeaderCheck: { ...textStyles.poppins1, color: "primary.dark" },
  childMain: {
    p: {
      xs: "25px 12px 0px",
      sm: "50px 75px 0px",
      lg: "100px 150px 0px",
    },
  },
  divider: { height: "1px", backgroundColor: "secondary.divider", width: "100%" },
  commentParent: {
    p: {
      xs: "25px 12px 12px",
      sm: "50px 75px 23px",
      lg: "100px 150px 45px",
    },
  },
  commentMain: {
    borderBottom: "1px solid",
    borderColor: "secondary.divider",
    mb: { xs: "12px", sm: "25px", lg: "50px" },
    pb: { xs: "9px", sm: "18px", md: "36px" },
  },
  createdAt: {
    display: { xs: "none", sm: "block" },
    mr: "57px",
    mt: "15px",
    minWidth: "50px",
    ...textStyles.poppins2,
    color: 'secondary.date'
  },
  createdAt1: {
    display: { xs: "block", sm: "none" },
    mr: "57px",
    mt: "15px",
    minWidth: "50px",
    ...textStyles.poppins2,
  },
  comment: {
    display: { xs: "none", sm: "block" },
    flexGrow: 1,
    maxWidth: "700px",
    mr: "35px",
    ...textStyles.poppins6,
    color: 'secondary.heading'
  },
  comment1: {
    display: { xs: "block", sm: "none" },
    mb: 2,
    flexGrow: 1,
    maxWidth: "700px",
    mr: "35px",
    ...textStyles.poppins6,
  },
  imageParent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "end",

    pl: { xs: "0", sm: "45px", lg: "90px" },
    mb: { xs: "10px", sm: "18px", lg: "36px" },
  },
  imageBackground: {
    mb: "20px",
    // background: "#E2E8F0",
    width: "100%",
    height: { xs: "220px", sm: "280px", lg: "350px" },
    borderRadius: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "740px",
  },
  image: {
    maxWidth: '100%',
    maxHeight: '100%',
    width: 'auto',
    height: 'auto',
  },
  imagePreveiw: {
    width: "100px",
    height: "73px",
  },
  myComment: {
    pl: { xs: "0px", sm: "50px", lg: "99px" },
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "end",
  },
  avatar: { mr: "20px", maxWidth: "50px", mb: { xs: 1, sm: 0 } },
  reactQuill: { flexGrow: { xs: 0, sm: 1 }, maxWidth: "740px" },
  addComment: {
    display: "flex",
    justifyContent: "end",
    mt: "20px",
  },
  seletedImageTitle: {
    ...textStyles.poppins6, color: "primary.dark", marginBottom: '5px'
  },
  seletedImageContainer: {
    display: 'flex', flexDirection: 'column',
    alignItems: 'flex-end'
  }
};
export default style;
