import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const LocationCard = props => {

    useEffect(() => {

        const _props = JSON.stringify(props);
        console.log('LocationCard._props: ' + _props);
        // props = JSON.parse(props);
        console.log('LocationCard.props: ' + props);
        // console.log("Selected Location: ", _props.locationList)
        // console.log('locationDialogOpen: ' + locationDialogOpen);
        console.log('LocationList: ' + JSON.stringify(props.locationList));
        // console.log('LocationList: ' + JSON.stringify(locationList));

    }, [])

    return (
        // <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
        <TouchableNativeFeedback
            onPress={() => {
                props.onPress(props.onSelectedLocation(JSON.stringify(props.locationList).nameInput))
                // console.log("props.renderedCategories", props.renderedCategories)
            }}
        >
            {/* onPress={props.onDelete.bind(this, props.id)} > */}
            < View style={styles.rowItem} >
                {/* itemData.item.value  nameInput, addressInput, coordinates */}
                < Text > {JSON.stringify(props.locationList).nameInput}</Text >
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

export default LocationCard;