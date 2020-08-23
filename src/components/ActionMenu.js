import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Dimensions
} from "react-native";
// import Icon from "react-native-vector-icons/Feather";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
// import Feather from "react-native-vector-icons/MaterialIcons";


const ActionMenu = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.group}>
                {/* <TouchableOpacity
                    onPress={() => { props.onActionMenu("onOpenLocation") }}
                    tag="Open Location"
                    style={styles.actionButton}
                >
                    <Text style={styles.textMenuItem}>{props.tag || 'Open Location'}</Text>
                    <FontAwesomeIcon name="add-location" style={styles.icon} />
                </TouchableOpacity> */}
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
                    <FontAwesomeIcon name="edit-location" style={styles.icon} />

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { props.onActionMenu("deleteCategory") }}
                    tag="Delete Location"
                    style={styles.actionButton}
                >
                    <Text style={styles.textMenuItem}>{props.tag || 'Delete Location'}</Text>
                    <Icon name="map-marker-off-outline" style={styles.icon} />
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
        zIndex: 5000,
        left: windowWidth - 170,
        // left: 0,
        // alignItems: 'center',
        // right: -2000,
    },
    group: {
        alignItems: "flex-end",
        zIndex: 20,
        justifyContent: "center",
        width: 170,    
        height: 140        
    },
    textMenuItem: {
        textAlign: 'right', 
        alignSelf: 'stretch',
        color: 'white',
        fontSize: 16,
        borderBottomWidth:0.7,  
        borderColor: 'white',
        width: 200,
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
      },});

export default ActionMenu;
