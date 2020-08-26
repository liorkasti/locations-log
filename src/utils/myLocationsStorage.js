// import React, { useState, useEffect } from "react";
// import { Alert } from "react-native"
// import AsyncStorage from '@react-native-community/async-storage';
// import LocationIndex from "../router/index";

// export const KEYS = {
//     CATEGORIES: 'categories',
//     CATEGORY: 'category',
//     LOCATIONS: 'locations',
// }

// export const storeData = async (value) => {
//     try {
//         await AsyncStorage.setItem('@storage_Key', value)
//     } catch (e) {
//         // saving error
//     }
// }

// export const setItem = async (key, [item]) => {
//     try {
//         const result = await AsyncStorage.setItem(key, JSON.stringify(item))
//         // console.log(key + ": ", item)        
//         return result;
//     } catch (error) {
//         console.error('saving data error');
//         // Alert.alert('saving data error');
//         // console.error(`localStorageUtility.getItem: ${error}`);
//     }
// };

// export const getItem = async key => {
//     try {
//         const rawSavedItem = await AsyncStorage.getItem(key);
//         // let savedItem = getDefaultValuePerKey(key);
//         // if (!!rawSavedItem) {
//         //     savedItem = JSON.parse(rawSavedItem);
//         // }
//         return JSON.parse(rawSavedItem);
//     } catch (error) {
//         console.error('saving data error');
//     }
// };


// export const removeValue = async (key) => {
//     try {
//         await AsyncStorage.removeItem('@MyApp_key')
//     } catch (e) {
//         // remove error
//     }

//     console.log('Remove Value Done.')
// }

// export const getMultiple = async (key) => {

//     let values
//     try {
//         values = await AsyncStorage.multiGet([key])
//     } catch (e) {
//         // read error
//     }
//     console.log ("446545622424244564654646: ", [key, {id: getItem(key)[getItem(key)], name: getItem(key)[getItem(key)].JSON.stringify(item)}])
// }

// export const multiSet = async (key,item) => {
//     try {
//         await AsyncStorage.multiSet([key,item])
//     } catch (e) {
//         //save error
//     }

//     console.log("Multi Set Done.")
// }

// export const getAllKeys = async () => {
//     let keys = []
//     try {
//         keys = await AsyncStorage.getAllKeys()
//     } catch (e) {
//         // read key error
//     }

//     console.log(keys)
//     // example console.log result:
//     // ['@MyApp_user', '@MyApp_key']
// }



// // export const setStringValue = async (value) => {
// //     try {
// //         await AsyncStorage.setItem('key', value)
// //     } catch (e) {
// //         console.error('saving data error');
// //     }

// //     console.log('Set String Value Done.')
// // }

// // export const getMyStringValue = async () => {
// //     try {
// //         return await AsyncStorage.getItem('@key')
// //     } catch (e) {
// //         // read error
// //     }

// //     console.log('getMyStringValue Done.')
// // }

// // export const setObjectValue = async (value) => {
// //     try {
// //         const jsonValue = JSON.stringify(value)
// //         await AsyncStorage.setItem('key', jsonValue)
// //     } catch (e) {
// //         // save error
// //     }

// //     console.log('Set Object Value Done.')
// // }

// // export const getMyObject = async () => {
// //     try {
// //         const jsonValue = await AsyncStorage.getItem('@key')
// //         return jsonValue != null ? JSON.parse(jsonValue) : null
// //     } catch (e) {
// //         // read error
// //     }

// //     console.log('Done.')

// // }

// // export const retrieveItem = async key => {
// //     try {
// //         const retrievedItem = await AsyncStorage.getItem(key);
// //         const item = JSON.parse(retrievedItem);
// //         let _item = setStoreItem(item);
// //         console.log("_item: ", _item)

// //         return item;
// //     } catch (error) {
// //         console.log(error.message);
// //     }
// //     return
// // }



// export const clearAll = async () => {
//     try {
//         await AsyncStorage.clear()
//     } catch (e) {
//         // clear error
//     }

//     console.log('LOGOUT DONE.')
// }


// // TODO: FIGURING
// // export function useAsyncStorage(defaultValue) {
// //     export const [storageItem, setStoreItem] = useState([]);
// //     export const [storageItems, setStoreItems] = useState([]);

// //     useEffect(() => {
// //         getStorageValue();
// //     }, []);

// //     async function getStorageValue() {
// //         let value = defaultValue;
// //         try {
// //             value = (await AsyncStorage.getItem(key)) || defaultValue;
// //         } catch (e) {
// //             // handle here
// //         } finally {
// //             updateStorageValue(value);
// //         }
// //     }

// //     async function updateStorage(newValue) {
// //         try {
// //             await AsyncStorage.setItem(key, newValue);
// //         } catch (e) {
// //             // handle here
// //         } finally {
// //             getStorageValue();
// //         }
// //     }

// //     return [storageItem, storageItems];
// // }