const revomeItemOfList = (list, item, key = 'id') => {
  const indexItem = list.findIndex((current) => current[key] === item[key]);
  const draftList = [...list];

  draftList.splice(
    indexItem,
    1,
  );

  return draftList;
};

export default revomeItemOfList;
