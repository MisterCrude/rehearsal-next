export const setItem = <T>(name: string, value: T) => {
  localStorage.setItem(name, JSON.stringify(value));
};

export const getItem = <T>(name: string): T | undefined => {
  const item = localStorage.getItem(name);
  return item ? JSON.parse(item) : undefined;
};
