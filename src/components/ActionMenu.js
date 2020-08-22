import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";


const ActionMenu = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <TouchableOpacity
                    onPress={() => { props.onActionMenu("onOpenLocation") }}
                    tag="Open Location"
                    style={styles.actionButton}
                >
                    <Text style={styles.textMenuItem}>{props.tag || 'Open Location'}</Text>
                    <FontAwesomeIcon name="add-location" style={styles.icon} />

                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { props.onActionMenu("addLocation") }}
                    tag="Add Location"
                    style={styles.actionButton}
                >
                    <Text style={styles.textMenuItem}>{props.tag || 'Add Location'}</Text>
                    <FontAwesomeIcon name="add-location" style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => { props.onActionMenu("editCategory") }}
                    tag='Edit Location'
                    style={styles.actionButton}
                >
                    <Text style={styles.textMenuItem}>{props.tag || 'Edit Location'}</Text>
                    <FontAwesomeIcon name="add-location" style={styles.icon} />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { props.onActionMenu("deleteCategory") }}
                    tag="Delete Location"
                    style={styles.actionButton}
                >
                    <Text style={styles.textMenuItem}>{props.tag || 'Add Location'}</Text>
                    <FontAwesomeIcon name="add-location" style={styles.icon} />
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
        backgroundColor: "rgba(0,88,155,1)",
        width: 'auto',
        height: 'auto',
        top: 62,
        zIndex: 5000,
        left: windowWidth - 180,
        // left: 0,
        // alignItems: 'center',
        // right: 0,
    },
    group: {
        alignItems: "flex-end",
        zIndex: 20,
        justifyContent: "center",
        margin: 20,
    },
    textMenuItem: {
        textAlign: "center",
        color: 'white',
        fontSize: 16,
    },
    actionButton: {
        padding: 8,
        flexDirection: "row",
    },
    icon: {
        color: 'white',
        fontSize: 20,
        paddingHorizontal: 10
      },});

export default ActionMenu;
