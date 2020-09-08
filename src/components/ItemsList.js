import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, FlatList, ScrollView, Dimensions, Picker } from "react-native";

import CategoryCard from './CategoryCard';
import LocationCard from './LocationCard';

// export default function Category({ props }) {
// export function Category( {props} ) {
// const Category = (props) => {
const ItemsList = (props) => {

  const [data, setData] = useState([]);

  useEffect(() => {
    // console.log(' 000000000 props : ' + JSON.stringify(props));
    // console.log(' NNNNNNNNN props.renderedCategories name NNNNNNNNN : ' + props.renderedCategories[props.renderedCategories.length - 1].item.categoryName);
    console.log(' NNNNNNNNN categories name  map NNNNNNNNN : ' + props.renderedCategories.map(category => category.categoryName));
    // console.log(' NNNNNNNNN props.renderedCategory NNNNNNNNN : ' + JSON.stringify(props.renderedCategory));

    // console.log(' NNNNNNNNN locationName NNNNNNNNN : ' + props.renderedLocations[props.renderedLocations.length - 1].item.locationName);
    // console.log(' NNNNNNNNN renderedLocations NNNNNNNNN : ' + JSON.stringify(props.renderedLocations));
    // console.log(' NNNNNNNNN locations inputName map NNNNNNNNN : ' + props.renderedLocations.map(location => location.item.locationName));

    // if (props.componentIndex === 0) {
    //   setData(props.renderedCategories)
    //   console.log(' NNNNNNNNN props.renderedCategory NNNNNNNNN : ' + props.renderedCategory);
    // } else {
    //   setData(props.renderedLocations)
    // }
  }, [])

  // const DATA = JSON.stringify(props.locationList)
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
        {props.componentIndex > 0 ?
          // --------------------- Category View: ---------------------
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={props.renderedLocations}
            renderItem={itemData => (
              <LocationCard
                id={itemData.item.id}
                onSelectedLocation={props.onSelectedLocation}
                // onDelete={removeCategoryHandler}
                onPress={props.onPress}
                title={itemData.item.item.locationName}
                // title={props.renderedLocations[props.renderedLocations.length-1].item.locationName}
              />
            )}
          />
          :
          // --------------------- Categories View: --------------------- 
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={props.renderedCategories}
            renderItem={itemData => (
              <CategoryCard
                id={itemData.item.id}
                onSelectedCategory={props.onSelectedCategory}
                // onDelete={removeCategoryHandler}
                onPress={props.onNext}
                title={itemData.item.categoryName}
                // style={styles.categoryItem}
              />
            )}
          />
        }
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
    width: '100%',
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
