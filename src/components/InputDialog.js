import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions, Button, TextInput } from "react-native";
// import EmptyView from './components/EmptyView';
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default function Categories(props) {
  const [inputValue, setInputValue] = useState("");

  const onChangeText = (newText) => {
    setInputValue(newText);
  }
  return (
    <View style={styles.container}>
      {
        props.dialogOpen &&
        <>
          <Text>dialog</Text>
          <TextInput
            style={styles.inputText}
            onChangeText={text => onChangeText(text)}
            value={inputValue}
            placeholder="Enter Category name"
          />
          <Button
            title="Add"
            onPress={props.onCreate}
            style={styles.addButton}
          />
          <Button
            title="Cancel"
            onPress={props.onDismiss}
            style={styles.cancleButton}
          />
        </>
      }
    </View>
  );
}


const screenHeight = Dimensions.get('window').height + 100;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  inputText: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  },
  addButton: {
    color: "#841584",
    // accessibilityLabel: "#ccc"
  },
  cancelButton: {

  },


});