import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import toastMaker from '../utils/toastMaker';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const MyInputText = props => {
  const [enteredInput, setEnteredInput] = useState("");

  useEffect(() => {
    // console.warn("CategoryInput props: ", props);
  }, [])

  // console.warn("enteredText: ", enteredInput);

  const textInputHandler = enteredText => {
    setEnteredInput(enteredText);
  };

  const addTextHandler = () => {
    // console.warn("enteredText: ", enteredInput);    

    if (enteredInput.length > 0) {
      props.onAdd(enteredInput);
      setEnteredInput('');
    } else {
      // TODO: Fix Toast No name has been ebtered. https://www.npmjs.com/package/react-native-toast-message
      Alert.alert("No input.");
      console.log("No name has been entered.");
      // toastMaker("No name has been entered");
      setEnteredInput('');
      // props.reloadStorage();
    }

  }

  return (
    <View style={styles.container}>
      {/* TODO: Add dinamic screen title for the message below*/}
      {/* <Text style={styles.textDialog}>Create a new {props.screen}</Text> */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Category name"
          style={styles.input}
          onChangeText={textInputHandler}
          value={enteredInput}
        />
      </View>
      <View style={styles.buttonContainer}>

        <TouchableOpacity
          onPress={props.onCancel}
          style={styles.cancleButton}
        >
          <Icon name="map-marker-down" style={styles.icon2} />
          <Text style={styles.textButton}>DONE</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={addTextHandler}
          style={styles.addButton}
        >
          <Icon name="map-marker-check" style={styles.icon1} />
          <Text style={styles.textAddButton}>ADD</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: 300,
  },
  input: {
    borderColor: 'black',
    borderWidth: 0.7,
    padding: 10,
    margin: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 300,
    justifyContent: 'space-around',
    // justifyContent: "center",
  },
  cancleButton: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderColor: 'rgba(0,88,155,1)',
    borderWidth: 0.7,
    width: '45%',
  },
  addButton: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "rgba(0,88,155,1)",
    padding: 10,
    marginVertical: 10,
    borderColor: 'rgba(0,88,155,1)',
    borderWidth: 0.7,
    width: '45%',
  },
  textAddButton: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    left: -5
  },
  textButton: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'rgba(0,88,155,1)',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    left: -5
  },
  icon1: {
    color: 'white',
    fontSize: 20,
    left: -5

    // paddingHorizontal: 5,
    // textAlign: 'right',
    // alignSelf: 'stretch',
  },
  icon2: {
    color: 'rgba(0,88,155,1)',
    fontSize: 20,
    left: -5
    // paddingHorizontal: 5,
    // textAlign: 'right',
    // alignSelf: 'stretch',
  },
});

export default MyInputText;
