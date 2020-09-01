import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, FlatList, ScrollView, Dimensions, Picker } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Dialog, { DialogFooter,DialogTitle, DialogButton, SlideAnimation, PopupDialog, DialogContent } from 'react-native-popup-dialog';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { addCategory, addLocations, addLocation, updateCategory, removeCategory } from '../action/modifyActions';

import CardItem from '../components/CardItem';
import ModifyLocation from '../action/ModifyLocation';
import ModifyCategory from '../action/ModifyCategory';
import ActionMenu from '../components/ActionMenu';


export default function Category({ props }) {

  const [locationList, setLocationList] = useState();
  const [currentLocationName, setCurrentLocationName] = useState([]);
  const [currentLocationAddress, setCurrentLocationAddress] = useState([]);

  const [updateList, setUpdateList] = useState(false);
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [isAddLocationMode, setIsAddLocationMode] = useState(false);
  const [isCancelMode, setIsCancelMode] = useState(false);
  const [showMediumMap, setShowMediumMap] = useState(false);
  // const [locationDialogOpen, setLocationDialogOpen] = useState(false);

  useEffect(() => {

    props = JSON.stringify({ props });
    // props = JSON.parse(props);
    console.log('22222222222222 Category.props: ' + props);
    // console.log('locationDialogOpen: ' + locationDialogOpen);

    // console.log('LocationList: ' + JSON.stringify(locationList));
    // console.log('LocationList: ' + JSON.stringify(locationList));

    if (props.isUpdateMode) { 
      // props.setUpdateOpen(false);
      // TODO: validate add asynch starage and sorting capabiliteis
      // initStorage();
    }


    if (isAddLocationMode) {
      props.setUpdateOpen(false);
      reloadStorage()
      console.log("The Current Location: ", JSON.stringify(currentLocationName));
      console.log("The Locations List: ", JSON.stringify(locationList));
    }
  }, [])


  const addLocationHandler = (locationName, locationAdress) => {

    setCurrentLocationName(locationName, locationAdress);
    if (isAddLocationMode) setIsAddLocationMode(false);
    updateStorage(locationName, locationAdress);

    //TODO: set the line below to active before production.
    // props.setDialogOpen(false)
  };

  const onUpdateHandler = categoryName => {

    props.onUpdateCategory(categoryName)
    console.warn("onUpdateHandler in Category!")
    const index = props.renderedCategories.findIndex(category => category.name === props.renderedCategory);
    props.onUpdateHandler(props.renderedCategories, index, categoryName);
    //TODO: set the line below to active before production.
    setIsUpdateMode(true);        
  };

  // call for local storing 
  const updateStorage = (newListItem) => {
    setCurrentLocationName(newListItem);
    setLocationList(addLocation(locationList, newListItem));

    // props.onUpdateLocation(newListItem)
    // props.onUpdateLocations(newListItem)
  };

  const reloadStorage = () => {
    props.onDismiss();
    setCurrentLocationName(props.renderedLocation);
    setLocationList(props.renderedLocations);
    setIsAddLocationMode(false);
  }

  const cancelCategoryHandler = () => {
    props.onDismiss();
    // onDismiss();
    setIsCancelMode(true);
    // if (props.updateOpen) props.setUpdateOpen(false);
    if (props.locationDialogOpen) props.setLocationDialogOpen(false)
    // props.setUpdateOpen(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ zIndex: 1, width: windowWidth * .7, height: windowHeight * .95 }}>

        <View style={styles.textContainer}>

          {
            locationList ?

              <>
                <Text style={styles.textPrompt}>Your locations list</Text>
                <FlatList
                  keyExtractor={(item, index) => item.id}
                  data={locationList}
                  renderItem={itemData => (
                    <CardItem
                      id={itemData.item.id}

                      setCurrentLocationName={setCurrentLocationName}
                      locationList={locationList}
                      onUpdateCategories={props.onUpdateCategories}
                      setRenderedCategory={props.setRenderedCategory}

                      onPress={props.onNext}
                      title={itemData.item.name}
                      style={styles.categoryItem}
                    />
                  )}
                />
              </>
              :

              <View style={styles.welcomeContainer}>
                <Text style={styles.textPrompt}>Please create{"\n"}your locations</Text>
                <Icon name="map-marker-multiple" style={styles.icon} />
              </View>
          }
        </View>

        {/* {locationDialogOpen && */}
          < Dialog
            // visible={props.locationDialogOpen}
            // onTouchOutside={() => { visible = onDismiss(); }}
            // onTouchOutside={setLocationDialogOpen(false)}
            // onTouchOutside={() => {
            //   setLocationDialogOpen({ visible: false });
            // }}
            // onTouchOutside={() => { cancelCategoryHandler }}
            onTouchOutside={() => { (props.onDismiss()) }}
            // onTouchOutside={() => { visible = (!visible) }}
            // onTouchOutside={() => { visible = props.setLocationDialogOpen; }}
            dialogAnimation={
              new SlideAnimation({
                slideFrom: 'bottom',
              })
            }
            dialogStyle={styles.locationDialog}
          >
            <DialogContent>
              <View style={styles.welcomeContainer}>
                <ModifyLocation
                  initialValue=""
                  visible={props.locationDialogOpen}
                  locationDialogOpen={props.locationDialogOpen}
                  setLocationDialogOpen={props.setLocationDialogOpen}

                  onSave={addLocationHandler}
                  // onAdd={addLocationHandler}
                  reloadStorage={props.reloadStorage}

                  myLocationList={props.myLocationList}
                  onUpdateCategories={props.onUpdateCategories}

                  onCancel={cancelCategoryHandler}
                  onDismiss={() => { props.onDismiss }}

                  locationDialogOpen={props.locationDialogOpen}
                  setLocationDialogOpen={props.setLocationDialogOpen}

                  showMediumMap={showMediumMap}
                  setShowMediumMap={() => { setShowMediumMap(!showMediumMap); }}

                  isAddLocationMode={isAddLocationMode}
                  setIsAddLocationMode={() => { setIsAddLocationMode(!isAddLocationMode); }}
                  // setIsUpdateMode={() => { setIsUpdateMode(!isUpdateMode) }}
                  // isUpdateMode={isUpdateMode}

                  // reloadStorage={reloadStorage}
                  // renderedCategory={props.renderedCategory}
                  // onUpdateCategories={props.onUpdateCategories}

                  windowWidth={windowWidth}
                  windowHeight={windowHeight}
                />
              </View>
            </DialogContent>
          </Dialog>
        {/* } */}

        {/* {(isCancelMode === false) ? */}
          < Dialog
            visible={props.updateOpen}
            onTouchOutside={() => { 
              visible=false;
              // props.onDismiss();
              // visible: false
              // props.setUpdateOpen();
              // this.setState({ visible: false }, () => Keyboard.dismiss());
              console.log('visible : ', visible);
              // this.setState({ visible: false });
            }}
            dialogTitle={<DialogTitle title="Dialog Title" />}

            footer={
              <DialogFooter>
                <DialogButton
                  text="CANCEL"
                  onPress={() => { }}
                />
                <DialogButton
                  text="OK"
                  onPress={() => { }}
                />
              </DialogFooter>
            }          

            dialogAnimation={
              new SlideAnimation({
                slideFrom: 'bottom',
              })
            }
            dialogStyle={styles.dialog}
          >
            <DialogContent>
              <View style={styles.welcomeContainer}>
                <ModifyCategory
                  initialValue=""
                  visible={props.updateOpen}
                  updateOpen={props.updateOpen}
                  setUpdateOpen={props.setUpdateOpen}

                  onUpdate={onUpdateHandler}
                  reloadStorage={props.reloadStorage}

                  myLocationList={props.myLocationList}
                  onUpdateCategories={props.onUpdateCategories}

                  onCancel={cancelCategoryHandler}
                  onDismiss={() => { props.onDismiss }}


                  setIsUpdateMode={() => { setIsUpdateMode(!isUpdateMode) }}
                  isUpdateMode={isUpdateMode}

                  windowWidth={windowWidth}
                  windowHeight={windowHeight}
                />
              </View>
            </DialogContent>
          </Dialog>


        {/* {props.showMenu &&
        <View style={styles.manuContainer}>
          <ActionMenu
            onActionMenu={props.onActionMenu}
            onDelete={props.onDelete}

            renderedCategories={props.renderedCategories}
            onUpdateCategories={props.renderedCategoriesHandler}

            renderedCategory={props.renderedCategory}
            onUpdateCategory={props.renderedCategoryHandler}

            onActionMenu={props.onActionMenu}
            style={styles.actionMenu}
          />
        </View>
        } */}
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
    zIndex: 10
  },
  textDialog: {
    padding: 20,
    fontSize: 20,
    textAlign: 'center'
  },
  dialog: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 500,
    width: '90%',
    padding: 20,
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