import React, { useState, useEffect } from "react";
import { StyleSheet, View, StatusBar, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, Picker } from "react-native";

export default function Location(props) {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="rgba(2,172,235,1)" />
      <Text>Location</Text>
    </View>
  );
}


const screenHeight = Dimensions.get('window').height + 100;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // flex: 1,
    height: 1600,
    width: windowWidth,
  },

});