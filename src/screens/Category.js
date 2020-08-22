import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, Picker } from "react-native";

import CategoryItem from '../components/CategoryItem';
import CategoryInput from '../components/CategoryInput';

export default function Location(props) {
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
            categoryList.length ?
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


const screenHeight = Dimensions.get('window').height + 100;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    // flex: 1,
    height: 1600,
    width: windowWidth,
  },

});