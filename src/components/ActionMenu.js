import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Alert } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";



const ActionMenu = (props) => {
    useEffect(() => {
        console.log("props", props);
    }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                onPress={() => { props.handleMenu("addLocation") }}
                tag="Add Location"
                style={styles.actionButton}
            >
                {/* <Text style={{ color: 'red' }}>Two</Text> */}
                <Text style={styles.textMenuItem}>{props.tag || 'Add Location'}</Text>
                <FontAwesomeIcon name="add-location" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { props.handleMenu("editCategory") }}
                tag='Edit Location'
                style={styles.actionButton}
            >
                <Text style={styles.textMenuItem}>{props.tag || 'Edit Location'}</Text>
                <FontAwesomeIcon name="edit-location" style={styles.icon} />

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { props.handleMenu("deleteCategory") }}
                // onPress={() => { props.onDelete(props.renderedCategory); }}
                tag="Delete Category"
                style={styles.actionButton}
            >
                <Text style={styles.textMenuItem}>{props.tag || 'Delete Category'}</Text>
                <Icon name="map-marker-remove-variant" style={styles.icon} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => { props.handleMenu("resetCategories") }}
                // onPress={() => { props.onActionMenu("resetCategories") }}
                tag="Reset Categories"
                style={styles.actionButton}
            >
                <Text style={styles.textMenuItem}>{props.tag || 'Reset Categories'}</Text>
                <Icon name="map-marker-off" style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
};

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        position: "absolute",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4287f5",
        backgroundColor: "#d4d8d9",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 10,
        width: 220,
        width: '50%',
        top: 0,
        right: 0,
        left: windowWidth - 265,
        left: '35%',
        zIndex: 999,
    },
    textMenuItem: {
        textAlign: 'right',
        alignSelf: 'stretch',
        color: 'white',
        fontSize: 16,
        borderBottomWidth: 0.7,
        borderColor: 'white',
        color: "#4287f5",
        width: 150,
    },
    actionButton: {
        paddingVertical: 8,
        flexDirection: "row",
        // paddingHorizontal: 10
    },
    icon: {
        color: 'white',
        color: "#4287f5",
        fontSize: 20,
        paddingHorizontal: 5,
        top: 2,
        textAlign: 'right',
        alignSelf: 'stretch',
    },
});

export default ActionMenu;
