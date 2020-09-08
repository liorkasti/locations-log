export const addCategory = (categories, categoryName, locations) => {
  // TODO: Check it input exists
  const exist = categories.findIndex(category => category.categoryName === categoryName);
  console.warn('index: ' + exist + "item: " + categoryName);
  if (exist === -1) {
    return [...categories, { id: Math.random().toString(36).substr(2, 5), categoryName: categoryName, locations: locations }];
  } else {
    return categoryName;
  }
};

export const addLocation = (items, item) => {
  // TODO: Check it input exists in the specific category
  console.warn('Locations list before storage: ' + items + " | item to add:" + item);
  console.warn('location.locationName: ' + items.findIndex(location => location.locationName));

  const exist = items.findIndex(location => location.item.locationName === item.locationName);
  console.warn('exist: ' + exist + "item: " + item.locationName);
  if (exist === -1) {
    const append = [...items, { id: Math.random().toString(36).substr(2, 4), item }];
    // appendCategory(append)
    return append;
  } else {
    return item;
  }
};

export const appendCategory = (items, item) => {

};

export const appendLocation = (items, item) => {

};

export const updateCategory = (items, index, newName) => {

  // console.warn('TO BE UPDATE: ' + newName + " in index: ", index);
  // console.warn('TO BE UPDATE: ' + newName + " in index: ", items[index].categoryName);
  items[index].categoryName = newName;
  return items;
};

export const removeCategory = (items, item) => {
  console.log('TO BE DELETED: ' + item);
  return items.filter(category => category.categoryName !== item);
};
// export const cancelCategoryAdditionHandler = () => {
//   setIsCancelMode(true);
// };