import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';

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
    // <Modal visible={props.visible} animationType="slide">
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Category name"
        style={styles.input}
        onChangeText={categoryInputHandler}
        value={enteredCategory}
      />
      <View style={styles.buttonContainer}>

        <TouchableOpacity
          onPress={props.onDismiss}
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
    // </Modal> onPress={() => { props.setDialogOpen()
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 0.7,
    padding: 10,
    margin: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '80%',
    // justifyContent: 'space-around',
    // width: 160,
    justifyContent: 'space-between',
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
