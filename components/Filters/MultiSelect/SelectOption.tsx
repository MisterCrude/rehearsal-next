import { Option } from "@/types/inputs";
import Checkbox from "@mui/material/Checkbox";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

interface SelectOptionProps {
  option: Option;
  isSelected: boolean;
  onSelect: (selected: string) => void;
}

export default function SelectOption({
  option,
  isSelected,
  onSelect,
}: SelectOptionProps) {
  return (
    <ListItem key={option.value} disablePadding>
      <ListItemButton
        dense
        role={undefined}
        sx={{
          paddingRight: 3,
        }}
        onClick={() => onSelect(option.value)}
      >
        <ListItemIcon>
          <Checkbox checked={isSelected} tabIndex={-1} disableRipple />
        </ListItemIcon>
        <ListItemText primary={option.label} />
      </ListItemButton>
    </ListItem>
  );
}
