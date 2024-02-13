export const getArrFromObj = (json, list) => {
  const arr = Object.entries(json).map((el) => {
    const item = list.filter((item) => item.id == el[0]);
    return { ...item[0], style: el[1] };
  });
  return arr;
};

export const getArr = (json) => {
  const arr = Object.keys(json).map((key) => json[key]);

  const test = arr.map((el) => {
    return Object.keys(el).map((e) => el[e]);
  });

  return [].concat(...test);
};
