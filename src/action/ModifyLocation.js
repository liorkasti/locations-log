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
    // console.warn("coordinates: "+ latitude + ", " + longitude);   
    // && coordinates !== emptyArray 
    if (nameInput.length > 0 && addressInput.length > 0 ) {
      // props.onSave(nameInput, addressInput);
      // props.onSave(nameInput, addressInput, {latitude: 0, longitude: 0})
      props.onSave(nameInput, addressInput, coordinates);
      setNameInput('');
      setAddressInput('');
      // setCoordinates();
      setIsAddLocationMode(true);
    } else {
      // TODO: Fix Toast No name has been ebtered. https://www.npmjs.com/package/react-native-toast-message
      Alert.alert("No input.");
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
    color: 'rgba(0,88,155,1)',

  },
  inputContainer: {
    width: windowWidth * .85,
  },
  input: {
    borderColor: 'rgba(0,88,155,1)',
    borderWidth: 0.7,
    padding: 10,
    margin: 10
  },
  coordsClose: {
    backgroundColor: '#ffffffcc',
    borderColor: 'rgba(0,88,155,1)',
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
    borderColor: 'rgba(0,88,155,1)',
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
    borderColor: 'rgba(0,88,155,1)',
    // backgroundColor: isAddLocationMode ? '#ffffffcc' : '#cccccccc',
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
  textAddButton: {
    textAlign: 'center',
    justifyContent: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    left: -5,
  },
  coordsText: {
    color: 'rgba(0,88,155,1)',
    justifyContent: 'center',
    textAlign: 'center',
    paddingTop: 15
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
  },
  icon2: {
    color: 'rgba(0,88,155,1)',
    fontSize: 20,
    left: -5
  },
  icon3: {
    color: 'rgba(0,88,155,1)',
    fontSize: 30,
    padding: 10,
  },
});

export default ModifyLocation;
