import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import { PropsWithChildren, createContext, useContext, useState } from "react";

const DEFAULT_AUTO_HIGHT_DURATION = 6000;
const DEFAULT_SEVERITY: AlertProps["severity"] = "info";

export interface MessageInput {
  message: string;
  severity?: AlertProps["severity"];
  duration?: number;
}

export interface SnackbarContextProps {
  showMessage: (mesageInput: MessageInput) => void;
}

export const SnackbarContext = createContext<SnackbarContextProps>({
  showMessage: () => {},
});

export const SnackbarProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [autoHideDuration, setAutoHideDuration] = useState(
    DEFAULT_AUTO_HIGHT_DURATION
  );
  const [severity, setSeverity] =
    useState<AlertProps["severity"]>(DEFAULT_SEVERITY);

  const showMessage = ({ message, severity, duration }: MessageInput) => {
    setMessage(message);
    setSeverity(severity || DEFAULT_SEVERITY);
    setAutoHideDuration(duration || DEFAULT_AUTO_HIGHT_DURATION);

    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ showMessage }}>
      {children}
      <Snackbar
        open={isOpen}
        autoHideDuration={autoHideDuration}
        onClose={handleClose}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          severity={severity}
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};

export const useSnackbar = () => {
  const context = useContext(SnackbarContext);

  if (!context) {
    throw new Error("useSnackbar must be used within a SnackbarProvider");
  }
  return context;
};
