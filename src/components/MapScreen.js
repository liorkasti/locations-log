import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const DEFAULT_LATITUDE = 32.0869342;
const DEFAULT_LONGITUDE = 34.7801262;

const VIBRATION_DURATION = 500;

function MapScreen(props) {

  useEffect(() => {
    console.log("MapScreen props: ", props);
    console.log("props.showMediumMap: ", props.showMediumMap);
    // if (showMediumMap) {}
  }, [])

  return (
    <View style={[styles.container, props.style]}>

      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}
      >
      </MapView>

    </View>
  );
}


const Coordinates = React.memo(({ latitude, longitude, hide }) =>
  hide ? null : (
    <View style={styles.coordinates}>
      <Coordinate label={'Latitude'} value={latitude} />
      <Coordinate label={'Longitude'} value={longitude} />
    </View>
  ),
);

const Coordinate = React.memo(({ label, value }) => (
  <View style={styles.coordinate}>
    <Text style={{ fontWeight: 'bold' }} numberOfLines={1}>
      {label}
    </Text>
    <Text numberOfLines={1}>{value}</Text>
  </View>
));

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 40,
    zIndex: 200,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default MapScreen;
