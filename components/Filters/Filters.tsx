import { useRef, useState } from "react";

import CloseIcon from "@mui/icons-material/Close";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import SpeakerIcon from "@mui/icons-material/Speaker";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import LocationInput from "@/components/Filters/LocationInput";
import { District, Service } from "@/resources/dto/studio";

import MultiSelect from "./MultiSelect";
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

  const locationInputRef = useRef<MapboxGeocoder>();

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
    locationInputRef.current?.clear();
  };

  const isFiltersEmpty = Object.values(selectedFilters).every((filter) =>
    Array.isArray(filter) ? !filter.length : !filter
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ overflowX: "auto", paddingBottom: 2 }}>
        <Stack spacing={2} direction="row">
          {/* District filter */}
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

          {/* Service filter */}
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

          {/* Distance sort */}
          <LocationInput
            onSelect={handleSelect}
            locationInputRef={locationInputRef}
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
        </Stack>
      </Box>
    </Box>
  );
}
