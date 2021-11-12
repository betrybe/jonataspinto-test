const replaceItemOfList = (list, item, key = 'id') => {
  const indexItem = list.findIndex((current) => current[key] === item[key]);
  const copyItem = list[indexItem];
  const draftList = [...list];

  draftList.splice(
    indexItem,
    1,
    { ...copyItem, ...item },
  );

  return draftList;
};

export default replaceItemOfList;
