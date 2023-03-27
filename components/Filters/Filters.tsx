import { District } from "@/dto/studio";
import Stack from "@mui/material/Stack";
import { useState } from "react";
import DistrictChip from "./DistrictChip";
import { setSelectedDistricts } from "./utils";

export const ALL_INDEX = "all";

interface FiltersProps {
  districts: District[];
  onChange: (selectedDistricts: string[]) => void;
}

export default function Filters({ districts, onChange }: FiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([ALL_INDEX]);

  const handleSelect = (districtId: string) => {
    setSelectedFilters((prev) => {
      const selected = setSelectedDistricts({
        prev,
        selected: districtId,
        districtsLength: districts.length,
        allIndex: ALL_INDEX,
      });

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