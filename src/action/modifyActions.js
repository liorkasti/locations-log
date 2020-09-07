
export const addCategory = (items, item) => {
  // TODO: Check it input exists
  const exist = items.findIndex(category => category.name === item);
  console.warn('index: ' + exist + "item: " + item);
  if (exist === -1) {
    return [...items, { id: Math.random().toString(36).substr(2, 5), name: item }];
  } else {
    return item;
  }
};

export const addLocation = (items, item) => {
  // console.warn('New Location: ' + JSON.stringify(item));
  // console.warn('Locations list before storage: ' + JSON.stringify(items));
  console.warn('Locations list before storage: ' + items + " | item to add:" + item);
  console.warn('location.nameInput: ' + items.findIndex(location => location.nameInput));
  // TODO: Check it input exists
  const exist = items.findIndex(location => location.item.nameInput === item.nameInput);
  console.warn('exist: ' + exist + "item: " + item.nameInput);
  if (exist === -1) {
    return [...items, {
      id: Math.random().toString(36).substr(2, 4), item
      // locationName: item.nameInput, address: item.address,
      // coordinates: { latitude: item.coordinates.latitude, longitude: coordinates.longitude }
    }];
  } else {
    return item;
  }
  // return [...items, { id: Math.random().toString(36).substr(2, 5), item }];
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