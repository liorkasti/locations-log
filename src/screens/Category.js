import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, Picker } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { addCategory, removeCategory } from '../action/modifyActions';

import InputDialog from '../components/InputDialog';
import CardItem from '../components/CardItem';
import MyInputText from '../components/MyInputText';
import ActionMenu from '../components/ActionMenu';


export default function Category(props) {

  const [LocationList, setLocationList] = useState([]);
  const [currentLocation, setCurrentLocation] = useState([]);

  const [updateList, setUpdateList] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isCancelMode, setIsCancelMode] = useState(false);

  useEffect(() => {
    console.log('Category.props: ' + JSON.stringify(props));
    console.log('currentComponent props: ' + JSON.stringify(props).currentComponent);
    console.log('dialogOpen props: ' + JSON.stringify(props.dialogOpen));
    console.log('updateOpen props: ' + props.updateOpen);
    console.log('showMenu props: ' + props.showMenu);

    if (updateList) {
      // TODO: validate add asynch starage and sorting capabiliteis
      // initStorage();
    }
  }, [])

  const addLocationHandler = locationName => {
    setLocationList(currentLocation => [
      ...currentLocation,
      { id: Math.random().toString(), name: locationName }
    ]);
    setIsAddMode(false);
    setUpdateList(true);
    setCurrentLocation(locationName);
    console.log("The Current Category: ", currentLocation);
    console.log("The List Category: ", LocationList);

    updateStorage(locationName)
  };

  const updateStorage = newLocation => {
    props.onUpdateLocation(newLocation);
    props.onUpdateList(newLocation)
    console.log("props List Category: ", props.myLocationList);
    console.log("props Current Category: ", props.popLatastCategory);
  };

  const cancelCategoryAdditionHandler = () => {
    setIsCancelMode(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ zIndex: 1, width: windowWidth * .7, height: windowHeight * .95 }}>

        {props.showMenu &&
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
        }

        <View style={styles.textContainer}>

          {
            props.myLocationList ?

              <Text style={styles.textPrompt}>Your locations list</Text>
              :

              <View style={styles.welcomeContainer}>
                <Text style={styles.textPrompt}>Please create{"\n"}your locations</Text>
                <Icon name="map-marker-multiple" style={styles.icon} />
              </View>
          }
        </View>


        < Dialog
          visible={props.dialogOpen}
          onTouchOutside={() => { visable = props.onDismiss(); }}
          dialogAnimation={
            new SlideAnimation({
              slideFrom: 'bottom',
            })
          }
          dialogStyle={styles.dialog}
        >
          <DialogContent>
            <View style={styles.welcomeContainer}>
              <Text style={styles.textDialog}>Create New Location</Text>
              <MyInputText
                visible={isAddMode}
                onAdd={addLocationHandler}
                reloadStorage={props.reloadStorage}
                myLocationList={props.myLocationList}
                onUpdateCategories={props.onUpdateCategories}
                // onCreate={() => { props.setCurrentCategory() }}
                onCancel={cancelCategoryAdditionHandler}
                dialogOpen={props.dialogOpen}
                onDismiss={() => { props.setDialogOpen() }}
                initialValue=""
                windowWidth={windowWidth}
                windowHeight={windowHeight}
              />
            </View>
          </DialogContent>
        </Dialog>

        {
          props.myLocationList ?

            <FlatList
              keyExtractor={(item, index) => item.id}
              data={props.myLocationList}
              renderItem={itemData => (
                <CardItem
                  id={itemData.item.id}

                  myLocationList={props.myLocationList}
                  onUpdateCategories={props.onUpdateCategories}
                  setRenderedCategory={props.setRenderedCategory}

                  onPress={props.onNext}
                  title={itemData.item.name}
                  style={styles.categoryItem}
                />
              )}
            />
            :
            null
        }
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
    height: 300,
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