import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, FlatList, ScrollView, Dimensions, Picker } from "react-native";
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

  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    console.log(' NNNNNNNNN nameInput NNNNNNNNN : ' + props.renderedLocations[props.renderedLocations.length-1].item.nameInput);
  }, [])

  const DATA = JSON.stringify(props.locationList)
  // const DATA = [
  //   {
  //     id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
  //     title: "First Item",
  //   },
  //   {
  //     id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
  //     title: "Second Item",
  //   },
  //   {
  //     id: "58694a0f-3da1-471f-bd96-145571e29d72",
  //     title: "Third Item",
  //   },
  // ];

  return (
    <View style={styles.container}>
      {/* <ScrollView style={{ zIndex: 1, width: windowWidth * .7, height: windowHeight * .95 }}> */}
      <SafeAreaView style={styles.container}>
        {/* <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            extraData={selectedId}
          /> */}

        <FlatList
          keyExtractor={(item, index) => item.id}
          data={props.renderedLocations}
          renderItem={itemData => (
            <LocationCard
              id={itemData.item.id}
              onSelectedLocation={props.onSelectedLocation}

              // onDelete={removeCategoryHandler}
              onPress={props.onNext}
              title={props.renderedLocations[props.renderedLocations.length-1].item.nameInput}
              style={styles.cardItem}
            />
          )}
        />
      </SafeAreaView>
      {/* </ScrollView> */}
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
  cardItem: {
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

export default ItemsList;
