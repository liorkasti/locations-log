
export const addCategory = (items, item) => {
  return [...items, { id: Math.random().toString(36).substr(2, 5), name: item }];
};

const updateCategory = categoryId => {
  console.log('TO BE DELETED: ' + categoryId);
  // console.log("Current Category: ", currentCategory);
  setCategoryList(currentCategory => {
    return currentCategory.filter(category => category.id !== categoryId);
  });
};

const removeCategory = categoryId => {
  console.log('TO BE DELETED: ' + categoryId);
  // console.log("Current Category: ", currentCategory);
  setCategoryList(currentCategory => {
    return currentCategory.filter(category => category.id !== categoryId);
  });
};
// export const cancelCategoryAdditionHandler = () => {
//   setIsCancelMode(true);
// };