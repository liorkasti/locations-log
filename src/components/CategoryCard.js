import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const CategoryCard = props => {
    return (
        // <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
        <TouchableNativeFeedback
            onPress={() => {
                props.onPress(props.onSelectedCategory(props.title))
                console.log("SelectedCategory: ", props.title)
                // console.log("props.renderedCategories", props.renderedCategories)
            }}
        >
            {/* onPress={props.onDelete.bind(this, props.id)} > */}
            < View style={styles.rowItem} >
                {/* itemData.item.value */}
                < Text > {props.title}</Text >
                <Icon name="map-marker-right" style={styles.icon} />
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
        width: '75%',
        backgroundColor: '#ddd',
        borderColor: 'black',
        borderWidth: 0.7
    },
    icon: {
        color: "#4287f5",
        fontSize: 20,
    },
});

export default CategoryCard;