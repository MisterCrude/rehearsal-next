import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";

export const createGeocoder = (props: MapboxGeocoder.GeocoderOptions) => {
  // https://github.com/mapbox/mapbox-gl-geocoder
  return new MapboxGeocoder({
    marker: false,
    language: "pl",
    countries: "PL",
    ...props,
  });
};
