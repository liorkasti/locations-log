import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Modal, Dimensions } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';

import Categories from '../placesController/MyLocationController';

import InputDialog from '../components/InputDialog';
import CategoryItem from '../components/CategoryItem';
import CategoryInput from '../components/CategoryInput';
// import EmptyView from './components/EmptyView';

export default function ModifyItem ({ props }) {
  const [categoriesList, setCategoriesList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isCancelMode, setIsCancelMode] = useState(false);
  
  // const numberOfCategories = 0;

  // useEffect(() => {
  //   // console.warn("isAddMode: ", isAddMode);
  //   console.log("The numberOfCategories: ", categoriesList.length);
  //   console.log("The Location Categories: ", categoriesList);
  // }, [])

  // useEffect(() => {
  //   // console.error("dialogOpen: ", props);
  // }, [props])

  // const addCategoryHandler = categoryTitle => {
  //   setCategoriesList(currentCategories => [
  //     ...currentCategories,
  //     { id: Math.random().toString(), name: categoryTitle }
  //   ]);
  //   setIsAddMode(false);
  // };


  // const removeCategoryHandler = categoryId => {
  //   console.log('TO BE DELETED: ' + categoryId);
  //   console.log(currentCategories);
  //   setCourseCategorys(currentCategories => {
  //     return currentCategories.filter(category => category.id !== categoryId);
  //   });
  // };

  // const cancelCategoryAdditionHandler = () => {
  //   setIsCancelMode(true);
  // };

  return (
    <View style={styles.container}>

      {/* <Categiries
        categoriesList={categoriesList}
        isAddMode={isAddMode}
        isCancelMode={isCancelMode}
        addCategoryHandler={addCategoryHandler}
        removeCategoryHandler={removeCategoryHandler}
        cancelCategoryAdditionHandler={cancelCategoryAdditionHandler}
      /> */}

    </View >
  );
}


const windowHeight = Dimensions.get('window').height + 100;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "98%"
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
    paddingVertical: 30,
    fontSize: 20,
    textAlign: 'center'
  },
  icon: {
    color: "rgba(0,88,155,1)",
    fontSize: 90,
  },
});