import { ThemeProvider } from "@mui/material/styles";
import { useSelector } from "react-redux";
import Alert from "./Components/Shared/Alert";
import Routes from "./Routes";

function App() {
  const alert = useSelector((state) => state.alert);
  const { theme } = useSelector((state) => state.theme);

  return (
    <ThemeProvider theme={theme}>
      <Alert alert={alert} />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
