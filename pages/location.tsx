import { Button } from "@mui/material";
import { GetServerSideProps } from "next";
import { useState } from "react";

interface Location {
  name: string;
  latitude: number;
  longitude: number;
}

interface Props {
  locations: Location[];
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  // This is where you would fetch your list of locations from an API or database
  const locations: Location[] = [
    { name: "Location 1", latitude: 40.712776, longitude: -74.005974 },
    { name: "Location 2", latitude: 37.774929, longitude: -122.419416 },
    { name: "Location 3", latitude: 51.507351, longitude: -0.127758 },
  ];

  return { props: { locations } };
};

const IndexPage = ({ locations }: Props) => {
  const [currentPosition, setCurrentPosition] = useState<
    GeolocationPosition | undefined
  >(undefined);

  const handleClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        setCurrentPosition,
        (error: GeolocationPositionError) => {
          console.error(error);
        }
      );
    }
  };

  const handleCalculateDistance = (location: Location) => {
    if (currentPosition) {
      const { latitude: lat1, longitude: lon1 } = currentPosition.coords;
      const { latitude: lat2, longitude: lon2 } = location;
      const R = 6371; // Radius of the earth in km
      const dLat = deg2rad(lat2 - lat1); // deg2rad below
      const dLon = deg2rad(lon2 - lon1);
      const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) *
          Math.cos(deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      const d = R * c; // Distance in km
      console.log(`Distance to ${location.name}: ${d} km`);
    }
  };

  const deg2rad = (deg: number) => {
    return deg * (Math.PI / 180);
  };

  return (
    <div>
      <Button variant="contained" onClick={handleClick}>
        Get Current Position
      </Button>
      {locations.map((location) => (
        <div key={location.name}>
          <h2>{location.name}</h2>
          <Button
            variant="outlined"
            onClick={() => handleCalculateDistance(location)}
          >
            Calculate Distance
          </Button>
        </div>
      ))}
    </div>
  );
};

export default IndexPage;
