import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, FlatList, Button } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";

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
                <Text style={styles.textPrompt}>Please create a Location Categiry</Text>
              </View>
          }
        </View>

        {props.dialogOpen == false &&
          <View style={styles.welcomeContainer}>
            <FontAwesomeIcon name="map-o" style={styles.icon} />
          </View>
        }

        {props.dialogOpen &&
          <>
            {/* <Button
              title="Add"
              // title="Add New Category" 
              color="rgba(0,88,155,1)"
              //todo: add button width 
              onPress={() => setIsAddMode(true)}
            /> */}


            <CategoryInput
              visible={isAddMode}
              onAddCategory={addCategoryHandler}
              onCancel={cancelCategoryAdditionHandler}
              dialogOpen={props.dialogOpen}
              onDismiss={() => { props.setDialogOpen() }}
              initialValue=""
            // showAdd={props.showAdd}
            // onDismiss={() => { props.setDialogOpen(); props.setShowAdd() }}
            />
          </>
        }

        {/* {categoriesList.length ? */}
        {
          props.showAdd &&
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
    </View>
  );
}


const screenHeight = Dimensions.get('window').height + 100;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxHeight: "98%"
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
    alignItems: 'center',
    padding: 20,
  },
  textPrompt: {
    padding: 20,
    fontSize: 18,
    textAlign: 'center'
  },
  icon: {
    color: "rgba(0,88,155,1)",
    fontSize: 90,
  },
});