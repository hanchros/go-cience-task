import Fade from "@mui/material/Fade";
import Snackbar from "@mui/material/Snackbar";
import { useDispatch } from "react-redux";
import * as React from "react";
import { emptyAlertRedux } from "../../../store/action";

const Alert = ({ alert }) => {
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(emptyAlertRedux());
  };

  let { message, type } = alert;

  const open = React.useMemo(() => !!message, [alert]);

  React.useEffect(() => {
    if (message) {
      setTimeout(() => handleClose(), 4000);
    }
  }, [message]);

  return (
    <div>
      <Snackbar
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        message={message}
        sx={{
          "& .css-1mf87-MuiPaper-root-MuiSnackbarContent-root": {
            backgroundColor: `${[type]}.main`,
          },
        }}
      />
    </div>
  );
};

export default Alert;
