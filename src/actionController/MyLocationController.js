import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Modal, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';

// import {
//   addCategory,
//   deleteCategory,
//   editCategory,
// } from '../utils/myLocationsStogage';

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

  let KEY = 1;

  // const numberOfCategories = 0;

  useEffect(() => {
    // console.log("MyLocationController props: ", props);
    initStorage();
  }, []);

  useEffect(() => {

    if (categoryList.length > 0) {
      console.warn("categoryList.length > 1 ?: ", categoryList.length);
      // setCategoryList(props.myLocationList);
    }

    if (categoryList.length > 0) {

    }
    // return setUpdateStorage();
  }, [updateList])


  const addCategoryHandler = newNameItem => {
    console.log("111111111111111111111 newNameItem: ", newNameItem);
    console.log("props List Category: ", props.myLocationList);
    console.log("props Current Category id: ", props.popLatastCategory);

    updateStorage(currentCategory)
    console.log("The Current Category: ", currentCategory);
    console.log("The List Category: ", categoryList);

    try {
      initStorage();
    } catch (error) {
      console.error(`localStorageUtility.changeSetting: ${error}`);
    }


    // setIsAddMode(false);
    // props.onModify(true);
    // setUpdateList(true);
    // setCurrentCategory(newNameItem);

  };

  const updateStorage = newCategory => {
    props.onUpdateCategory(newCategory);
    props.onUpdateList(newCategory)
  };

  const initStorage = () => {
    setCurrentCategory(props.popLatastCategory);
    setCategoryList(props.myLocationList);
  }

  const removeCategoryHandler = categoryId => {
    console.log('TO BE DELETED: ' + categoryId);
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
            categoryList.length > 1 ?
              <Text style={styles.textPrompt}>Places Categiries</Text>
              :
              <View style={styles.welcomeContainer}>
                <Text style={styles.textPrompt}>Please Add a Place Category</Text>
                <FontAwesomeIcon name="add-location" style={styles.icon} />
                {/* <Icon name="map-marker-plus" style={styles.icon} /> */}
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

        {console.log('categoryList.length: ' + categoryList.length)}
        {

          categoryList.length > 0 &&
          <FlatList
            // keyExtractor={(item, index) => item.id}
            data={props.myLocationList}
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
    fontSize: 120,
  }
});