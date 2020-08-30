import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import toastMaker from '../utils/feedbackGenerator';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ModifyLocation = props => {
  const [nameInput, setNameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");

  useEffect(() => {
    // console.log("CategoryInput props: ", props);
  }, [])

  const nameInputHandler = enteredText => {
    setNameInput(enteredText);
  };

  const addressInputHandler = addressInput => {
    setAddressInput(addressInput);
  };

  const addLocationHandler = () => {
    // console.warn("enteredText: ", enteredInput);    
    if (nameInput.length > 0 && addressInput.length > 0) {
      // props.onSave(nameInput, addressInput);
      props.onSave(nameInput, addressInput);
      setNameInput('');
      setAddressInput('');
    } else {
      // TODO: Fix Toast No name has been ebtered. https://www.npmjs.com/package/react-native-toast-message
      Alert.alert("No input.");
      console.log("No name has been entered.");
      // toastMaker("No name has been entered");
    }
  }

  const updateTextHandler = () => {
    if (nameInput.length > 0) {
      props.onUpdate(nameInput);
      // props.setIsUpdateMode();
      // props.setUpdateOpen;
      // props.visible()
      setNameInput('');
    } else {
      // TODO: Fix Toast No name has been ebtered. https://www.npmjs.com/package/react-native-toast-message
      Alert.alert("No input.");
      console.log("No name has been entered.");
      // toastMaker("No name has been entered");
      setNameInput('');
    }
  }

  return (

    <View style={styles.container}>

      {props.dialogLocationOpen &&

        <>
          <Text style={styles.textDialog}>Add Location Details</Text>
          {/* TODO: Add dinamic screen title for the message below*/}
          {/* <Text style={styles.textDialog}>Create a new {props.screen}</Text> */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Name"
              style={styles.input}
              onChangeText={nameInputHandler}
              value={nameInput}
            />
          </View>

          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Address"
              style={styles.input}
              onChangeText={addressInputHandler}
              value={addressInput}
            />
          </View>

          <View style={styles.buttonContainer}>

            <TouchableOpacity
              onPress={props.onCancel}
              style={styles.button1}
            >
              <Icon name="map-marker-down" style={styles.icon2} />
              <Text style={styles.textButton}>DONE</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={addLocationHandler}
              style={styles.button2}
            >
              <Icon name="map-marker-check" style={styles.icon1} />
              <Text style={styles.textAddButton}>SAVE</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.mapContainer}>
            <TouchableOpacity
              onPress={() => { props.onCancel; }}
              style={styles.mapButton}
            >
              <Icon name="map-legend" style={styles.icon3} />
              <Text style={styles.textButton}>COORDINATES</Text>
            </TouchableOpacity>
          </View>

        </>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    top: -20
  },
  textDialog: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  inputContainer: {
    width: 330,
  },
  input: {
    borderColor: 'black',
    borderWidth: 0.7,
    padding: 10,
    margin: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: 330,
    justifyContent: 'space-around',
  },
  button1: {
    flexDirection: 'row',
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderColor: 'rgba(0,88,155,1)',
    borderWidth: 0.7,
    width: '45%',
  },
  button2: {
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

  mapContainer: {
    // flexDirection: 'row',
    width: 330,
    // justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },

  mapButton: {
    // flexDirection: 'row',
    alignItems: "center",
    textAlign: "center",
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderColor: 'rgba(0,88,155,1)',
    borderWidth: 0.7,
    // width: '45%',
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
  icon3: {
    color: 'rgba(0,88,155,1)',
    fontSize: 30,
    left: -5,
    padding: 5,
    // textAlign: 'right',
    // alignSelf: 'stretch',
  },
});

export default ModifyLocation;
