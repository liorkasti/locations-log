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

    console.log(' Category renderedLocations map : ' + props.renderedLocations.map(location => location.item.locationName));
    // if (props.showMenu) setShowMenu(false)
    setLocationList(props.renderedLocations)

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
  };

  const onUpdateCategoryHandler = categoryName => {

    props.onUpdateCategory(categoryName)
    console.warn("onUpdateHandler in Category!")
    const index = props.renderedCategories.findIndex(category => category.categoryName === props.renderedCategory);
    updateStorage(index, categoryName);
    //TODO: set the line below to active before production.
    // props.setIsUpdateMode(false);
    // props.setUpdateOpen(false);
  };

  // call for local storing 
  const updateStorage = (index, categoryName) => {
    setCurrentLocation(categoryName);
    props.onUpdateHandler(props.renderedCategories, index, categoryName);
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
    if (props.dialogOpen) props.setDialogOpen();
    if (props.updateOpen) props.setUpdateOpen();
    if (props.locationDialogOpen) props.setLocationDialogOpen()
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
                <Text style={styles.textPrompt}>Your Locations</Text>
                <ItemsList
                  currentComponent={props.currentComponent}
                  componentIndex={props.componentIndex}

                  currentLocation={currentLocation}

                  setCurrentLocation={setCurrentLocation}

                  renderedLocations={props.renderedLocations}
                  locationList={locationList}
                  setLocationList={setLocationList}

                  renderedLocations={props.renderedLocations}
                  setRenderedLocation={props.setRenderedLocation}

                  renderedCategory={props.renderedCategory}
                  onUpdateCategory={props.onUpdateCategory}

                  renderedCategories={props.renderedCategories}
                  setRenderedCategories={props.setRenderedCategories}

                  onPress={props.onNext}

                  style={styles.categoryItem}
                />
              </>
              :
              <View style={styles.welcomeContainer}>
                <Text style={styles.textPrompt}>Please create{"\n"}your locations</Text>
                {/* <Icon name="map-marker-multiple" style={styles.icon} /> */}
                <Icon name="map-search-outline" style={styles.icon} />
              </View>
          }
        </View>
        <DialogComponent
          locationDialogOpen={props.locationDialogOpen}
          setLocationDialogOpen={props.setLocationDialogOpen}

          onSaveLocation={addLocationHandler}
          // onAdd={addLocationHandler}
          reloadStorage={props.reloadStorage}

          onUpdate={onUpdateCategoryHandler}

          myLocationList={props.myLocationList}
          onUpdateCategories={props.onUpdateCategories}
          onUpdateLocation={props.onUpdateLocation}

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

          showMenu={props.showMenu}
          setShowMenu={props.setShowMenu}

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
    color: "#4287f5",
    fontSize: 120,
    zIndex: 1
  },
});

export default Category;
