import CloseIcon from "@mui/icons-material/Close";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import SpeakerIcon from "@mui/icons-material/Speaker";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useRef, useState } from "react";

import MultiSelect from "@/components/MultiSelect";
import { District, Service } from "@/resources/dto/studio";
import LocationField from "@/ui/home/Filters/LocationField";

import { Filter, FilterNames } from "./types";

interface FiltersProps {
  districts: District[];
  services: Service[];
  onChange: (filter: Filter) => void;
}

const defaultFilters: Filter = {
  district: [],
  service: [],
  location: null,
};

export default function Filters({
  districts,
  services,
  onChange,
}: FiltersProps) {
  const [selectedFilters, setSelectedFilters] =
    useState<Filter>(defaultFilters);

  const LocationFieldRef = useRef<MapboxGeocoder>();

  const handleSelect = (name: string, selected: string[] | number[]) => {
    setSelectedFilters((prevState) => {
      let newState: Filter;

      switch (name) {
        // Filter by `Location`
        case FilterNames.Location:
          newState = {
            ...prevState,
            [FilterNames.Location]: selected as number[],
          };
          break;
        // Filter by `District` or `Service`
        default:
          newState = {
            ...prevState,
            [name]: selected,
          };
      }

      onChange(newState);
      return newState;
    });
  };

  const handleClear = () => {
    setSelectedFilters(defaultFilters);
    onChange(defaultFilters);
    LocationFieldRef.current?.clear();
  };

  const isFiltersEmpty = Object.values(selectedFilters).every((filter) =>
    Array.isArray(filter) ? !filter.length : !filter
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        "& > *": {
          marginRight: 2,
          marginBottom: 2,
        },
      }}
    >
      {/* City filter */}
      <Box>
        <MultiSelect
          disabled
          icon={<RoomOutlinedIcon />}
          name="city"
          options={[]}
          title="Miasto"
          selected={[]}
          onSelect={() => {
            /** */
          }}
        />
      </Box>

      {/* District filter */}
      <Box>
        <MultiSelect
          icon={<DomainOutlinedIcon />}
          name={FilterNames.District}
          title="Dzielnica"
          options={districts.map((district) => ({
            label: district.name,
            value: district.id,
          }))}
          selected={selectedFilters.district}
          onSelect={handleSelect}
        />
      </Box>

      {/* Service filter */}
      <Box>
        <MultiSelect
          icon={<SpeakerIcon />}
          name={FilterNames.Service}
          title="Usługa"
          options={services.map((service) => ({
            label: service.name,
            value: service.id,
          }))}
          selected={selectedFilters.service}
          onSelect={handleSelect}
        />
      </Box>

      {/* Distance sort */}
      <LocationField
        onSelect={handleSelect}
        LocationFieldRef={LocationFieldRef}
      />

      {/* Clear filters button */}
      {!isFiltersEmpty && (
        // Wrap in `Box` to prevent `Button` from shrinkage for mobile
        <Box>
          <Button
            color="error"
            endIcon={<CloseIcon />}
            sx={{ textTransform: "none" }}
            onClick={handleClear}
          >
            Wyczyść
          </Button>
        </Box>
      )}
    </Box>
  );
}
