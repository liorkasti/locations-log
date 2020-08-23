import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, Picker } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';

import CategoryItem from '../components/CategoryItem';
import CategoryInput from '../components/CategoryInput';

export default function Location(props) {
  const [categoryList, setCategoryList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);

  const [updateList, setUpdateList] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isCancelMode, setIsCancelMode] = useState(false);

  useEffect(() => {
    console.log("List update? ", updateList);
    if (updateList) {
      // todo: validate add asynch starage and sorting capabiliteis
      // initStorage();
    }
  }, [])

  const initStorage = () => {
    setCurrentCategory(props.popLatastCategory);
    setCategoryList(props.myLocationList);
  }

  const addCategoryHandler = categoryName => {
    setCategoryList(currentCategory => [
      ...currentCategory,
      { id: Math.random().toString(), name: categoryName }
    ]);
    setIsAddMode(false);
    setUpdateList(true);
    setCurrentCategory(categoryName);
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
                <CategoryItem
                  id={itemData.item.id}
                  // onDelete={removeCategoryHandler}
                  onPress={props.onNext}
                  title={itemData.item.name}
                  style={styles.categoryItem}
                />
              )}
            />
            : null
        }

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