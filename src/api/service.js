export const clearData = (data) => {
  const result = {};
  Object.assign(result, data);
  Object.keys(result).forEach((key) => {
    result[key] === "" && delete result[key];
  });
  return result;
};
