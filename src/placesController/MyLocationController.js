import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Modal, Dimensions } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';

import ModifyItem from '../model/ModifyItem'

import InputDialog from '../components/InputDialog';
import CategoryItem from '../components/CategoryItem';
import CategoryInput from '../components/CategoryInput';
// import EmptyView from './components/EmptyView';

export default function MyLocationController({ props }) {
  const [categoryList, setCategoryList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);

  const [updateList, setUpdateList] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isCancelMode, setIsCancelMode] = useState(false);

  // const numberOfCategories = 0;

  useEffect(() => {
    // console.warn("isAddMode: ", isAddMode);
  }, [])

  useEffect(() => {

    // console.warn("updateList: ", updateList);
    // console.error("Current Category: ", currentCategory);

    if (updateList) { props.onUpdateCategory(currentCategory); }

  }, [currentCategory])

  useEffect(() => {
    // console.log("MyLocationController props: ", props);
    // console.error("dialogOpen: ", props);

    if (updateList) {
      // console.log("The numberOfCategories: ", categoryList.length);
      // console.log("The Location Categories: ", categoryList);
      // props.onUpdateList(currentCategories => [
      //   ...currentCategories,
      //   { id: Math.random().toString(), name: categoryName }
      // ]);
    }
  }, [categoryList])

  const addCategoryHandler = categoryName => {
    setCategoryList(currentCategory => [
      ...currentCategory,
      { id: Math.random().toString(), name: categoryName }
    ]);
    setIsAddMode(false);
    setUpdateList(true);
    setCurrentCategory(categoryName);
  };

  // setCurrentCategory = currentCategory => {
  //   props.currentCategory(currentCategory);
  // };


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

        <View style={styles.textContainer}>
          {
            categoryList.length ?
              <Text style={styles.textPrompt}>Map Categiries</Text>
              :
              <View style={styles.welcomeContainer}>
                <Text style={styles.textPrompt}>Please Add a Map Category</Text>
                <FontAwesomeIcon name="map-o" style={styles.icon} />
              </View>
          }
        </View>

        {/* {props.dialogOpen == false &&
          <View style={styles.welcomeContainer}>
          </View>
        } */}

        {/* {props.dialogOpen && */}

        < Dialog
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
                onAddCategory={addCategoryHandler}
                onCreate={() => { props.setCurrentCategory() }}
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

        {/* } */}

        {/* {categoryList.length ? */}
        {
          // props.showAdd &&
          categoryList.length ?

            <FlatList
              keyExtractor={(item, index) => item.id}
              data={categoryList}
              renderItem={itemData => (
                <CategoryItem
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