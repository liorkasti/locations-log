import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Alert, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import toastMaker from '../utils/feedbackGenerator';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MapComponent from "../components/MapComponent";
import MapButton from "../components/MapButton";
import Coordinates from '../components/Coordinate';


const ModifyLocation = props => {
  const [nameInput, setNameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [coordinates, setCoordinates] = useState([]);

  useEffect(() => {
    // props = JSON.stringify(props);
    // props = JSON.parse(props);
    console.log("ModifyLocation props: ", props);
    console.log("ModifyLocation coordinates: ", coordinates);
    // console.log('props.showMediumMap: ' + props.showMediumMap);

    if (props.showMediumMap) { console.log("props.showMediumMap: ", props.showMediumMap); }
  }, [])

  const nameInputHandler = enteredText => {
    setNameInput(enteredText);
  };

  const addressInputHandler = addressInput => {
    setAddressInput(addressInput);
  };

  const addLocationHandler = () => {
    // console.warn("enteredText: ", enteredInput);    
    if (nameInput.length > 0 && addressInput.length > 0) {
      // props.onSave(nameInput, addressInput);
      props.onSave(nameInput, addressInput);
      setNameInput('');
      setAddressInput('');
    } else {
      // TODO: Fix Toast No name has been ebtered. https://www.npmjs.com/package/react-native-toast-message
      Alert.alert("No input.");
      console.log("No name has been entered.");
      // toastMaker("No name has been entered");
    }
  }

  return (
    <>
      <View style={styles.container}>
        {props.showMediumMap &&
          <>
            <MapComponent
              onPress={props.setShowMediumMap}
              showMediumMap={props.showMediumMap}
              coordinates={coordinates}
              setCoordinates={setCoordinates}
              isAddLocationMode={props.isAddLocationMode}
              setIsAddLocationMode={props.setIsAddLocationMode} />
          </>
        }
        {
          props.locationDialogOpen &&

          <>
            <Text style={styles.textDialog}>Add Location Details</Text>

            {props.showMediumMap &&
              <TouchableOpacity
                disabled={!(props.showMediumMap)}
                onPress={props.setShowMediumMap}
                showMediumMap={props.showMediumMap}
                style={styles.coordsClose}
              >
                {coordinates ? 
                <Icon name="close-circle" style={styles.icon3} />
                :
                <Icon name="map-check" style={styles.icon3} />
                }
                {/* <Text style={styles.textButton}>COORDINATES</Text> */}
              </TouchableOpacity>
            }
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
            </View>

            <View style={styles.buttonContainer}>
              <Coordinates
                latitude={coordinates.latitude || 0}
                longitude={coordinates.longitude || 0}
                // latitude={props.regionLatitude}
                // longitude={props.regionLongitude}
                // hide={props.setIsAddLocationMode}
                // hide={false}
              />

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


          </>
        }
      </View >
    </>
  );
};

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
    textAlign: 'center'
  },
  inputContainer: {
    width: windowWidth * .85,
  },
  input: {
    borderColor: 'black',
    borderWidth: 0.7,
    padding: 10,
    margin: 10
  },
  coordsClose: {
    // position: 'absolute',
    borderColor: 'rgba(0,88,155,1)',
    top: -30,
    left: (-windowWidth * .40),
    zIndex: 999
  },
  buttonContainer: {
    flexDirection: 'row',
    width: windowWidth * .85,
    justifyContent: 'space-around',
    bottom: -40,
    // zIndex: 999,
  },
  button1: {
    flexDirection: 'row',
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: '#ccc',
    padding: 10,
    marginVertical: 10,
    borderColor: 'rgba(0,88,155,1)',
    borderWidth: 0.7,
    width: '45%',
  },
  button2: {
    flexDirection: "row",
    alignItems: "flex-end",
    justifyContent: "center",
    backgroundColor: "rgba(0,88,155,1)",
    padding: 10,
    marginVertical: 10,
    borderColor: 'rgba(0,88,155,1)',
    borderWidth: 0.7,
    width: '45%',
  },
  mapContainer: {
    width: windowWidth * .85,
    // justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
  },
  mapButton: {
    marginVertical: 10,
    borderColor: 'rgba(0,88,155,1)',
    borderWidth: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    // bottom: 80,
    marginVertical: 10,
    height: 60,
    width: '95%',
    // width: 330,
    zIndex: 20
  },
  textAddButton: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    left: -5
  },
  coordsText: {
    color: 'rgba(0,88,155,1)',
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 'bold',
    paddingTop: 15
    // marginVertical: 40,
  },
  textButton: {
    justifyContent: 'center',
    textAlign: 'center',
    color: 'rgba(0,88,155,1)',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    left: -5
  },
  icon1: {
    color: 'white',
    fontSize: 20,
    left: -5

    // paddingHorizontal: 5,
    // textAlign: 'right',
    // alignSelf: 'stretch',
  },
  icon2: {
    color: 'rgba(0,88,155,1)',
    fontSize: 20,
    left: -5
    // paddingHorizontal: 5,
    // textAlign: 'right',
    // alignSelf: 'stretch',
  },
  icon3: {
    color: 'rgba(0,88,155,1)',
    fontSize: 30,
    left: -5,
    padding: 15,
    // textAlign: 'right',
    // alignSelf: 'stretch',
  },
});

export default ModifyLocation;
