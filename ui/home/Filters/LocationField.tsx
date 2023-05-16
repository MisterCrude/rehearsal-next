import styled from "@emotion/styled";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import { MutableRefObject, useEffect, useRef } from "react";

import { createGeocoder } from "@/services/mapbox";
import { FilterNames } from "@/ui/home/Filters/types";
import { theme } from "@/utils/theme";

const Geocoder = styled.div`
  .mapboxgl-ctrl-geocoder {
    min-width: 300px;
    box-shadow: none;
    border: 1px solid rgba(25, 118, 210, 0.5);
    border-radius: 2rem;
    transition: border-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      border-color: ${theme.palette.primary.main};
    }

    &--icon {
      fill: ${theme.palette.primary.main};
    }

    & .mapboxgl-ctrl-geocoder--icon-loading {
      height: 27px;
      top: 0;
      background-color: white;
    }

    & .mapboxgl-ctrl-geocoder--icon-close {
      margin-top: 3px;
      margin-right: 0.3rem;
      height: 17px;
    }

    & .mapboxgl-ctrl-geocoder--icon-search {
      left: 0.7rem;
      top: 8px;
      height: 20px;
    }

    &--input {
      height: 36px;
      font-size: 15px;
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      &:focus {
        outline: none;
      }
    }
  }
`;

interface LocationButtonProps {
  onSelect: (name: FilterNames.Location, selected: number[]) => void;
  LocationFieldRef?: MutableRefObject<MapboxGeocoder | undefined>;
}

const gc = createGeocoder({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_ACCESS_TOKEN || "",
});

export default function LocationButton({
  onSelect,
  LocationFieldRef,
}: LocationButtonProps) {
  const geocoder = useRef<MapboxGeocoder | undefined>(gc);

  useEffect(() => {
    if (geocoder.current) {
      const mapboxGeocoder = geocoder.current;

      mapboxGeocoder.addTo("#geocoder");
      mapboxGeocoder.setPlaceholder("Sprawdź jak daleko do Ciebie");
      mapboxGeocoder.on(
        "result",
        ({ result }: Record<"result", MapboxGeocoder.Result>) => {
          onSelect(FilterNames.Location, [...result.center]);
        }
      );

      // Set `geocoder` ref to `LocationFieldRef`
      // for move ability to clear input from parent component
      if (LocationFieldRef) {
        LocationFieldRef.current = mapboxGeocoder;
      }
    }
    return () => {
      geocoder.current = undefined;
    };
  }, [onSelect, LocationFieldRef]);

  return <Geocoder id="geocoder" />;
}
