import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import Chip from "@mui/material/Chip";

interface DistrictChipProps {
  name: string;
  selected?: boolean;
  onSelect?: () => void;
}

export default function DistrictChip({
  name,
  selected,
  onSelect,
}: DistrictChipProps) {
  return (
    <Chip
      clickable
      onClick={() => onSelect?.()}
      icon={<DomainOutlinedIcon />}
      color={selected ? "primary" : "default"}
      label={name}
      sx={{ paddingLeft: 0.7, paddingRight: 0.3 }}
      variant={selected ? "filled" : "outlined"}
    />
  );
}
