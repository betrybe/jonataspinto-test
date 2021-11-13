const selectItemOfList = (list, item, key = 'id') => {
  const indexItem = list.findIndex((current) => current[key] === item[key]);

  const data = list[indexItem];

  return data;
};

export default selectItemOfList;
