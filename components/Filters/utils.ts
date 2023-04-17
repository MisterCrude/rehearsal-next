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

  // Select all options from list
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
