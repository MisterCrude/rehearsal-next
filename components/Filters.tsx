import { District } from "@/dto/studio";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useState } from "react";

interface DistrictChipProps {
  name: string;
  selected?: boolean;
  onSelect?: () => void;
}

function DistrictChip({ name, selected, onSelect }: DistrictChipProps) {
  return (
    <Chip
      clickable
      onClick={() => onSelect?.()}
      size="small"
      icon={<DomainOutlinedIcon />}
      color={selected ? "primary" : "default"}
      label={name}
      sx={{ paddingLeft: 0.7, paddingRight: 0.3 }}
      variant={selected ? "filled" : "outlined"}
    />
  );
}

export const ALL_INDEX = "all";

interface FiltersProps {
  districts: District[];
  onChange: (selectedDistricts: string[]) => void;
}

export default function Filters({ districts, onChange }: FiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([ALL_INDEX]);

  const handleSelect = (districtId: string) => {
    setSelectedFilters((prev) => {
      const addSelected = (prev: string[], selected: string) => {
        // Click `All` option
        if (districtId === ALL_INDEX) {
          return [ALL_INDEX];
        }

        // Slect all options from list
        if (districts.length === [...prev, selected].length) {
          return [ALL_INDEX];
        }

        // Select existing one
        if (prev.includes(districtId)) {
          const withoutSelected = prev.filter((id) => id !== districtId);
          // Set `All` if not selected any another option
          return withoutSelected.length ? withoutSelected : [ALL_INDEX];
        }

        // Select new one
        return [...prev.filter((id) => id !== ALL_INDEX), districtId];
      };

      const selected = addSelected(prev, districtId);

      onChange(selected);
      return selected;
    });
  };

  return (
    <Stack spacing={1.5} direction="row" sx={{ marginBottom: 4 }}>
      <DistrictChip
        onSelect={() => handleSelect(ALL_INDEX)}
        name="Wszystkie"
        selected={selectedFilters.includes(ALL_INDEX)}
      />
      {districts.map((district) => (
        <DistrictChip
          onSelect={() => handleSelect(district.id)}
          name={district.name}
          selected={selectedFilters.includes(district.id)}
          key={district.id}
        />
      ))}
    </Stack>
  );
}
