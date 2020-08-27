
import React, { useState, useEffect } from "react";
import { Storage } from '../router/index';

export const addCategory = (items, item) => {
  return [...items, { id: Math.random().toString(36).substr(2, 5), name: item }];
};


// export const removeCategoryHandler = categoryId => {
//   console.log('TO BE DELETED: ' + categoryId);
//   console.log(currentCategories);
//   setCourseCategorys(currentCategories => {
//     return currentCategories.filter(category => category.id !== categoryId);
//   });
// };

// export const cancelCategoryAdditionHandler = () => {
//   setIsCancelMode(true);
// };