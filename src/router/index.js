import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, Text, ScrollView, SafeAreaView, Constants } from "react-native"
import { useHistory } from "react-router-dom";

import MyLocationController from "../placesController/MyLocationController";
import Category from "../screens/Category";
import Location from "../screens/Location";

import HeaderBar from "../components/HeaderBar";

const components = { MyLocationController, Category, Location };

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
    const [myLocationList, setMyLocationList] = useState([]);
    const [currentCategories, setCurrentCategories] = useState([]);

    const [isAddMode, setIsAddMode] = useState(false);
    const [isCancelMode, setIsCancelMode] = useState(false);

    const [dialogOpen, setDialogOpen] = useState(false);
    const [showBack, setShowBack] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const componentKeys = ["MyLocationController", "Category", "Location"];
    const headers = { MyLocationController: "My Locations", Category: currentCategories, Location: currentCategories };


    useEffect(() => {
        if (componentIndex < 0) { setShowBack(false); }
        if (componentIndex > 0) { setShowBack(true); }
        // todo: add to set 2 dimantions containet to hold the category item item(id,name, locations list {name, address, coordinates, and category}).
    }, [])

    useEffect(() => {
        console.log("Root Current Category: ", currentCategories);
        console.log("Root List Category: ", myLocationList);
        console.log("Root componentIndex: ", componentIndex);
        // todo: add to set 2 dimantions containet to hold the category item item(id,name, locations list {name, address, coordinates, and category}).
    }, [componentIndex])

    let history = useHistory();

    const onCreate = (name) => {
        categories(name)
    }

    const handleAction = (action, backHistory) => {
        switch (action) {
            case "addLocation":
                onEdit(stay);
                break;
            case "editCategory":
                onEdit(stay);
                break;
            case "deleteCategory":
                onDelete();
                break;
            case "onOpenLocation":
                onDelete();
                break;
        }
    };


    const addMyLocationHandler = currentCategories => {
        setMyLocationList(myLocationList => [
            ...myLocationList,
            { id: Math.random().toString(), name: currentCategories.name }
        ]);
    }


    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="rgba(0,88,155,1)" />

            <HeaderBar
                componentIndex={componentIndex}
                currentCategories={currentCategories}

                header={headers[componentKeys[componentIndex]]}
                onBack={() => {
                    if (showMenu) setShowMenu(false);
                    addMyLocationHandler;
                    setCurrentCategories;
                    setComponentIndex(componentIndex - 1);
                }}

                onActionMenu={(_action) => { handleAction(action); }}
                showMenu={showMenu}

                setShowMenu={() => { setShowMenu(!showMenu); }}
                setDialogOpen={() => { setDialogOpen(!dialogOpen); }}
                dialogOpen={dialogOpen}

                style={styles.header}

            />

            {/* <ScrollView style={styles.scrollView}> */}
            <CurrentComponentRouter
                currentComponent={components[componentKeys[componentIndex]]}
                componentIndex={componentIndex}

                myLocationList={myLocationList}
                onUpdateList={() => { addMyLocationHandler }}
                // currentCategories={currentCategories}
                onUpdateCategory={setCurrentCategories}

                showMenu={showMenu}
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