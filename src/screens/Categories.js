import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, FlatList, Button } from "react-native";
import InputDialog from './components/InputDialog';
import CategoryItem from './components/CategoryItem';
import CategoryInput from './components/CategoryInput';
// import EmptyView from './components/EmptyView';

export default function Categories(props) {

  const [categoriesList, setCategoriesList] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);
  const [isCancelMode, setIsCancelMode] = useState(false);

  console.log("The Location Categories: ", categoriesList);

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
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <ScrollView>

        {
          //todo: show txt on input true
          <Text>Please create a new Location Categiries</Text>
        }

        <Button
          title="Add"
          // title="Add New Category" 
          onPress={() => setIsAddMode(true)}
        />

        <CategoryInput
          visible={isAddMode}
          onAddCategory={addCategoryHandler}
          onCancel={cancelCategoryAdditionHandler}
          dialogOpen={props.dialogOpen}
          onDismiss={props.onDismiss}
          initialValue=""
        />
        <FlatList
          keyExtractor={(item, index) => item.id}
          data={categoriesList}
          renderItem={itemData => (
            <CategoryItem
              id={itemData.item.id}
              onDelete={removeCategoryHandler}
              title={itemData.item.value}
            />
          )}
        />

        {/* <InputDialog
          cancelLabel="Cancel"
          okLabel="Add"
          backgroundColor="white"
          initialValue=""
          title="Create a new category"
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
    // flex: 1,
    // justifyContent: "center",
    padding: 50
  },
  boxContainer: {
    padding: 50,
    flexDirection: 'row',
    width: '80%',
    height: 300,
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});