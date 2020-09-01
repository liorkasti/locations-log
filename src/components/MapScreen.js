import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Keyboard, Dimensions, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

const MapScreen = (props) => {

  const [selectedLocation, setSelectedLocation] = useState();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [regionLatitude, setRegionLatitude] = useState(0);
  const [regionLongitude, setRegionLongitude] = useState(0);

  useEffect(() => {
    console.log("MapScreen props: ", props);
    console.log("selectedLocation : ", selectedLocation);
    console.log("props.showMediumMap: ", props.showMediumMap);
    // if (showMediumMap) {}
    Keyboard.dismiss();
  }, [])

  const mapRegion = {
    latitude: 32.091430,
    longitude: 34.789410,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  };

  let markerCoordinates;

  if (selectedLocation) {
    markerCoordinates = {
      latitude: latitude,
      longitude: longitude
    };
  }

  const selectLocationHandler = event => {
    setSelectedLocation(event)
    console.log("event: ", event)
    setLatitude(event.nativeEvent.coordinate.latitude)
    setLongitude(event.nativeEvent.coordinate.longitude)
    setSelectedLocation({ lat: longitude, lng: longitude });
  };

  return (
    <View style={[styles.container, props.style]}>

      <MapView
        // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        style={styles.map}
        region={mapRegion}
        onPress={selectLocationHandler}
      >
        {markerCoordinates && (
          <Marker title="Picked Location" coordinate={markerCoordinates} />
        )}
      </MapView>
      <Coordinates
        latitude={latitude || 0}
        longitude={longitude || 0}
        // latitude={props.regionLatitude}
        // longitude={props.regionLongitude}
        // hide={props.setIsAddLocationMode}
        hide={false}
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
  // const Coordinate = React.memo(({ label, value }) => (
  <View style={styles.coordinate}>
    <Text style={{ fontWeight: 'bold' }} numberOfLines={1}>
      {label}
    </Text>
    <Text numberOfLines={1}>{value}</Text>
  </View>
),
);

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '70%',
    height: 400,
    width: windowWidth * .85,
    justifyContent: 'flex-end',
    alignItems: 'center',
    top: 60,
    zIndex: 200,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  coordinates: {
    position: 'absolute',
    width: '100%',
    width: 320,
    width: windowWidth * .85,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 60,
    // top: 0,
    flexDirection: 'row',
    zIndex: 99,

  },
  coordinate: {
    flex: 1,
    padding: 16,
    margin: 16,
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 10,
  },
});

export default MapScreen;
