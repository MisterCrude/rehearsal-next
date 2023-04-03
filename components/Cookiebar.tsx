import { COOKIE_ACCEPTED } from "@/constants";
import { getItem, setItem } from "@/utils/localStorage";
import CookieIcon from "@mui/icons-material/Cookie";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { forwardRef, useEffect, useState } from "react";

interface CookiebarProps {
  message: string;
  buttonText?: string;
}

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return (
    <MuiAlert
      variant="filled"
      elevation={6}
      ref={ref}
      severity="info"
      sx={{ width: "100%", alignItems: "center" }}
      icon={<CookieIcon fontSize="inherit" />}
      {...props}
    />
  );
});

export default function Cookiebar({
  message,
  buttonText = "Ok, rozumiem",
}: CookiebarProps) {
  const [isVisible, setIsVisible] = useState(false);

  const handleClose = () => {
    console.log(1);
    setIsVisible(false);
    setItem<boolean>(COOKIE_ACCEPTED, true);
  };

  useEffect(() => {
    setIsVisible(!getItem<boolean>(COOKIE_ACCEPTED));
  }, []);

  return (
    <Snackbar open={isVisible}>
      <Alert>
        {message}
        <Button
          color="inherit"
          size="small"
          sx={{ marginLeft: 2 }}
          onClick={handleClose}
        >
          {buttonText}
        </Button>
      </Alert>
    </Snackbar>
  );
}
