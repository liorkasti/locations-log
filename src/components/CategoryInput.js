import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Modal } from 'react-native';

const CategoryInput = props => {
  const [enteredCategory, setEnteredCategory] = useState('');
  // const [inputValue, setInputValue] = useState("");

  const categoryInputHandler = enteredText => {
    setEnteredCategory(enteredText);
  };

  const addCategoryHandler = () => {
    props.onAddCategory(enteredCategory);
    setEnteredCategory('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textDialog}>Create a new Categiry</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Category name"
          style={styles.input}
          onChangeText={categoryInputHandler}
          value={enteredCategory}
        />
      </View>
      <View style={styles.buttonContainer}>

        {/* todo: synch header add button when cancel press */}
        <TouchableOpacity
          onPress={props.onDismiss}
          // onPress={() => { props.setDialogOpen()}}
          // onPress={() => { props.onDismiss; props.setDialogOpen();  props.setShowAdd() }}
          // onPress={() => { props.onDismiss; props.setDialogOpen();  props.setShowAdd() }}
          // onPress={props.onCancel} 
          style={styles.cancleButton} >
          <Text style={styles.textButton}>CANCEL</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={addCategoryHandler} style={styles.addButton} >
          <Text style={styles.textButton}> ADD</Text>
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
  textDialog: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center'
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
    // width: 160,
    // justifyContent: 'space-between',
  },
  cancleButton: {
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 0.7,
    width: '45%',
  },
  addButton: {
    backgroundColor: "rgba(0,88,155,1)",
    padding: 10,
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 0.7,
    width: '45%',
  },
  textButton: {
    textAlign: 'center',
    justifyContent: 'center',
  },
});

export default CategoryInput;
