import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Dimensions, ScrollView, FlatList } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';
import CategoryItem from '../components/CategoryItem';
import CategoryInput from '../components/CategoryInput';

export default function Categories(props) {
  const [inputValue, setInputValue] = useState("");


  const onChangeText = (newText) => {
    setInputValue(newText);
  }
  return (
    <View style={styles.container}>
      <ScrollView style={{ zIndex: 1, width: windowWidth * .7, height: windowHeight * .95 }}>

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
                visible={props.isAddMode}
                onAddCategory={props.addCategoryHandler}
                onCreate={() => { props.setCurrentCategory }}
                onCancel={props.cancelCategoryAdditionHandler}
                dialogOpen={props.dialogOpen}
                onDismiss={() => { props.setDialogOpen}}
                initialValue=""
                windowWidth={windowWidth}
                windowHeight={windowHeight}
              />
            </View>
          </DialogContent>
        </Dialog>

        {
          props.categoryList.length ?
            <FlatList
              keyExtractor={(item, index) => item.id}
              data={props.categoryList}
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