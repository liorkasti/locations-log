import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, Picker } from "react-native";
import InputDialog from './components/InputDialog';
// import EmptyView from './components/EmptyView';

export default function Categories(props) {
  useEffect(()=>{
    console.error("Categories")
  },[props.dialogOpen]);

  return (
    <View style={styles.container}>
      <InputDialog
        cancelLabel="Cancel"
        okLabel="Add"
        backgroundColor="white"
        inputPlaceholder="Name"
        initialValue=""
        title="Create a new category"
        visible={props.dialogOpen}
        onDismiss={()=>props.onDismiss()}
      />
      <Text>Categiries</Text>
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

});