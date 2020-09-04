import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, FlatList, ScrollView, Dimensions, Picker } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Dialog, { DialogFooter, DialogTitle, DialogButton, SlideAnimation, PopupDialog, DialogContent } from 'react-native-popup-dialog';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { addCategory, addLocations, addLocation, updateCategory, removeCategory } from '../action/modifyActions';

import LocationCard from './LocationCard';
import ModifyLocation from '../action/ModifyLocation';
import ModifyCategory from '../action/ModifyCategory';
import DialogComponent from './DialogComponent';
import ActionMenu from './ActionMenu';


// export default function Category({ props }) {
// export function Category( {props} ) {
// const Category = (props) => {
const ItemsList = (props) => {

  const [locationList, setLocationList] = useState([]);
  const [currentLocation, setCurrentLocation] = useState([]);

  const [updateList, setUpdateList] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [isAddLocationMode, setIsAddLocationMode] = useState(false);
  const [isCancelMode, setIsCancelMode] = useState(false);
  const [showMediumMap, setShowMediumMap] = useState(false);
  // const [locationDialogOpen, setLocationDialogOpen] = useState(false);

  useEffect(() => {

    const _props = JSON.stringify(props);
    console.log('ItemsList._props: ' + _props);
    console.log('ItemsList.props: ' + props);
    console.log('locationDialogOpen: ' + props.locationDialogOpen);
    console.log('========= props.renderedLocations: ' + JSON.stringify(props.renderedLocations));
    console.log('========= props.renderedLocations: ' + JSON.stringify(props.renderedLocations).length);
    console.log('========= locationList: ' + JSON.stringify(locationList));
    console.log('========= locationList: ' + JSON.stringify(locationList.nameInput));

    setLocationList(props.renderedLocations)
    // setLocationList(props.renderedLocation)
    console.log('LocationList after storage: ' + JSON.stringify(locationList));
    // console.log('LocationList: ' + JSON.stringify(locationList));
  }, [])


  const reloadStorage = () => {
    props.onDismiss();
    setCurrentLocation(props.renderedLocation);
    setLocationList(props.renderedLocations);
    setIsAddLocationMode(false);
  }

  const cancelCategoryHandler = () => {
    console.log("I am cancelCategoryHandler now")
    props.onDismiss();
    // onDismiss();
    setIsCancelMode(true);
    // if (props.dialogOpen) props.setDialogOpen(false);
    // if (props.updateOpen) props.setUpdateOpen(false);
    // if (props.locationDialogOpen) props.setLocationDialogOpen(false)
    // props.setUpdateOpen(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ zIndex: 1, width: windowWidth * .7, height: windowHeight * .95 }}>
        {/* <Text style={styles.textPrompt}>Your locations list</Text> */}
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={props.locationList}
          renderItem={itemData => (
            <LocationCard
              id={itemData.data.id}
              title={itemData.data.nameInput}
              address={itemData.data.address}

              setCurrentLocation={setCurrentLocation}
              locationList={props.locationList}
              onUpdateCategories={props.onUpdateCategories}
              setRenderedCategory={props.setRenderedCategory}

              onPress={props.onNext}
              style={styles.categoryItem}
            />
          )}
        />
      </ScrollView>
    </View >
  );
}


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  // container: {
  //   flexGrow: 1,
  //   // flex: 1,
  //   height: 1600,
  //   width: windowWidth,
  // },
  container: {
    flex: 1,
    maxHeight: "98%",
    zIndex: 10,
    alignContent: "center",
    justifyContent: 'center',
  },
  textDialog: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  dialog: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 260,
    width: '90%',
    padding: 20,
  },
  dialogTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    // height: 60,
    paddingTop: 20,
    marginTop: 20,
    padding: 20,
    fontSize: 20,
    textAlign: 'center'
    // width: '90%',
    // padding: 20,
  },
  locationDialog: {
    alignItems: 'center',
    height: windowHeight * .8,
    width: '90%',
    padding: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  textContainer: {
    alignItems: 'center',
  },
  categoryItem: {
    alignItems: 'center',
    width: '80%',
  },
  welcomeContainer: {
    // flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  textPrompt: {
    paddingHorizontal: 10,
    paddingVertical: 40,
    fontSize: 20,
    textAlign: 'center',
    zIndex: 1
  },
  icon: {
    color: "rgba(0,88,155,1)",
    fontSize: 120,
    zIndex: 1
  },
});

export default ItemsList;
