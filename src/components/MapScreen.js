import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const MapScreen = (props) => {

  const [selectedLocation, setSelectedLocation] = useState();

  const mapRegion = {
    latitude: 37.78,
    longitude: -122.43,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  const selectLocationHandler = event => {
    console.log("event: ", event)
    setSelectedLocation({
      // lat: event.nativeEvent.coordinate.latitude,
      // lng: event.nativeEvent.coordinate.longitude
    });
  };

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) {
      return;
    }
    props.navigation.navigate("NewPlace", { pickedLocation: selectedLocation });
  }, [selectedLocation]);

  useEffect(() => {
    // props.navigation.setParams({ saveLocation: savePickedLocationHandler });
  }, [savePickedLocationHandler]);

  let markerCoordinates;
  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng
    };
  }

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
        region={mapRegion}
        onPress={selectLocationHandler}
      >
      </MapView>
      <Coordinates
          latitude={props.regionLatitude}
          longitude={props.regionLongitude}
          hide={props.setIsAddLocationMode}
        />
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
    height: '70%',
    height: 420,
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
