import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import toastMaker from '../utils/feedbackGenerator';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MapComponent from "../components/MapComponent";
import MapButton from "../components/MapButton";
// import Coordinates from '../components/Coordinate';


const ModifyLocation = props => {
  const [nameInput, setNameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [coordinates, setCoordinates] = useState([]);
  const [isAddLocationMode, setIsAddLocationMode] = useState(false);


  useEffect(() => {
    // console.log("ModifyLocation props: ", props);
    // console.log("ModifyLocation coordinates: ", coordinates);
    // console.log('props.showMediumMap: ' + props.showMediumMap);
    if(isAddLocationMode) isAddLocationMode(true);
    // console.log(' *----* isAddLocationMode: *----* ' + isAddLocationMode);

    // if (props.showMediumMap) { console.log("props.showMediumMap: ", props.showMediumMap); }
  }, [])

  const nameInputHandler = enteredText => {
    setNameInput(enteredText);
  };

  const addressInputHandler = addressInput => {
    setAddressInput(addressInput);
  };

  const addLocationHandler = () => {
    // console.log("addLocationHandler: ", coordinates);
    // // let cords =  {latitude: coordinates.latitude, longitude: coordinates.longitude};
    // console.log("coordinates.length: ",  coordinates.length);
    // console.log('******************* isAddLocationMode: ***************' + isAddLocationMode);

    if (nameInput.length > 0 && addressInput.length > 0 && coordinates.latitude && coordinates.longitude) {
      // props.onSave(nameInput, addressInput);
      // props.onSave(nameInput, addressInput, {latitude: 0, longitude: 0})
      let locationDetails = {nameInput, addressInput, coordinates}
      console.warn("locationDatiles: " + JSON.stringify(locationDetails));   
      
      props.onSaveLocation(locationDetails);
      // props.onSaveLocation(nameInput, addressInput, {latitude: coordinates.latitude, longitude: coordinates.longitude});
      setNameInput('');
      setAddressInput('');
      setCoordinates;
      setIsAddLocationMode(true);
      props.setIsAddLocationMode(false)
    } else {
      // TODO: Fix Toast No name has been ebtered. https://www.npmjs.com/package/react-native-toast-message
      Alert.alert("Missing input.");
      console.log("No name has been entered.");
      setIsAddLocationMode(false);
  
      // toastMaker("No name has been entered");
    }
  }

  return (
    <>
      <View style={styles.container}>
        {
          props.locationDialogOpen &&

          <>
            <Text style={styles.textDialog}>Add Location Details</Text>

            {/* TODO: Add dinamic screen title for the message below*/}
            {/* <Text style={styles.textDialog}>Create a new {props.screen}</Text> */}
            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Name"
                style={styles.input}
                onChangeText={nameInputHandler}
                value={nameInput}
              />
            </View>

            <View style={styles.inputContainer}>
              <TextInput
                placeholder="Address"
                style={styles.input}
                onChangeText={addressInputHandler}
                value={addressInput}
              />
            </View>

            {/* <Icon name="map-legend" style={styles.icon3} /> */}
            <Text style={styles.coordsText}>SELECT COORDINATES</Text>

            <View style={styles.mapContainer}>
              <MapButton
                // showMediumMap = {showMediumMap}
                onPress={props.setShowMediumMap}
                showMediumMap={props.showMediumMap}
                style={styles.mapButton}
              />

              <Coordinates
                latitude={coordinates.latitude || 0}
                longitude={coordinates.longitude || 0}
              />

            </View>
          </>
        }


        {props.showMediumMap ?
          <>
            <TouchableOpacity
              disabled={!(props.showMediumMap)}
              onPress={props.setShowMediumMap}
              showMediumMap={props.showMediumMap}
              style={styles.coordsClose}
            >
              <Icon name="map-check" style={styles.icon3} />
            </TouchableOpacity>

            <MapComponent
              onPress={props.setShowMediumMap}
              showMediumMap={props.showMediumMap}
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              isAddLocationMode={props.isAddLocationMode}
              setIsAddLocationMode={props.setIsAddLocationMode}
            />
          </>
          :
          <View style={styles.buttonContainer}>

            <TouchableOpacity
              onPress={props.onCancel}
              style={styles.button1}
            >
              <Icon name="map-marker-down" style={styles.icon2} />
              <Text style={styles.textButton}>CANCEL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={addLocationHandler}
              style={styles.button2}
            >
              <Icon name="map-marker-check" style={styles.icon1} />
              <Text style={styles.textAddButton}>SAVE</Text>
            </TouchableOpacity>
          </View>
        }
      </View >
    </>
  );
};

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
    flex: 1,
    alignItems: 'center',
    // alignContent: "center",
    // justifyContent: 'center',
    top: -20
  },
  textDialog: {
    padding: 10,
    fontSize: 20,
    textAlign: 'center',
    color: '#4287f5',

  },
  inputContainer: {
    width: windowWidth * .85,
  },
  input: {
    borderColor: '#4287f5',
    borderWidth: 0.7,
    padding: 10,
    margin: 10
  },
  coordsClose: {
    backgroundColor: '#ffffffcc',
    borderColor: '#4287f5',
    borderRadius: 50,
    borderWidth: 0.7,
    position: 'absolute',
    top: 390,
    // left: (-windowWidth * .4),
    zIndex: 1000
  },
  mapContainer: {
    width: windowWidth * .85,
    alignItems: 'center',
  },
  mapButton: {
    marginVertical: 10,
    borderColor: '#4287f5',
    borderWidth: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginVertical: 10,
    height: 60,
    width: '95%',
    zIndex: 20
  },
  coordinates: {    
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 99,
  },
  coordinate: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 10,
    margin: 16,
    backgroundColor: 'white',
    opacity: 0.8,
    height: 60,
    borderColor: '#4287f5',
    // backgroundColor: isAddLocationMode ? '#ffffffcc' : '#d4d8d9d4d8d9cc',
    borderWidth: 0.7,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    width: windowWidth * .85,
    justifyContent: 'space-around',
    zIndex: 0,
  },
  button1: {
    flexDirection: 'row',
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: '#d4d8d9',
    padding: 10,
    marginVertical: 10,
    borderColor: '#4287f5',
    borderWidth: 0.7,
    width: '45%',
  },
  button2: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "#4287f5",
    padding: 10,
    marginVertical: 10,
    borderColor: '#4287f5',
    borderWidth: 0.7,
    width: '45%',
  },
  textAddButton: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    left: -5,
  },
  coordsText: {
    color: '#4287f5',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 15
  },
  textButton: {
    justifyContent: 'center',
    textAlign: 'center',
    color: '#4287f5',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    left: -5
  },
  icon1: {
    color: 'white',
    fontSize: 20,
    left: -5
  },
  icon2: {
    color: '#4287f5',
    fontSize: 20,
    left: -5
  },
  icon3: {
    color: '#4287f5',
    fontSize: 30,
    padding: 10,
  },
});

export default ModifyLocation;
