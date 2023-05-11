const style = {
  nav: {
    px: "25px",
    background:
      "linear-gradient(to right, #032E9B 20%, #2551C2, #3076FF, #1e4bbb)",
  },
  main: {
    width: "100%",
    minHeight: "60px",
    maxWidth: (theme) => theme.breakpoints.values.xl,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    mx: "auto",
  },
  section1: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
  },
  logo: {
    ml: "25px",
    width: { xs: "99px", sm: "197.31px" },
    height: { xs: "22px", sm: "44px" },
    cursor: "pointer",
  },
  section2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

export default style;
