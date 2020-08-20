import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";


const CategoryItem = props => {
    return (
        <View style={styles.rowItem}>
            {/* <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}> */}
            <TouchableNativeFeedback
                onPress={() => props.onPress()}  >
                {/* onPress={props.onDelete.bind(this, props.id)} > */}
                <Text>{props.title}</Text>
                {/* itemData.item.value */}
            </TouchableNativeFeedback>
            <FontAwesomeIcon name="map-marker" style={styles.icon} />
        </View>
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
    textItem: {
        padding: 10,
        color: "rgba(0,88,155,1)"
    },
});
export default CategoryItem;