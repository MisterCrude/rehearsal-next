import Chip from "@mui/material/Chip";
import { ReactElement } from "react";

interface DistrictChipProps {
  name: string;
  icon?: ReactElement;
  selected?: boolean;
  onSelect?: () => void;
}

export default function DistrictChip({
  name,
  icon,
  selected,
  onSelect,
}: DistrictChipProps) {
  return (
    <Chip
      clickable
      onClick={() => onSelect?.()}
      icon={icon}
      color={selected ? "primary" : "default"}
      label={name}
      sx={{ paddingLeft: 0.7, paddingRight: 0.3 }}
      variant={selected ? "filled" : "outlined"}
    />
  );
}
