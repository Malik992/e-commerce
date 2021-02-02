export const objToArr = (object: any) =>
  object && Object.entries(object).map(([key, value]: any) => ({ key: key, ...value }));

const storage = window.localStorage;
export const getStoredUser = () => {
  if (storage.getItem("user")) {
    return JSON.parse(storage.getItem("user"));
  }
};
