import { Location } from "@/types/misc";
import { EntryFields } from "contentful";

interface setSelectedDistrictsProps {
  prev: string[];
  selected: string;
  districtsLength: number;
  allIndex: string;
}

export const setSelectedDistricts = (props: setSelectedDistrictsProps) => {
  const { prev, selected, districtsLength, allIndex } = props;

  // Click `All` option
  if (selected === allIndex) {
    return [allIndex];
  }

  // Slect all options from list
  if (districtsLength === [...prev, selected].length) {
    return [allIndex];
  }

  // Select existing one
  if (prev.includes(selected)) {
    const withoutSelected = prev.filter((id) => id !== selected);
    // Set `All` if not selected any another option
    return withoutSelected.length ? withoutSelected : [allIndex];
  }

  // Select new one
  return [...prev.filter((id) => id !== allIndex), selected];
};

// Calculate distance between two points in km
export const calculateDistance = (
  targetLocation: EntryFields.Location,
  currentLocation: Location
) => {
  const { latitude: lat1, longitude: lon1 } = currentLocation;
  const { lat: lat2, lon: lon2 } = targetLocation;

  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km

  return d;
};

const deg2rad = (deg: number) => {
  return deg * (Math.PI / 180);
};
