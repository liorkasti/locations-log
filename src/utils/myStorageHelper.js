// // import {SORT_MODE} from '../reducers/settingsReducer';

// export const isCategoryExists = (categories, category) => {
//   let indexOfFoundCategory = findCategoryIndex(categories, category);
//   return indexOfFoundCategory !== -1;
// };

// export const filterCategories = (categories, categoryToFilterOut) => {
//   if (!categories || !categories instanceof Array) {
//     return [];
//   }
//   if (!categoryToFilterOut || !categoryToFilterOut.categoryName) {
//     return categories;
//   }
//   return categories.filter(item => item.categoryName !== categoryToFilterOut.categoryName);
// };

// export const findCategoryIndex = (categories, category) => {
//   if (!categories || !category || !category.categoryName) {
//     return -1;
//   }
//   return categories.findIndex(item => item.categoryName === category.categoryName);
// };

// // export const sortCategories = (categories, sortMode) => {
// //   switch (sortMode) {
// //     case SORT_MODE.ALPHABETICALLY:
// //       const clonedCategories = [...categories];
// //       return clonedCategories.sort((a, b) => a.categoryName.localeCompare(b.categoryName
// //     case SORT_MODE.DEFAULT:
// //     default:
// //       return categories;
// //   }
// // };
