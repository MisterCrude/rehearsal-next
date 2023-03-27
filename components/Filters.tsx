import { District } from "@/dto/studio";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useState } from "react";

interface DistrictChipProps {
  district: District;
}

function DistrictChip({ district }: DistrictChipProps) {
  return (
    <Chip
      clickable
      size="small"
      icon={<DomainOutlinedIcon />}
      label={district.name}
      sx={{ paddingLeft: 0.7, paddingRight: 0.3 }}
      variant="outlined"
    />
  );
}

interface FiltersProps {
  districts: District[];
  onChange: () => void;
}

export default function Filters({ districts }: FiltersProps) {
  const [selectedFilters, setSelectedFilters] = useState();

  return (
    <Stack spacing={1.5} direction="row" sx={{ marginBottom: 4 }}>
      {districts.map((district) => (
        <DistrictChip district={district} key={district.id} />
      ))}
    </Stack>
  );
}
