import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    Button
} from "react-native";
// import Icon from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
// import Feather from "react-native-vector-icons/MaterialIcons";


const ActionMenu = (props) => {

    // useEffect(() => {
    //     // TODO: validate currect index
    //     console.log("show componentIndex: ", props)
    //     console.warn("show props.renderedCategory): ", props.renderedCategory);
    //     //             props.myLocationList.filter((props.renderedCategory => props.renderedCategory === props.renderedCategory)))
    //     // console.warn("show props.myLocationList[renderedCategory]: ", props.myLocationList)
    // }, [props.componentIndex]);



    const onDeleteHandler = (category) => {
        console.log('TO BE DELETED: ' + category);
        let newMyStays = [];
        for (let i = 0; i < myLocationList.length; i++) {
            if (i !== myLocationList.indexOf(deletItem)) {
                console.log('Iterate VALUE ', myLocationList);
                newLocationList.push(myLocationList[i])
            }
        }
        props.setMyLocationList(newLocationList)
        // const _myLocationList = props.myLocationList.filter((name) => props.renderedCategory !== category)
        console.log("newLocationList: ", newLocationList);
        return _myLocationList
    };
    // setIsUpdateList(true);

    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <TouchableOpacity
                    // onPress={() => { props.onDelete(props.renderedCategory) }}
                    // onPress={() => { props.onActionMenu("addLocation") }}
                    tag="Add Location"
                    style={styles.actionButton}
                >
                    <Text style={styles.textMenuItem}>{props.tag || 'Add Location'}</Text>
                    <FontAwesomeIcon name="add-location" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity
                    // onPress={() => { props.onActionMenu("editCategory") }}
                    tag='Edit Location'
                    style={styles.actionButton}
                >
                    <Text style={styles.textMenuItem}>{props.tag || 'Edit Location'}</Text>
                    <FontAwesomeIcon name="edit-location" style={styles.icon} />

                </TouchableOpacity>

                <TouchableOpacity
                    // onPress={props.onActionMenu('deleteCategory', props.renderedCategory) }
                    // onPress={(menuItem) => { props.onActionMenu("addLocation") }}
                    // onPress={() => { props.onDelete(props.renderedCategory) }}
                    // onPress={() => { props.onActionMenu("deleteCategory"), props.myLocationList[renderedCategory] }}
                    onPress={() => { onDeleteHandler(props.renderedCategory) }}
                    tag="Delete Location"
                    style={styles.actionButton}
                >
                    <Text style={styles.textMenuItem}>{props.tag || 'Delete Category'}</Text>
                    <Icon name="map-marker-off" style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        flex: 1,
        backgroundColor: "rgba(0,88,155,1.0)",
        width: 'auto',
        height: 'auto',
        top: 62,
        zIndex: 1000,
        left: windowWidth - 175,
        // left: 0,
        // alignItems: 'center',
        // right: -2000,
    },
    group: {
        alignItems: "flex-end",
        zIndex: 20,
        justifyContent: "center",
        width: 180,
        height: 140
    },
    textMenuItem: {
        textAlign: 'right',
        alignSelf: 'stretch',
        color: 'white',
        fontSize: 16,
        borderBottomWidth: 0.7,
        borderColor: 'white',
        width: 130,
    },
    actionButton: {
        padding: 8,
        flexDirection: "row",
        // paddingHorizontal: 10
    },
    icon: {
        color: 'white',
        fontSize: 20,
        paddingHorizontal: 5,
        textAlign: 'right',
        alignSelf: 'stretch',
    },
});

export default ActionMenu;
