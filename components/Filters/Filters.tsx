import { District } from "@/resources/dto/studio";
import DomainIcon from "@mui/icons-material/Domain";
import Box from "@mui/material/Box";
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
    <Box sx={{ overflowX: "auto" }}>
      <Stack spacing={1.5} direction="row" sx={{ marginBottom: 2 }}>
        <DistrictChip
          onSelect={() => handleSelect(ALL_INDEX)}
          name="Wszystkie"
          selected={selectedFilters.includes(ALL_INDEX)}
        />
        {districts.map((district) => (
          <DistrictChip
            icon={<DomainIcon />}
            onSelect={() => handleSelect(district.id)}
            name={district.name}
            selected={selectedFilters.includes(district.id)}
            key={district.id}
          />
        ))}
      </Stack>
    </Box>
  );
}
