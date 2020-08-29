import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Alert } from "react-native";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";



const ActionMenu = (props) => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

    const onOptionSelect = () => {
        // alert(`Selected number: ${value}`);
        Alert.alert("Selected add menu item");
        console.log("props: ", props.onActionMenu)
    
        this.setState({ opened: true });
        this.setState(onActionMenu(value))
    };

    return (
        <View style={styles.container}>
            <View style={styles.group}>
                <TouchableOpacity
                    // onPress={onOptionSelect}
                    onPress={onOptionSelect}

                    tag="Add Location"
                    style={styles.actionButton}
                >
                    {/* <Text style={{ color: 'red' }}>Two</Text> */}
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
                    onPress={() => { props.onDelete(props.renderedCategory); }}
                    // onPress={() => { props.onActionMenu("deleteCategory"), props.renderedCategory }}
                    tag="Delete Category"
                    style={styles.actionButton}
                >
                    <Text style={styles.textMenuItem}>{props.tag || 'Delete Category'}</Text>
                    <Icon name="map-marker-remove-variant" style={styles.icon} />
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => { props.onLogout(); }}
                    // onPress={() => { props.onActionMenu("resetCategories") }}
                    tag="Reset Categories"
                    style={styles.actionButton}
                >
                    <Text style={styles.textMenuItem}>{props.tag || 'Reset Categories'}</Text>
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
    },
    group: {
        alignItems: "flex-end",
        justifyContent: "center",
        backgroundColor: "#111111aa",
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        width: 200,
        height: 200,
        top: 52,
        left: 212,
        zIndex: 6000,
    },
    textMenuItem: {
        textAlign: 'right',
        alignSelf: 'stretch',
        color: 'white',
        fontSize: 16,
        borderBottomWidth: 0.7,
        borderColor: 'white',
        width: 150,
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
