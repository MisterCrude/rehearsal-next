import { Typography } from "@mui/material";

import { Studio } from "@/resources/dto/studio";

interface OffersAmountProps {
  amount: number;
}

export default function OffersAmount({ amount }: OffersAmountProps) {
  return (
    <Typography
      sx={{
        marginBottom: 2,
        display: "flex",
        color: "gray",
      }}
    >
      {amount} ofert w Warszawie
    </Typography>
  );
}
