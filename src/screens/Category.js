import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, Picker } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';

import { myLocationList } from '../router/index';

import InputDialog from '../components/InputDialog';
import CategoryItem from '../components/CategoryItem';
import MyInputText from '../components/MyInputText';
import ActionMenu from '../components/ActionMenu';

export default function Location(props) {

  const [LocationList, setLocationList] = useState([]);
  const [currentLocation, setCurrentLocation] = useState([]);

  const [categoryList, setCategoryList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);

  const [updateList, setUpdateList] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isCancelMode, setIsCancelMode] = useState(false);

  useEffect(() => {
    console.log('66666666666666666666666666 props: ' + props.myLocationList);

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

  const onDeleteHandler = (category) => {
    console.log('TO BE DELETED: ' + category);

    // let newMyStays = [];
    // for (let i = 0; i < props.myLocationList.length; i++) {
    //   if (i !== props.myLocationList.indexOf(deletItem)) {
    //     console.log('Iterate VALUE ', props.myLocationList[i]);
    //     newLocationList.push(props.myLocationList[i])
    //   }
    // }
    // props.onUpdateCategories(newLocationList)
    // // const _myLocationList = props.myLocationList.filter((name) => props.renderedCategory !== category)
    // console.log("newLocationList: ", newLocationList);
    // props.setComponentIndex(componentIndex - 1);  
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ zIndex: 1, width: windowWidth * .7, height: windowHeight * .95 }}>

        <View style={styles.textContainer}>
    
              {props.showMenu &&
                <ActionMenu
                  onActionMenu={props.onActionMenu}
                  onDelete={props.onDelete}
                  myLocationList={props.myLocationList}
                  renderedCategory={props.renderedCategory}
                  onActionMenu={props.onActionMenu}
                  style={styles.actionMenu}
                />
              }

          {
            props.myLocationList ?
              <Text style={styles.textPrompt}>Your locations list</Text>
              :
              <View style={styles.welcomeContainer}>
                <Text style={styles.textPrompt}>Please create{"\n"}your locations</Text>
                <TouchableOpacity
                  onPress={onDeleteHandler(props.renderedCategory)}
                >
                  <FontAwesomeIcon name="add-location" style={styles.icon} />
                </TouchableOpacity>
              </View>
          }
        </View>


        < Dialog
          visible={props.dialogOpen}
          onTouchOutside={() => {
            // setState({ visible: false });
            visable = props.onDismiss();
          }}
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
                <CategoryItem
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
    </View>
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
    textAlign: 'center'
  },
  icon: {
    color: "rgba(0,88,155,1)",
    fontSize: 120,
  }
});