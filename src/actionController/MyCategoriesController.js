import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Modal, Dimensions } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/MaterialCommunityIcons";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import toastMaker from '../utils/toastMaker';

import { KEY } from '../router/index';

import InputDialog from '../components/InputDialog';
import CardItem from '../components/CardItem';
import MyInputText from '../components/MyInputText';

export default function MyCategoriesController({ props }) {

  const [categoryList, setCategoryList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);

  const [isUpdateList, setIsUpdateList] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isCancelMode, setIsCancelMode] = useState(false);

  useEffect(() => {
    if (isUpdateList) {
      console.log("The Current Category: ", currentCategory);
      console.log("The List Category: ", categoryList);
      reloadStorage()
      // console.log("List update on chancge? ", isUpdateList);
    }
    // return {  };
  }, [categoryList])

  const addCategoryHandler = categoryName => {

    // setCurrentCategory(currentCategory => [
    //   ...currentCategory,
    //   { id: Math.random().toString(), name: categoryName }
    // ]);

    setCurrentCategory(categoryName);

    setCategoryList(currentCategory => [
      ...currentCategory,
      { id: Math.random().toString(36).substr(2, 5), name: categoryName }
    ]);


    setIsAddMode(false);
    setIsUpdateList(true);
    updateStorage(categoryName);
    //TODO: set the line below to active before production.
    // props.setDialogOpen(false)
  };

  // call for local storing 
  const updateStorage = (newListItem) => {
    props.onUpdateCategory(newListItem)
    props.onUpdateCategories(newListItem)
    if (isUpdateList) {
      // reloadStorage();
      console.log("List update on chancge? ", isUpdateList);
    }
    setIsUpdateList(false);
  };

  const reloadStorage = () => {
    setCurrentCategory(props.renderedCategory);
    setCategoryList(props.renderedCategories);
    // console.log("Reload Category: ", props.renderedCategory);
    // console.log("Reload List: ", props.myLocationList);
  }

  const cancelCategoryAdditionHandler = () => {
    setIsCancelMode(true);
    props.setDialogOpen(false)
  };

  const removeCategoryHandler = categoryId => {
    console.log('TO BE DELETED: ' + categoryId);
    // console.log("Current Category: ", currentCategory);
    setCategoryList(currentCategory => {
      return currentCategory.filter(category => category.id !== categoryId);
    });
    setIsUpdateList(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ zIndex: 1, width: windowWidth * .7, height: windowHeight * .95 }}>

        <View style={styles.textContainer}>
          {
            (categoryList.length || props.renderedCategories.length) ?

              <Text style={styles.textPrompt}>Your Categories List</Text>
              :
              <View style={styles.welcomeContainer}>
                <Text style={styles.textPrompt}>Please add your{"\n"}places categories</Text>
                <FontAwesomeIcon name="map-marker" style={styles.icon} />
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
              <Text style={styles.textDialog}>Create a new Category</Text>
              <MyInputText
                initialValue=""
                visible={isAddMode}
                dialogOpen={props.dialogOpen}
                onAdd={addCategoryHandler}
                onCancel={cancelCategoryAdditionHandler}
                onDismiss={() => { props.setDialogOpen() }}

                reloadStorage={reloadStorage}
                renderedCategories={props.renderedCategories}
                onUpdateCategories={props.onUpdateCategories}

                windowWidth={windowWidth}
                windowHeight={windowHeight}
              />
            </View>
          </DialogContent>
        </Dialog>

        {
          (categoryList.length || props.renderedCategories.length) ?

            <FlatList
              keyExtractor={(item, index) => item.id}
              data={props.renderedCategories}
              renderItem={itemData => (
                <CardItem
                  id={itemData.item.id}
                  // onDelete={removeCategoryHandler}
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


const windowHeight = Dimensions.get('window').height + 100;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "98%"
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