import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Modal, Dimensions } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import toastMaker from '../utils/toastMaker';

import { KEY } from '../router/index';

import InputDialog from '../components/InputDialog';
import CategoryItem from '../components/CategoryItem';
import MyInputText from '../components/MyInputText';

// import EmptyView from './components/EmptyView';

export default function MyLocationController({ props }) {
  const [categoryList, setCategoryList] = useState([]);
  const [currentCategory, setCurrentCategory] = useState([]);

  const [isUpdateList, setIsUpdateList] = useState(false);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isCancelMode, setIsCancelMode] = useState(false);

  useEffect(() => {
    console.log("The Current Category: ", currentCategory);
    console.log("The List Category: ", categoryList);
    if (isUpdateList) {
      reloadStorage()
      console.log("List update on chancge? ", isUpdateList);
    }
    // return {  };
  }, [categoryList])

  const addCategoryHandler = categoryName => {

    setCategoryList(currentCategory => [
      ...currentCategory,
      { id: (Math.random().toString() * 10000) % 2, name: categoryName }
    ]);
    setIsAddMode(false);
    setIsUpdateList(true);
    setCurrentCategory(categoryName);
    updateStorage(categoryName)
    setIsUpdateList(true);
    if (isUpdateList) {
      // reloadStorage();      
      console.log("List update on chancge? ", isUpdateList);
    }
    setIsUpdateList(false);
  };

  const updateStorage = (newListItem) => {
    props.onUpdateCategory(newListItem)
  };

  const removeCategoryHandler = categoryId => {
    console.log('TO BE DELETED: ' + categoryId);
    // console.log("Current Category: ", currentCategory);
    setCategoryList(currentCategory => {
      return currentCategory.filter(category => category.id !== categoryId);
    });
    setIsUpdateList(true);
  };

  const cancelCategoryAdditionHandler = () => {
    setIsCancelMode(true);
  };

  const reloadStorage = () => {
    setCurrentCategory(props.popLatastCategory);
    setCategoryList(props.myLocationList);
    console.log("Reload Category: ", props.renderedCategory);
    console.log("Reload List: ", props.myLocationList);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={{ zIndex: 1, width: windowWidth * .7, height: windowHeight * .95 }}>

        <View style={styles.textContainer}>
          {
            (categoryList.length || props.myLocationList.length) ?
              // categoryList.length ?

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
              <Text style={styles.textDialog}>Create a new Category</Text>
              <MyInputText
                visible={isAddMode}
                onAdd={addCategoryHandler}
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

        {
          categoryList.length ?

            <FlatList
              keyExtractor={(item, index) => item.id}
              data={categoryList}
              renderItem={itemData => (
                <CategoryItem
                  id={itemData.item.id}
                  // onDelete={removeCategoryHandler}
                  setRenderedCategory={props.setRenderedCategory}

                  // setIsSelectedCategory={setIsSelectedCategory}
                  // isSelectedCategory={isSelectedCategory}

                  // setSelectedCategory={props.setSelectedCategory}
                  // selectedCategory={props.selectedCategory}                  

                  onPress={props.onNext}
                  title={itemData.item.name}
                  style={styles.categoryItem}
                />
              )}
            />
            :
            props.myLocationList ?
              <FlatList
                keyExtractor={(item, index) => item.id}
                data={props.myLocationList}
                renderItem={itemData => (
                  <CategoryItem
                    id={itemData.item.id}

                    setRenderedCategory={props.setRenderedCategory}

                    // setIsSelectedCategory={props.setIsSelectedCategory}
                    // isSelectedCategory={isSelectedCategory}
  
                    // setSelectedCategory={props.setSelectedCategory}
                    // selectedCategory={props.selectedCategory}   

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