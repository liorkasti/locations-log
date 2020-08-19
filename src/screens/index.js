import React, { useState, useEffect } from "react";
import { View, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, Text, ScrollView, SafeAreaView, Constants } from "react-native"
import { useHistory } from "react-router-dom";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

import Categories from "./Categories";
import Location from "./Location";

import HeaderBar from "../components/HeaderBar";

const components = { Categories, Location };

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
    const [dialogOpen, setDialogOpen] = useState(false);
    const [showBack, setShowBack] = useState(false);
    // const [showAdd, setShowAdd] = useState(false);

    const componentKeys = ["Categories", "Location"];
    const headers = { Categories: "Categories", Location: "Location" };

    const categories = []


    useEffect(() => {
        console.warn(componentIndex);
        if (componentIndex > componentKeys.length - 1) {
            history.push("/");
        }
        if (componentIndex < 0) {
            setShowBack(false);
        }
        if (componentIndex > 0) {
            setShowBack(true);
        }
    }, [componentIndex])

    let history = useHistory();

    const onCreate = (name) => {

        categories(name)
    }
    useEffect(() => {
        console.warn("dialog open", dialogOpen)
    }, [dialogOpen])

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="rgba(0,88,155,1)" />

            <HeaderBar
                componentIndex={componentIndex}
                
                header={headers[componentKeys[componentIndex]]}                
                onBack={() => { setComponentIndex(componentIndex - 1) }}

                // setShowAdd={() => { setShowAdd(!showAdd); }}
                setDialogOpen={() => { setDialogOpen(!dialogOpen); }}
                // showAdd={showAdd}
                dialogOpen={dialogOpen}
                // showBack={() => { componentIndex == 0 ? setShowBack(showBack) : setShowBack(!showBack)}}
                // onCreate={() => { setDialogOpen(true); }}
                style={styles.header}
            />

            <ScrollView style={styles.scrollView}>
                <CurrentComponentRouter
                    currentComponent={components[componentKeys[componentIndex]]}
                    componentIndex={componentIndex}

                    onBack={() => { setComponentIndex(componentIndex - 1) }}
                    onNext={() => { setComponentIndex(componentIndex + 1) }}
                    
                    // setShowAdd={() => { setShowAdd(!showAdd); }}
                    setDialogOpen={() => { setDialogOpen(!dialogOpen); }}
                    // setShowAdd={setShowAdd}
                    showBack={showBack}
                    dialogOpen={dialogOpen}
                    // onDismiss={() => { setDialogOpen(false); }}
                    
                    style={styles.componentStyle}
                />

            </ScrollView>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // flexDirection: "column",
        // height: windowHeight,
        // width: windowWidth,
        alignItems: "center",
    },
    header: {
        zIndex: 100,
        paddingBottom: 15
    },
    scrollView: {
        zIndex: 1,
        // marginTop: 80
    },
});