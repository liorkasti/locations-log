import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import toastMaker from '../utils/feedbackGenerator';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ModifyCategory = props => {
  const [nameInput, setNameInput] = useState("");
  const [closeDialog, setCloseDialog] = useState(false);

  useEffect(() => {
    // console.log("ModifyCategory props: ", props);
    // if (closeDialog === true) 
    // props.setUpdateOpen(false);
  }, [closeDialog])

  const nameInputHandler = enteredText => {
    setNameInput(enteredText);
  };

  const addCategoryHandler = () => {
    // console.warn("nameInput: ", nameInput);    
    if (nameInput.length > 0) {
      // props.onSave(nameInput);
      props.onAdd(nameInput);
      setNameInput('');
      setCloseDialog(true)
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
      props.setUpdateOpen(false)
    } else {
      // TODO: Fix Toast No name has been ebtered. https://www.npmjs.com/package/react-native-toast-message
      Alert.alert("No input.");
      console.log("No name has been entered.");
      // toastMaker("No name has been entered");
      setNameInput('');

      props.onDismiss()
      // visible=false
    }
  }

  return (

    <View style={styles.container}>
      {props.dialogOpen &&
        <>
          <Text style={styles.textDialog}>Create a new Category</Text>
          {/* TODO: Add dinamic screen title for the message below*/}
          {/* <Text style={styles.textDialog}>Create a new {props.screen}</Text> */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Category name"
              style={styles.input}
              onChangeText={nameInputHandler}
              value={nameInput}
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
              onPress={addCategoryHandler}
              style={styles.button2}
            >
              <Icon name="map-marker-check" style={styles.icon1} />
              <Text style={styles.textAddButton}>ADD</Text>
            </TouchableOpacity>
          </View>
        </>
      }
      {
        props.updateOpen &&
        <>
          <Text style={styles.textDialog}>Edit Category Name</Text>
          {/* TODO: Add dinamic screen title for the message below*/}
          {/* <Text style={styles.textDialog}>Create a new {props.screen}</Text> */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Category name"
              style={styles.input}
              onChangeText={nameInputHandler}
              value={nameInput}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => { setCloseDialog(true) }}
              // onPress={() => { props.onCancel; }}
              style={styles.button1}
            >
              <Icon name="map-marker-down" style={styles.icon2} />
              <Text style={styles.textButton}>CANCEL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={updateTextHandler}
              style={styles.button2}
            >
              <Icon name="map-marker-check" style={styles.icon1} />
              <Text style={styles.textAddButton}>UPDATE</Text>
            </TouchableOpacity>
          </View>
        </>
      }
    </View>
  );
};

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: "center",
    justifyContent: 'center',
  },
  textDialog: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center',
    color: '#4287f5',
    color: 'black',
  },
  inputContainer: {
    width: 330,
    width: windowWidth * .85,
  },
  input: {
    // borderColor: '#4287f5',
    borderWidth: 0.7,
    padding: 10,
    margin: 10
  },
  buttonContainer: {
    flexDirection: 'row',
    width: windowWidth * .85,
    justifyContent: 'space-around',
  },
  button1: {
    flexDirection: 'row',
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    // borderColor: '#4287f5',
    borderWidth: 0.7,
    width: '45%',
  },
  button2: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#4287f5",
    padding: 10,
    marginVertical: 10,
    // borderColor: '#4287f5',
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
    backgroundColor: '#ddd',
    padding: 10,
    marginVertical: 10,
    borderColor: '#4287f5',
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
    color: '#4287f5',
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
    color: '#4287f5',
    fontSize: 20,
    left: -5
    // paddingHorizontal: 5,
    // textAlign: 'right',
    // alignSelf: 'stretch',
  },
  icon3: {
    color: '#4287f5',
    fontSize: 30,
    left: -5,
    padding: 5,
    // textAlign: 'right',
    // alignSelf: 'stretch',
  },
});

export default ModifyCategory;
