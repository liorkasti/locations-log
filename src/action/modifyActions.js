
export const addCategory = (items, item) => {
  return [...items, { id: Math.random().toString(36).substr(2, 5), name: item }];
};

export const updateCategory = (items, item, newName) => {
  console.log('TO BE UPDATE: ' + item);

  items[item.id] = newName;
  return items;
};

export const removeCategory = (items, item) => {
  console.log('TO BE DELETED: ' + item);
  return items.filter(category => category.name !== item);
};
// export const cancelCategoryAdditionHandler = () => {
//   setIsCancelMode(true);
// };