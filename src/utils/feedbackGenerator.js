import React, { useState } from "react";
import { View, StyleSheet, Button, Alert } from "react-native";
import Toast from 'react-native-root-toast';

export const confirmationAlert = (title, message) => {
  Alert.alert(
    "" + title,
    "" + message,
    [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
        onDismiss: () => { return false }
      },
      {
        text: "OK",
        onPress: () => console.log("OK Pressed"),
        onDismiss: () => { return true }
      },
    ],
    { cancelable: false }
  );
  // return false
}

// const toastMaker = props => {
export const toastMaker = message => {
  Toast.show(message, {
    duration: Toast.durations.LONG,
    position: Toast.positions.BOTTOM,
    animation: true,
    // visible: true,
    // position: 50,
    // shadow: false,
    // animation: false,
    // hideOnPress: true
  });
}
