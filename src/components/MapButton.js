import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MapView from "react-native-maps";

function MapButton(props) {

  useEffect(() => {
    console.log("MapButton props: ", props);
    // console.log("props.showMediumMap: ", props.showMediumMap);
    // if (showMediumMap) {}
  }, [])

  return (
    <View style={[styles.container, props.style]}>
      <TouchableOpacity
        onPress={props.onPress}
        // onPress={() => setShowMediumMap(!showMediumMap)}
        style={styles.button55}>
        <MapView style={styles.dragableMap}></MapView>
        <Text style={styles.taxtMap}>Find Location From On The Map</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
  button55: {
    opacity: 0.8,
    left: 0,
    height: 60,
    position: "absolute",
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 0,
    right: 0
  },
  dragableMap: {
    position: "absolute",
    opacity: 0.8,
    height: 60,
    left: 0,
    borderRadius: 10,
    bottom: 0,
    right: 0
  },
  taxtMap: {
    color: "rgba(0,88,155,1)",
    position: "absolute",
    alignItems: 'center',
    fontSize: 16,
    // fontFamily: "roboto-regular",
    paddingHorizontal: 10,
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 10,
  },
  mapView1: {
    flex: 1,
    backgroundColor: "rgb(230,230,230)"
  }
});

export default MapButton;
