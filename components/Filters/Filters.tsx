import { District } from "@/resources/dto/studio";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { useState } from "react";

export const ALL_INDEX = "all";

interface FiltersProps {
  districts: District[];
  onChange: (selectedDistricts: string[]) => void;
}

export default function Filters({ districts, onChange }: FiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>([ALL_INDEX]);

  const handleSelect = (districtId: string) => {};

  return (
    <Box sx={{ overflowX: "auto" }}>
      <Stack spacing={1.5} direction="row" sx={{ marginBottom: 2 }}></Stack>
    </Box>
  );
}
