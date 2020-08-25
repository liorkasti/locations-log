import React, { useState, useEffect } from "react";
import { Alert } from "react-native"
import AsyncStorage from '@react-native-community/async-storage';

import {
    findLocationIndex,
    filterLocations,
    filterLocationsByCategory,
} from './myStorageHelper';

export const KEYS = {
    CATEGORIES: 'categories',
    CATEGORY: 'category',
    LOCATIONS: 'locations',
}

getMultiple = async () => {

    let values
    try {
      values = await AsyncStorage.multiGet(['@MyApp_user', '@MyApp_key'])
    } catch(e) {
      // read error
    }
    console.log(values)
  
    // example console.log output:
    // [ ['@MyApp_user', 'myUserValue'], ['@MyApp_key', 'myKeyValue'] ]
  }

export const setItem = async (key, item) => {
    try {
        const result = await AsyncStorage.setItem(key, JSON.stringify(item))
        console.log(key + ": ", items)
        console.log('result: ', item)
        return result;
    } catch (error) {
        console.error('saving data error');
        // Alert.alert('saving data error');
        // console.error(`localStorageUtility.getItem: ${error}`);
    }
};


export const getItem = async key => {
    try {
        const rawSavedItem = await AsyncStorage.getItem(key);
        // let savedItem = getDefaultValuePerKey(key);
        // if (!!rawSavedItem) {
        //     savedItem = JSON.parse(rawSavedItem);
        // }
        return JSON.parse(rawSavedItem);
    } catch (error) {
        console.error('saving data error');
    }
};

export const setItems = async (key, items) => {
    try {
        const result = await AsyncStorage.setItem(key, JSON.stringify(items))
        // console.log(key + ": ", item)
        console.log('result: ', JSON.stringify(items))
        return result;
    } catch (error) {
        console.error('saving data error');
        // Alert.alert('saving data error');
        // console.error(`localStorageUtility.getItem: ${error}`);
    }
};

export const getItems = async key => {
    try {
        const rawSavedItem = await AsyncStorage.getItem(key);
        // let savedItem = getDefaultValuePerKey(key);
        // if (!!rawSavedItem) {
        //     savedItem = JSON.parse(rawSavedItem);
        // }
        return JSON.stringify(rawSavedItem);
    } catch (error) {
        console.error('saving data error');
    }
};



// export const storeState = async (key, items) => {
//     const [storeState, setStoreState] = useState([]);

//     console.log('JSON.parse([...storeState, { items }]', JSON.parse([...storeState, { items }]);

//     try {
//         storeState = () => {
//             this.setStoreState(key, JSON.parse([...storeState, { items }]));
//         }
//         return storeState;
//     } catch (error) {
//         Alert.alert('saving data error');
//         console.error(`localStorageUtility.getItem: ${error}`);
//     }
// };

export const deleteCategory = async key => {
    try {


        return {};
    } catch (error) {
        console.error('saving data error');
    }
};