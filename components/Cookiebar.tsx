import CookieIcon from "@mui/icons-material/Cookie";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import { forwardRef, ReactNode, useEffect, useState } from "react";

import { COOKIE_ACCEPTED } from "@/constants";
import { getItem, setItem } from "@/services/local-storage";

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
    <Snackbar open={isVisible}>
      <Alert>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: { md: "row", xs: "column" },
          }}
        >
          <Box
            sx={{
              paddingRight: { md: 2 },
              paddingBottom: { xs: 2 },
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
            sx={{
              fontWeight: "bold",
              display: "flex",
              flexShrink: 0,
            }}
            onClick={handleClose}
          >
            {buttonText}
          </Button>
        </Box>
      </Alert>
    </Snackbar>
  );
}
