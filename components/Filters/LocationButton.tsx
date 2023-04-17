import { Filter, FilterNames } from "@/components/Filters/types";
import { createGeocoder } from "@/services/mapbox";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import Box from "@mui/material/Box";
import { useEffect, useRef } from "react";

interface LocationButtonProps {
  onChange: (filter: Partial<Filter>) => void;
}

export default function LocationButton({ onChange }: LocationButtonProps) {
  const geocoder = useRef<MapboxGeocoder | null>(
    createGeocoder({
      accessToken: process.env.NEXT_PUBLIC_MAPBOX_PUBLIC_ACCESS_TOKEN || "",
    })
  );

  useEffect(() => {
    geocoder.current?.addTo("#geocoder");
    geocoder.current?.on(
      "result",
      ({ result }: Record<"result", MapboxGeocoder.Result>) => {
        onChange({ [FilterNames.Location]: [...result.center] });
      }
    );

    return () => {
      geocoder.current = null;
    };
  }, []);

  return <Box component="div" id="geocoder" />;
}
