import AsyncStorage from '@react-native-community/async-storage';

const KEYS = {
    CATEGORIES: 'categories',
    LOCATIONS: 'locations',
}

export const updateStorage = async => {

    setMyLocationList(myLocationList => [
        ...myLocationList,
        { id: currentCategory.id, name: currentCategory.name }
    ]);
    return myLocationList
}

export const addCategory = async newCategory => {

    setCurrentCategory(newNameItem => [
        ...currentCategory,
        // { id: props.myLocationList.length + 100 + 1.1, name: newNameItem }
        { id: Math.random().toString(), name: newNameItem }
    ]);

    setCategoryList(newNameItem => [
        ...categoryList,
        // { id: categoryList.length + 1000 * 1.1, name: newNameItem.name }
        { id: Math.random().toString(), name: newNameItem.name }
    ]);
    return categoryList
}

getData = async () => {
    try {
        const value = await AsyncStorage.getItem(setCurrentCategory);
        if (value !== null) {
            // We have data!!
            console.log(value);
            setCurrentCategory({ currentCategory: currentCategory })
        }
    } catch (error) {
        // Error retrieving data
    }
};

export const getInitialStore = async () => {
    try {
      const store = {
        category: [],
        location: [],
      };
      const storage = await getAllStorage();
      store.category.categories = storage['categories'];
      store.location.locations = storage['locations'];

      return store;
    } catch (error) {
      console.error(`localStorageUtility.getInitialState: ${error}`);
    }
  };


//   const getAllStorage = async () => {
//     try {
//       let storage = {};
//       const rawData = await AsyncStorage.multiGet(Object.values(KEYS));
//       rawData.forEach(data => {
//         const key = data[0];
//         let value = data[1];
//         if (!value) {
//           storage[key] = getDefaultValuePerKey(key);
//         } else {
//           switch (key) {
//             case KEYS.CATEGORIES:
//             case KEYS.LOCATIONS:
//               storage[key] = JSON.parse(value);
//               break;
//             case SETTINGS.LOCATIONS_SORT:
//             case SETTINGS.CATEGORIES_SORT:
//               storage[key] = value;
//               break;
//             case SETTINGS.GROUP_LOCATIONS:
//               storage[key] = value;
//               break;
//           }
//         }
//       });
//       return storage;
//     } catch (error) {
//       console.error(`localStorageUtility.getAllStorage: ${error}`);
//     }
//   };

// export const getInitialStore = async () => {
//   try {
//     const store = {
//       categoryReducer: [],
//       locationReducer: [],
//       settingsReducer: {},
//     };
//     const storage = await getAllStoragage();
//     store.categoryReducer.categories = storage[KEYS.CATEGORIES];
//     store.locationReducer.locations = storage[KEYS.LOCATIONS];
//     store.settingsReducer[SETTINGS.CATEGORIES_SORT] =
//       storage[SETTINGS.CATEGORIES_SORT];
//     store.settingsReducer[SETTINGS.LOCATIONS_SORT] =
//       storage[SETTINGS.LOCATIONS_SORT];
//     store.settingsReducer[SETTINGS.GROUP_LOCATIONS] =
//       storage[SETTINGS.GROUP_LOCATIONS];
//     return store;
//   } catch (error) {
//     console.error(`localStorageUtility.getInitialState: ${error}`);
//   }
// };