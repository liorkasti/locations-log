import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Modal, Dimensions } from "react-native";

import {addCategoryList} from '../utils/myLocationsStorage';
import {isCategoryExists} from '../utils/myStorageHelper';

import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
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

  useEffect(() => {
    console.log("List update? ", updateList);
    if (updateList) {
      // TODO: validate add asynch starage and sorting capabiliteis
      // initStorage();
    }
  }, [])

  const initStorage = () => {
    setCurrentCategory(props.popLatastCategory);
    setCategoryList(props.myLocationList);
  }

  const addCategoryHandler = categoryName => {
    
    setCurrentCategory(categoryName);

    // if (!isCategoryExists(currentCategory, categoryName)) {
      addCategoryList(categoryList).then(
        setCategoryList(categoryList => [
          ...categoryList,
          { id: Math.random().toString(), name: categoryName }
        ])
      );
    // }
    setIsAddMode(false);
    setUpdateList(true);
    console.log("The Current Category: ", currentCategory);
    console.log("The List Category: ", categoryList);

    updateStorage(categoryName)
  };

  const updateStorage = newCategory => {
    props.onUpdateCategory(newCategory);
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

        <View style={styles.textContainer}>
          {
            categoryList.length ?
              <Text style={styles.textPrompt}>Your Categiries</Text>
              :
              <View style={styles.welcomeContainer}>
                <Text style={styles.textPrompt}>Please add your{"\n"}places categories</Text>
                <FontAwesomeIcon name="add-location" style={styles.icon} />
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

      {/* <InputDialog
        categoryList={categoryList}
        currentCategory={currentCategory}
        componentIndex={props.componentIndex}
        updateList={updateList}
        isAddMode={isAddMode}
        cancelCategoryAdditionHandler={cancelCategoryAdditionHandler}
        updateStorage={updateStorage}
        addCategoryHandler={addCategoryHandler}
        // myLocationList={myLocationList}
        onUpdateList={props.onUpdateList}
        // currentCategories={currentCategories}
        onUpdateCategory={props.onUpdateCategory}

        showMenu={props.showMenu}
        onActionMenu={props.onActionMenu}

        showBack={props.showBack}
        onBack={props.onBack}
        onNext={props.onNext}

        dialogOpen={props.dialogOpen}
        setDialogOpen={props.setDialogOpen}

        onDismiss={props.onDismiss}
        style={styles.componentStyle}
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
    paddingVertical: 40,
    fontSize: 20,
    textAlign: 'center'
  },
  icon: {
    color: "rgba(0,88,155,1)",
    fontSize: 120,
  }
});