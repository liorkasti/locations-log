import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

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
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Category name"
          style={styles.input}
          onChangeText={categoryInputHandler}
          value={enteredCategory}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button
              title="CANCEL"
              color="red"
              onPress={props.onCancel}
              style={styles.cancleButton}
            />
          </View>
          <View style={styles.button}>
            <Button
              title="ADD"
              onPress={addCategoryHandler}
              style={styles.addButton}
            />
          </View>
        </View>

      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
    margin: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '60%',
    // alignItems: 'center'
  },
  button: {
    width: '40%'
  }
});

export default CategoryInput;
