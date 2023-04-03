import { COOKIE_ACCEPTED } from "@/constants";
import { getItem, setItem } from "@/services/localStorage";
import CookieIcon from "@mui/icons-material/Cookie";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { ReactNode, forwardRef, useEffect, useState } from "react";

interface CookiebarProps {
  message: ReactNode | string;
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
    setIsVisible(false);
    setItem<boolean>(COOKIE_ACCEPTED, true);
  };

  useEffect(() => {
    setIsVisible(!getItem<boolean>(COOKIE_ACCEPTED));
  }, []);

  return (
    <Snackbar
      open={isVisible}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              "& p": {
                margin: 0,
              },
            }}
          >
            {message}
          </Box>
          <Button
            color="inherit"
            size="small"
            sx={{ marginLeft: 2, fontWeight: "bold" }}
            onClick={handleClose}
          >
            {buttonText}
          </Button>
        </Box>
      </Alert>
    </Snackbar>
  );
}
