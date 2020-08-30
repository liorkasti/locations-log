
export const addCategory = (items, item) => {
  return [...items, { id: Math.random().toString(36).substr(2, 5), name: item }];
};

export const addLocation = (items, item) => {
  console.warn('Locations list: ' + items);

  return [...items, { id: Math.random().toString(36).substr(2, 5), name: item }];
};

export const updateCategory = (items, index, newName) => {

  // console.warn('TO BE UPDATE: ' + newName + " in index: ", index);
  // console.warn('TO BE UPDATE: ' + newName + " in index: ", items[index].name);
  items[index].name = newName;
  return items;
};

export const removeCategory = (items, item) => {
  console.log('TO BE DELETED: ' + item);
  return items.filter(category => category.name !== item);
};
// export const cancelCategoryAdditionHandler = () => {
//   setIsCancelMode(true);
// };