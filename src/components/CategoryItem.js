import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

const CategoryItem = props => {
    return (
        // <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
        <TouchableNativeFeedback
            onPress={() => {
                props.onPress()
                props.onUpdateCategory(props.title)
                props.onUpdateCategories(props.renderedCategories)
                // console.log("props.title", props.title)
            }}
        >
            {/* onPress={props.onDelete.bind(this, props.id)} > */}
            < View style={styles.rowItem} >
                {/* itemData.item.value */}
                < Text > {props.title}</Text >
                <FontAwesomeIcon name="map-marker" style={styles.icon} />
            </View >
        </TouchableNativeFeedback >

    );
};

const styles = StyleSheet.create({
    rowItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ddd',
        borderColor: 'black',
        borderWidth: 0.7
    },
    icon: {
        color: "rgba(0,88,155,1)",
        fontSize: 20,
    },
});

export default CategoryItem;