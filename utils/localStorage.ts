export const setItem = <T extends string>(name: string, value: T) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getItem = <T extends string>(name: string): T | null => {
  const item = localStorage.getItem(name);
  return item ? JSON.parse(item) : null;
};
