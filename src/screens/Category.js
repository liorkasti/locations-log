import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, Picker } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';

import LocationItem from '../components/LocationItem';
import CategoryInput from '../components/MyInputText';

export default function Location(props) {
  const [LocationList, setLocationList] = useState([]);
  const [currentLocation, setCurrentLocation] = useState([]);

  const [categoryList, setCategoryList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);

  const [updateList, setUpdateList] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isCancelMode, setIsCancelMode] = useState(false);

  useEffect(() => {
    console.log("List update? ", updateList);
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

    // updateStorage(categoryName)
  };

  const updateStorage = newCategory => {
    props.onUpdateLocation(newCategory);
    props.onUpdateList(newCategory)
    console.log("props List Category: ", props.myLocationList);
    console.log("props Current Category: ", props.popLatastCategory);
  };

  const removeCategoryHandler = categoryId => {
    console.log('TO BE DELETED: ' + categoryId);
    // console.log("Current Category: ", currentCategory);
    setCategoryList(currentCategory => {
      return currentCategory.filter(category => category.id !== categoryId);
    });
    setUpdateList(true);
  };

  const cancelCategoryAdditionHandler = () => {
    setIsCancelMode(true);
  };
    
  return (
    <View style={styles.container}>
      <ScrollView style={{ zIndex: 1, width: windowWidth * .7, height: windowHeight * .95 }}>

      {props.showMenu &&
        <MyProfileMenu
          totalStays={props.totalStays}
          // onUserPress={(action) => props.onUserPress(action)}
          handleMenu={(menuItem) => { props.handleMenu(menuItem); }}
          style={styles.headerMenu} />
      }

        <View style={styles.textContainer}>
          {
            props.myLocationList ?
              <Text style={styles.textPrompt}>Your Categiries</Text>
              :
              <View style={styles.welcomeContainer}>
                <Text style={styles.textPrompt}>Please add your{"\n"}places categories</Text>
                <FontAwesomeIcon name="add-location" style={styles.icon} />
              </View>
          }
        </View>

        {/* < Dialog
          visible={props.dialogOpen}
          onTouchOutside={() => {
            this.setState({ visible: false });
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
              <CategoryInput
                visible={isAddMode}
                onAddCategory={addLocationHandler}
                onCreate={() => { props.setCurrentCategory() }}
                onCancel={cancelCategoryAdditionHandler}
                dialogOpen={props.dialogOpen}
                onDismiss={() => { props.setDialogOpen() }}
                initialValue=""
              />
            </View>
          </DialogContent>
        </Dialog>

        {
          categoryList.length ?
            <FlatList
              keyExtractor={(item, index) => item.id}
              //toso: get data from storage
              data={props.myLocationList}
              renderItem={itemData => (
                <LocationItem
                  id={itemData.item.id}
                  // onDelete={removeCategoryHandler}
                  onPress={props.onNext}
                  title={itemData.item.name}
                  style={styles.categoryItem}
                />
              )}
            />
            : null
        } */}

      </ScrollView>
    </View>
  );
}


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // flex: 1,
    height: 1600,
    width: windowWidth,
  },

});