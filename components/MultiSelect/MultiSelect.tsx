import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Popover from "@mui/material/Popover";
import { ReactNode, useState } from "react";

import { Option } from "@/types/inputs";

import SelectOption from "./SelectOption";

interface MultiSelectProps {
  /**
   * The title of the filter shown in the button.
   * @type {string}
   */
  title: string;

  /**
   * The options to select from.
   * @type {Option[]}
   */
  options: Option[];

  /**
   * The name of the filter.
   * @type {string}
   */
  name: string;

  /**
   * The selected options.
   * @type {string[]}
   */
  selected: string[];

  /**
   *The icon to show in the button.
   * @type {string=}
   */
  icon?: ReactNode;

  /**
   * A callback function to handle selection.
   * @type {(name: string, selected: string[]) => void}
   */
  onSelect: (name: string, selected: string[]) => void;
}

export default function MultiSelect({
  icon,
  name,
  options,
  selected,
  title,
  onSelect,
}: MultiSelectProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleSelect = (value: string) => {
    // If value is already selected, remove it from `selected` array
    if (selected.includes(value)) {
      onSelect(
        name,
        selected.filter((current) => current !== value)
      );
      return;
    }

    // Otherwise, add it to `selected`  array
    onSelect(name, [...selected, value]);
  };

  const handleTogglePopover = (event?: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event?.currentTarget || null);
  };

  return (
    <>
      <Button
        variant={selected.length ? "contained" : "outlined"}
        endIcon={<ExpandMoreIcon />}
        startIcon={icon}
        onClick={handleTogglePopover}
        sx={{
          borderRadius: 6,
          textTransform: "none",
          display: "flex",
          flexShrink: 0,
        }}
      >
        {selected.length ? `Wybrano: ${selected.length}` : title}
      </Button>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={() => handleTogglePopover()}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <List
          sx={{
            bgcolor: "background.paper",
            maxHeight: "46vh",
          }}
        >
          {options.map((current) => (
            <SelectOption
              key={current.value}
              option={current}
              isSelected={selected.includes(current.value)}
              onSelect={handleSelect}
            />
          ))}
        </List>
      </Popover>
    </>
  );
}
