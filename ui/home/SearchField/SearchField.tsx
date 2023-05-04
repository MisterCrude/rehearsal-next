import { useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import { Box, OutlinedInput, InputAdornment, IconButton } from "@mui/material";
import debounce from "lodash/debounce";

interface SearchFieldProps {
  onChange: (query: string) => void;
}

export default function SearchField({ onChange }: SearchFieldProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleQueryDebounced = debounce(
    (query: string) => onChange(query),
    500
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
    handleQueryDebounced(event.target.value);
  };

  const handleClearQuery = () => {
    setSearchQuery("");
    onChange("");
  };

  return (
    <Box sx={{ marginBottom: 4, width: "100%" }}>
      <OutlinedInput
        size="small"
        value={searchQuery}
        onChange={handleQueryChange}
        placeholder="Szukaj po nazwie lub adresie"
        endAdornment={
          searchQuery.length > 0 && (
            <InputAdornment position="end">
              <IconButton
                size="small"
                aria-label="clear search query"
                onClick={handleClearQuery}
                edge="end"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </InputAdornment>
          )
        }
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
          },
          minWidth: {
            xs: "100%",
            sm: 400,
          },
        }}
      />
    </Box>
  );
}
