import { District, Service } from "@/resources/dto/studio";
import CloseIcon from "@mui/icons-material/Close";
import DomainOutlinedIcon from "@mui/icons-material/DomainOutlined";
import SpeakerIcon from "@mui/icons-material/Speaker";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { useState } from "react";
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
  };

  const isFiltersEmpty = Object.values(selectedFilters).every((filter) =>
    Array.isArray(filter) ? !filter.length : !filter
  );

  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ overflowX: "auto", display: "flex" }}>
          <Stack spacing={2} direction="row" sx={{ marginY: 2 }}>
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

            {/* Clear filters button */}
            {!isFiltersEmpty && (
              <Button
                color="error"
                endIcon={<CloseIcon />}
                sx={{ textTransform: "none" }}
                onClick={handleClear}
              >
                Wyczyść
              </Button>
            )}
          </Stack>
        </Box>
      </Box>
    </>
  );
}
