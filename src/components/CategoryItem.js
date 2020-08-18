import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';


const CategoryItem = props => {
    return (
        // <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete}>
        <TouchableNativeFeedback
            onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem} >
                {/* itemData.item.value */}
                <Text>{props.title}</Text>
            </View>
        </TouchableNativeFeedback>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    },
});
export default CategoryItem;