import React, { useState, useEffect } from "react";
import {
    View, StyleSheet, Dimensions, Image,
    TouchableOpacity, Text, ScrollView, SafeAreaView, Constants
} from "react-native"
import { useHistory } from "react-router-dom";

import HeaderBar from "./components/HeaderBar";
import { Categories } from "./Categories";
import { Location } from "./Location";

const components = { Categories, Location };

const createdAt = new Date().getTime();

export default function Index(props) {
    const [componentIndex, setComponentIndex] = useState(0);
    const [currentIndex, setCurrentIndex] = useState();
    
    let history = useHistory();
    
    const componentKeys = ["Categories", "Location"];
    const headers = { Categories: "Categories", Location: "Location" }

    //user finished create a stay
    function onHome() {
        history.push("/home");
    };

    const CurrentComponentRouter = (props) => {
        const CurrentComponent = components[componentKeys[componentIndex]];
        console.warn("current component", CurrentComponent)
        if (!CurrentComponent) return <View />
        return (
            <CurrentComponent
                style={styles.componentStyle}

                //if builder x component has back button
                //it's button should have onPress={()=>{props.onNext}}
                onBack={() => {
                    setComponentIndex(componentIndex - 1)
                }}
            />)
    }

    return (
        <View style={styles.container}>
            <HeaderBar
                // screenWidth={windowWidth}
                style={styles.header}
                header={headers[componentKeys[componentIndex]]}
                onBack={() => setComponentIndex(componentIndex - 1)}
            />

            <ScrollView style={styles.scrollView}>
                <CurrentComponentRouter />
            </ScrollView>
        </View>
    );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container: {
        // padding: 10,
        backgroundColor: "rgba(2,172,235,1)",
        flex: 1,
        flexDirection: "column",
        height: windowHeight,
        width: windowWidth,
        alignItems: "center",
    },
    header: {
        zIndex: 100000,
        paddingBottom: 15
    },
    scrollView: {
        zIndex: 1,
        marginTop: 80
    },
});