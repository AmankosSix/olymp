export function findInNestedArray(array, id, key = "id") {
  for (let i = 0; i < array.length; i++) {
    if (array[i][key] === id) {
      return array[i];
    }

    if (array[i].children && array[i].children.length) {
      const result = findInNestedArray(array[i].children, id, key);
      if (result) {
        return result;
      }
    }
  }
  return null;
}
