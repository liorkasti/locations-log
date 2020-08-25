import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, Text, ScrollView, SafeAreaView, Constants } from "react-native"
import { useHistory } from "react-router-dom";
import AsyncStorage from '@react-native-community/async-storage';

import { KEYS, setItem, getItem, clearAll } from '../utils/myLocationsStorage';

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

    // load from storage
    let item = getItem(KEYS.CATEGORY) || [];
    let items = getItem(KEYS.CATEGORIES) || [];

    const [componentIndex, setComponentIndex] = useState(0);
    const [renderedCategory, setRenderedCategory] = useState([]);
    const [renderedCategories, setRenderedCategories] = useState([]);
    const [renderedLocation, setRenderedLocation] = useState([]);


    const componentKeys = ["MyCategoriesController", "Category", "Location"];
    // const headers = { MyCategoriesController: "Categories", Category: renderedCategory, Location: renderedCategory };
    const headers = { MyCategoriesController: "Categories", Category: renderedCategory, Location: renderedLocation };

    const [dialogOpen, setDialogOpen] = useState(false);
    const [showBack, setShowBack] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const [logout, setLogout] = useState(false);

    useEffect(() => {

        console.log("Storage Rendered Category: ", item);
        console.log("Root Current Category: ", renderedCategory);
        console.log('Storage Rendered Categories: : ', items);
        console.log("Root Current Category: ", renderedCategories);
        if (componentIndex < 0) {
            setShowBack(false);
            initStorage();
        }
        if (componentIndex > 0) {
            // setShowBack(true); initStorage();
        }
        // if (logout) { clearAll(); }
        // clearAll();

        // todo: add to set 2 dimantions containet to hold the category item item(id,name, locations list {name, address, coordinates, and category}).
    }, [renderedCategory,componentIndex])

    useEffect(() => {
    }, [componentIndex])

    let history = useHistory();

    // set the new category
    const renderedCategoryHandler = async (categoryNode) => {
        setRenderedCategory(categoryNode);
        item = setItem(KEYS.CATEGORY, JSON.stringify(categoryNode));
    }

    // update the categories list
    const renderedCategoriesHandler = async (categoryListNode) => {

        setRenderedCategories(renderedCategories => [
            ...renderedCategories,
            { id: Math.random().toString(), name: categoryListNode }
        ]);

        items = setItem(KEYS.CATEGORIES, JSON.stringify(categoryListNode))
        const result = setItem(KEYS.CATEGORIES, JSON.stringify(renderedCategories));
        // console.warn("SET ITEMS", result)
    }

    const menuBarActionHandler = (action) => {
        switch (action) {
            case "addLocation":
                onAddHandler(action);
                break;
            case "editCategory":
                onUpdateHandler(action);
                break;
            case "deleteCategory":
                console.log('777777777777777: ' + action);
                onDeleteHandler(action);
                break;
            case "onOpenLocation":
                onRead();
                break;
            default:
                return next(action);
        }
    };


    const onDeleteHandler = deletItem => {
        console.log('deletItem: ' + deletItem);
    };


    const initStorage = () => {
        setRenderedCategory(renderedCategory);
        setRenderedCategories(renderedCategories);
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="rgba(0,88,155,1)" />

            <HeaderBar
                componentIndex={componentIndex}

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

                setDialogOpen={() => { setDialogOpen(!dialogOpen); }}
                dialogOpen={dialogOpen}

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

                onDismiss={() => { setDialogOpen(false); }}
                style={styles.componentStyle}
            />

            {/* </ScrollView> */}
        </View>
    );
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

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