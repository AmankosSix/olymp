export const getId = (str, queue = 0, delimiter = "-") => {
  return typeof str !== "number" ? str.split(delimiter)[queue] : str;
};
