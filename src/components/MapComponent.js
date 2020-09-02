import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, Keyboard, Dimensions, Text } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
// import Coordinates from '../components/Coordinate';

const MapComponent = (props) => {

  const [selectedLocation, setSelectedLocation] = useState();
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [regionLatitude, setRegionLatitude] = useState(0);
  const [regionLongitude, setRegionLongitude] = useState(0);

  useEffect(() => {
    Keyboard.dismiss();
    // console.log("MapScreen props: ", props);
    console.log("selectedLocation : ", selectedLocation);
    console.log("props.showMediumMap: ", props.showMediumMap);
    console.log("markerCoordinates: ", mapRegion);
    setSelectedLocation({
      lat: latitude || mapRegion.latitude,
      lng: longitude || mapRegion.longitude
    });
    if (selectedLocation) { props.setCoordinates(selectedLocation) }
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
    // console.log("event: ", event)
    setSelectedLocation(event)
    setLatitude(event.nativeEvent.coordinate.latitude)
    setLongitude(event.nativeEvent.coordinate.longitude)
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude
    });
    console.log("selectedLocation: ", selectedLocation)
    updateCoordinate(selectedLocation)

  };


  const updateCoordinate = (selectedLocation) => {
    props.setCoordinates({latitude: selectedLocation.lat, longitude: selectedLocation.lng})
  }

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
      />
    </View>
  );
}

const Coordinates = React.memo(({ latitude, longitude }) =>

  <View style={styles.coordinates}>
    <Coordinate label={'Latitude'} value={latitude} />
    <Coordinate label={'Longitude'} value={longitude} />
  </View>
);

const Coordinate = React.memo(({ label, value }) => (
  <View style={styles.coordinate}>
    <Text style={{ fontWeight: 'bold' }} numberOfLines={1}>
      {label}
    </Text>
    <Text numberOfLines={1}>{value}</Text>
  </View>
));

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: '70%',
    height: 400,
    width: windowWidth * .85,
    // justifyContent: 'flex-end',
    alignItems: 'center',
    top: 60,
    zIndex: 999,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  coordinates: {
    position: 'absolute',
    width: '100%',
    width: 320,
    //   width: windowWidth * .85,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 60,
    // top: 0,
    flexDirection: 'row',
    zIndex: 99,

  },
  coordinate: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    height: 60,
    margin: 16,
    backgroundColor: 'white',
    opacity: 0.8,
    borderRadius: 10,
  },
});

export default MapComponent;
