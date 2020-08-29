import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, Dimensions, Alert, Image, TouchableOpacity, Text, ScrollView, SafeAreaView, Constants } from "react-native"
import { useHistory } from "react-router-dom";
import AsyncStorage from '@react-native-community/async-storage';

// import { KEYS, setItem, getItem, clearAll } from '../utils/myLocationsStorage';
// import { KEYS, storeData, setItem, getItem, multiSet, multiGet, getMyStringValue, getMyObject, getAllKeys, clearAll } from '../utils/myLocationsStorage';
import { addCategory, updateCategory, removeCategory } from '../action/modifyActions';
import MyCategoriesController from "../actionController/MyCategoriesController";
import Category from "../screens/Category";
import Location from "../screens/Location";

import HeaderBar from "../components/HeaderBar";

const components = { MyCategoriesController, Category, Location };

const CurrentComponentRouter = (props) => {
    const CurrentComponent = props.currentComponent;
    if (!CurrentComponent) return <View />
    return (
        <CurrentComponent
            props={props}
        />)
};


export default function Index(props) {

    const [componentIndex, setComponentIndex] = useState(0);
    const [renderedCategory, setRenderedCategory] = useState([]);
    const [renderedCategories, setRenderedCategories] = useState([]);
    const [renderedLocation, setRenderedLocation] = useState([]);

    const [storageItem, setStoreItem] = useState([]);
    const [storageItems, setStoreItems] = useState([]);

    const componentKeys = ["MyCategoriesController", "Category", "Location"];
    // const headers = { MyCategoriesController: "Categories", Category: renderedCategory, Location: renderedCategory };
    const headers = { MyCategoriesController: "Categories", Category: renderedCategory, Location: renderedLocation };

    const [dialogOpen, setDialogOpen] = useState(false);
    const [updateOpen, setUpdateOpen] = useState(false);
    const [showBack, setShowBack] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [logout, setLogout] = useState(false);


    // load from storage
    // let item = getItem(KEYS.CATEGORY) || [];
    // let items = getItem(KEYS.CATEGORIES) || [];

    useEffect(() => {
        // console.log('componentIndex props: ' + componentIndex);
        // console.log('showMenu props: ' + showMenu);
        // clearAll();        
        //TODO: add logout item to top menu
        // if (logout) { clearAll(); console.log('logout: ' + logout); setLogout(false); }
        // return clearAll()
    }, [])

    useEffect(() => {
        console.log("componentKeys[componentIndex]: ", componentKeys[componentIndex]);

        // console.log("Storage Rendered Category: ", item);
        console.log("Root Current Category: ", renderedCategory);
        // console.log('Storage Rendered Categories: : ', items);
        console.log("Root Current Category: ", renderedCategories);

        if (componentIndex < 0) {
            setShowBack(false);
            initStorage();
        }
        if (componentIndex > 0) {
            setShowBack(true);
            initStorage();
        }
        // todo: add to set 2 dimantions containet to hold the category item item(id,name, locations list {name, address, coordinates, and category}).
    }, [renderedCategory, componentIndex])

    let history = useHistory();

    // set the new category
    const renderedCategoryHandler = async (categoryNode) => {
        setRenderedCategory(categoryNode);
        // item = setItem(KEYS.CATEGORIES, JSON.stringify(categoryNode))
        // item = getItem(KEYS.CATEGORIES, JSON.stringify(categoryNode))
    }

    // update the categories list
    const renderedCategoriesHandler = async (categoryListNode) => {
        setRenderedCategories(addCategory(renderedCategories, categoryListNode));
        // TODO: Asynch Storage
        // items = multiSet(KEYS.CATEGORIES, item)
        // const result = setItem(KEYS.CATEGORIES, JSON.stringify(renderedCategories));
        // console.warn("SET ITEMS", result)
    }

    const onUpdateHandler = (renderedCategories, renderedCategory, editCategory) => {
        console.log("updateOpen: ", updateOpen)

        // Alert.alert("Update Category", "Are you sure you want to delete '" + editCategory + "'?");
        // TODO: confirmationAlert cancelable
        // confirmation = confirmationAlert("Delete Category", "Are you sure you want to delete");
        // if (confirmation) {
        setRenderedCategories(updateCategory(renderedCategories, renderedCategory, editCategory));
        if (showMenu) setShowMenu(false);
        setComponentIndex(componentIndex - 1);
        // removeValue(deleteItem);
    };

    const onDeleteHandler = deleteItem => {
        Alert.alert("Delete Category", "Are you sure you want to delete '" + deleteItem + "'?");
        // TODO: confirmationAlert cancelable
        // confirmation = confirmationAlert("Delete Category", "Are you sure you want to delete");
        // if (confirmation) {
        setRenderedCategories(removeCategory(renderedCategories, deleteItem));
        if (showMenu) setShowMenu(false);
        setComponentIndex(componentIndex - 1);
        // removeValue(deleteItem);
    };


    const initStorage = () => {
        // setRenderedCategory(getItem(KEYS.CATEGORY) || []);
        // setRenderedCategories(getItem(KEYS.CATEGORIES) || []);
        // setRenderedCategories(multiGet(getItem(KEYS.CATEGORIES)) || []);
        setRenderedCategory(renderedCategory);
        setRenderedCategories(renderedCategories);
    }


    const menuBarActionHandler = (action, backHistory) => {
        console.warn("SET NEW Location", action)
        switch (action) {
            case "addLocation":
                onAddHandler(action);
                break;
            case "editCategory":
                setUpdateOpen(true);
                // onUpdateHandler(action);
                break;
            case "deleteCategory":
                console.log('action: ' + action);
                onDeleteHandler(renderedCategory);
                break;
            case "resetCategories":
                console.log('action: ' + action);
                setLogout(true);
                break;
            case "onOpenLocation":
                onRead();
                break;
            default:
                return next(action);
        }
    };

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="rgba(0,88,155,1)" />

            <HeaderBar
                componentIndex={componentIndex}

                handleMenu={(subroute, _, action = _) => {
                    menuBarActionHandler(subroute, action);
                }}

                renderedCategories={renderedCategories}
                onUpdateCategories={renderedCategoriesHandler}

                renderedCategory={renderedCategory}
                onUpdateCategory={renderedCategoryHandler}

                header={headers[componentKeys[componentIndex]]}
                onBack={() => {
                    if (showMenu) setShowMenu(false);
                    setComponentIndex(componentIndex - 1);
                }}

                // onActionMenu={menuBarActionHandler}
                showMenu={showMenu}
                setShowMenu={() => { setShowMenu(!showMenu); }}

                onDelete={onDeleteHandler}
                onActionMenu={(action) => { menuBarActionHandler(action); }}
                onLogout={setLogout}

                dialogOpen={dialogOpen}
                setDialogOpen={() => { setDialogOpen(!dialogOpen); }}

                updateOpen={updateOpen}
                setUpdateOpen={() => { setUpdateOpen(!updateOpen); }}

                style={styles.header}
            />

            {/* <ScrollView style={styles.scrollView}> */}

                <CurrentComponentRouter
                    currentComponent={components[componentKeys[componentIndex]]}
                    componentIndex={componentIndex}

                    renderedCategories={renderedCategories}
                    onUpdateCategories={renderedCategoriesHandler}

                    renderedCategory={renderedCategory}
                    onUpdateCategory={renderedCategoryHandler}

                    showMenu={showMenu}
                    setShowMenu={() => { setShowMenu(!showMenu); }}
                    onActionMenu={(_action) => { handleAction(action); }}

                    showBack={showBack}
                    onBack={() => { setComponentIndex(componentIndex - 1) }}
                    onNext={() => { setComponentIndex(componentIndex + 1) }}

                    dialogOpen={dialogOpen}
                    setDialogOpen={() => { setDialogOpen(!dialogOpen); }}

                    onUpdateHandler={onUpdateHandler}

                    updateOpen={updateOpen}
                    setUpdateOpen={() => { setUpdateOpen(!dialogOpen); }}

                    onDismiss={() => { setDialogOpen(false); }}

                    style={styles.componentStyle}
                />

            {/* </ScrollView> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    header: {
        zIndex: 100,
        paddingBottom: 15
    },
    scrollView: {
        zIndex: 1,
    },
});