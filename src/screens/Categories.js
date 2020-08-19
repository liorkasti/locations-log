import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Modal, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';

import InputDialog from '../components/InputDialog';
import CategoryItem from '../components/CategoryItem';
import CategoryInput from '../components/CategoryInput';
// import EmptyView from './components/EmptyView';

export default function Categories({ props }) {

  const [categoriesList, setCategoriesList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isCancelMode, setIsCancelMode] = useState(false);


  useEffect(() => {
    console.warn("isAddMode: ", isAddMode);
    console.log("The Location Categories: ", categoriesList);
  }, [])

  useEffect(() => {
    console.error("dialogOpen: ", props);
  }, [props])

  const addCategoryHandler = categoryTitle => {
    setCategoriesList(currentCategories => [
      ...currentCategories,
      { id: Math.random().toString(), value: categoryTitle }
    ]);
    setIsAddMode(false);
  };


  const removeCategoryHandler = categoryId => {
    console.log('TO BE DELETED: ' + categoryId);
    console.log(currentCategories);
    setCourseCategorys(currentCategories => {
      return currentCategories.filter(category => category.id !== categoryId);
    });
  };

  const cancelCategoryAdditionHandler = () => {
    setIsCancelMode(true);
  };

  return (
    <View style={styles.container}>
      <ScrollView>

        <View style={styles.textContainer}>
          {
            categoriesList.length ?
              <Text style={styles.textPrompt}>Location Categiries</Text>
              :
              <View style={styles.welcomeContainer}>
                <Text style={styles.textPrompt}>Please Add Location Categiry</Text>
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
          // animationType = "slide"
          // transparent = { true}
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
                onCancel={cancelCategoryAdditionHandler}
                dialogOpen={props.dialogOpen}
                onDismiss={() => { props.setDialogOpen() }}
                initialValue=""
                windowWidth={windowWidth}
                windowHeight={windowHeight}
              // showAdd={props.showAdd}
              // onDismiss={() => { props.setDialogOpen(); props.setShowAdd() }}
              />
            </View>

          </DialogContent>
        </Dialog>

        {/* } */}

        {/* {categoriesList.length ? */}
        {
          // props.showAdd &&
          <FlatList
            keyExtractor={(item, index) => item.id}
            data={categoriesList}
            renderItem={itemData => (
              <CategoryItem
                id={itemData.item.id}
                onDelete={removeCategoryHandler}
                onPress={props.onNext}
                title={itemData.item.value}
              // style={styles.categoryItem}
              />
            )}
          />

        }

        {/* <InputDialog
          cancelLabel="Cancel"
          okLabel="Add"
          backgroundColor="white"
          initialValue=""
          title="Create a new category"
          // visible={true}
          visible={props.dialogOpen}
          onDismiss={props.onDismiss}
        /> */}


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