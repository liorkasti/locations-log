import React, { useState, useEffect } from "react";

import AsyncStorage from '@react-native-community/async-storage';

import {
    findLocationIndex,
    filterLocations,
    filterLocationsByCategory,
} from './myStorageHelper';

const KEYS = {
    CATEGORIES: 'categories',
    LOCATIONS: 'locations',
}

const [categoryList, setCategoryList] = useState([]);

export const addStorageCategoryList = async => {
    console.log("sssssssssssssssssssssssstorage");
    try {
        return appendItemToArray(CATEGORIES, category);
    } catch (error) {
        // console.error(`localStorageUtility.addCategory: ${error}`);
    }
}

const appendItemToArray = async (key, item) => {
    try {
        const savedItems = await getItem(key);
        savedItems.unshift(item);
        await AsyncStorage.setItem(key, JSON.stringify(savedItems));
        return savedItems;
    } catch (error) {
        console.error(`localStorageUtility.appendItemToArray: ${error}`);
    }
};

const getItem = async key => {
    try {
        const rawSavedItem = await AsyncStorage.getItem(key);
        let savedItem = getDefaultValuePerKey(key);
        if (!!rawSavedItem) {
            savedItem = JSON.parse(rawSavedItem);
        }
        return savedItem;
    } catch (error) {
        console.error(`localStorageUtility.getItem: ${error}`);
    }
};

const getAllStorage = async () => {
    try {
        let storage = {};
        const rawData = await AsyncStorage.multiGet(Object.values(KEYS));
        rawData.forEach(data => {
            const key = data[0];
            let value = data[1];
            if (!value) {
                storage[key] = getDefaultValuePerKey(key);
            } else {
                switch (key) {
                    case KEYS.CATEGORIES:
                    case KEYS.LOCATIONS:
                        storage[key] = JSON.parse(value);
                        break;
                    case SETTINGS.LOCATIONS_SORT:
                    case SETTINGS.CATEGORIES_SORT:
                        storage[key] = value;
                        break;
                    case SETTINGS.GROUP_LOCATIONS:
                        storage[key] = value;
                        break;
                }
            }
        });
        return storage;
    } catch (error) {
        console.error(`localStorageUtility.getAllStorage: ${error}`);
    }
};

export const getInitialStore = async () => {
    try {
        const store = {
            categoryReducer: [],
            locationReducer: [],
            settingsReducer: {},
        };
        const storage = await getAllStorage();
        store.categoryReducer.categories = storage[CATEGORIES];
        store.locationReducer.locations = storage[LOCATIONS];
        //   store.settingsReducer[SETTINGS.CATEGORIES_SORT] =
        //     storage[SETTINGS.CATEGORIES_SORT];
        //   store.settingsReducer[SETTINGS.LOCATIONS_SORT] =
        //     storage[SETTINGS.LOCATIONS_SORT];
        //   store.settingsReducer[SETTINGS.GROUP_LOCATIONS] =
        //     storage[SETTINGS.GROUP_LOCATIONS];
        return store;
    } catch (error) {
        console.error(`localStorageUtility.getInitialState: ${error}`);
    }
};