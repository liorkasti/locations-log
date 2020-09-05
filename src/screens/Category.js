import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, FlatList, ScrollView, Dimensions, Picker } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Dialog, { DialogFooter, DialogTitle, DialogButton, SlideAnimation, PopupDialog, DialogContent } from 'react-native-popup-dialog';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { addCategory, addLocations, addLocation, updateCategory, removeCategory } from '../action/modifyActions';

import ItemsList from '../components/ItemsList';
import LocationCard from '../components/LocationCard';
import ModifyLocation from '../action/ModifyLocation';
import ModifyCategory from '../action/ModifyCategory';
import DialogComponent from '../components/DialogComponent';
import ActionMenu from '../components/ActionMenu';


// export default function Category({ props }) {
// export function Category( {props} ) {
// const Category = (props) => {
const Category = ({ props }) => {

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
    // props = JSON.parse(_props);
    // console.log('Category.props: ' + props);
    // console.log('Category._props: ' + _props);
    // console.log('locationDialogOpen: ' + locationDialogOpen);
    // console.log('========= props.renderedLocations: ' + JSON.stringify(props.renderedLocations));
    // console.log('========= props.renderedLocations: ' + JSON.stringify(props.renderedLocations).length);
    // console.log('========= locationList: ' + JSON.stringify(locationList));
    // console.log('========= locationList: ' + JSON.stringify(locationList.nameInput));

    setLocationList(props.renderedLocations)
    // setLocationList(props.renderedLocation)
    // console.log('LocationList after storage: ' + JSON.stringify(locationList));
    // console.log('LocationList: ' + JSON.stringify(locationList));


    if (props.isUpdateMode) {
      // props.setUpdateOpen(false);
      // TODO: validate add asynch starage and sorting capabiliteis
      // initStorage();
    }


    if (isAddLocationMode) {
      // props.setUpdateOpen(false);
      reloadStorage()
      // console.log("The Current Location: ", JSON.stringify(currentLocationName));
    }
  }, [])


  const addLocationHandler = (locationDetails) => {

    console.log("The Location Details: ", locationDetails);
    setCurrentLocation(locationDetails);
    props.onUpdateLocation(locationDetails)
    props.onUpdateLocations(locationDetails)

    // console.log("The Current Location on category addLocationHandler: ", currentLocation);

    if (isAddLocationMode) setIsAddLocationMode(false);

    props.setLocationDialogOpen(false)

    // updateStorage(locationDatiles);

    //TODO: set the line below to active before production.
    // props.setDialogOpen(false)
  };

  const onUpdateHandler = categoryName => {

    props.onUpdateCategory(categoryName)
    console.warn("onUpdateHandler in Category!")
    const index = props.renderedCategories.findIndex(category => category.name === props.renderedCategory);
    props.onUpdateHandler(props.renderedCategories, index, categoryName);
    //TODO: set the line below to active before production.
    // props.setIsUpdateMode(false);
    // props.setUpdateOpen(false);
  };

  // call for local storing 
  const updateStorage = (newListItem) => {
    setCurrentLocation(newListItem);
    console.warn("onUpdateHandler in Category!")

    // setLocationList(addLocation(locationList, newListItem)); 0000000000000000000000

    // props.onUpdateLocation(newListItem)
    // props.onUpdateLocations(newListItem)
  };

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
    if (props.dialogOpen) props.setDialogOpen(false);
    if (props.updateOpen) props.setUpdateOpen(false);
    if (props.locationDialogOpen) props.setLocationDialogOpen(false)
    // props.setUpdateOpen(false);
  };

  return (
    <View style={styles.container}>

      {props.showMenu &&
        < ActionMenu
          handleMenu={props.handleMenu}
          showMenu={props.showMenu}
          setShowMenu={props.setShowMenu}
          style={styles.menuContainer}
        />
      }
      <ScrollView style={{ zIndex: 1, width: windowWidth * .7, height: windowHeight * .95 }}>

        <View style={styles.textContainer}>

          {
            locationList.length || props.renderedLocations.length ?
              // locationList.length ?
              <>
                <Text style={styles.textPrompt}>Your locations list</Text>
                <ItemsList
                  _currentLocation={JSON.stringify(currentLocation)}
                  currentLocation={currentLocation}
                  setCurrentLocation={setCurrentLocation}

                  locationList={locationList}
                  setLocationList={setLocationList}

                  renderedLocations={props.renderedLocations}
                  setRenderedLocation={props.setRenderedLocation}

                  onUpdateCategories={props.onUpdateCategories}
                  setRenderedCategory={props.setRenderedCategory}

                  onPress={props.onNext}
                  style={styles.categoryItem}
                />
              </>
              :
              <View style={styles.welcomeContainer}>
                <Text style={styles.textPrompt}>Please create{"\n"}your locations</Text>
                <Icon name="map-marker-multiple" style={styles.icon} />
              </View>
          }
        </View>
        <DialogComponent
          locationDialogOpen={props.locationDialogOpen}
          setLocationDialogOpen={props.setLocationDialogOpen}

          onSaveLocation={addLocationHandler}
          // onAdd={addLocationHandler}
          reloadStorage={props.reloadStorage}

          onUpdate={onUpdateHandler}

          myLocationList={props.myLocationList}
          onUpdateCategories={props.onUpdateCategories}

          onCancel={cancelCategoryHandler}

          locationDialogOpen={props.locationDialogOpen}
          setLocationDialogOpen={props.setLocationDialogOpen}

          onUpdateHandler={props.onUpdateHandler}

          updateOpen={props.updateOpen}
          setUpdateOpen={props.setUpdateOpen}

          showMediumMap={showMediumMap}
          setShowMediumMap={() => { setShowMediumMap(!showMediumMap); }}

          isAddLocationMode={isAddLocationMode}
          setIsAddLocationMode={() => { setIsAddLocationMode(!isAddLocationMode); }}
          setIsUpdateMode={() => { setIsUpdateMode(!isUpdateMode) }}
          isUpdateMode={isUpdateMode}

          onDismiss={props.onDismiss}
          // reloadStorage={reloadStorage}
          // renderedCategory={props.renderedCategory}
          // onUpdateCategories={props.onUpdateCategories}

          windowWidth={windowWidth}
          windowHeight={windowHeight}
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
  menuContainer: {
    position: 'absolute',
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

export default Category;
