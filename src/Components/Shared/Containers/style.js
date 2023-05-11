const style = {
  main: (sx) => ({
    minHeight: "calc(100vh - 60px)",
    width: "100%",
    background: "#D9D9D9",
    ...sx,
  }),
  container: {
    width: "100%",
    maxWidth: "1260px",
    mx: "auto",

    px: "25px",
  },
  child: (sx) => ({
    width: "100%",
    background: "#fff",
    borderRadius: "10px",
    ...sx,
  }),
};

export default style;
