import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, Picker } from "react-native";

export default function Location(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     editMode: false,
  //     name: '',
  //     address: '',
  //     category: '',
  //     coordinates: {
  //       latitude: '',
  //       longitude: '',
  //     },
  //   };
  // }

  return (
    <View style={styles.container}><Text>Location Screen</Text>
      {/* <View style={styles.parent}>
        <TextInput
          label={'Name'}
          iconName={'label'}
          iconColor={textInputColor}
          // editable={this.state.editMode}
          // onChangeText={this.onNameTyped}
          value={this.state.name}
        />
        <TextInput
          label={'Address'}
          iconName={'place'}
          iconColor={textInputColor}
          // editable={this.state.editMode}
          // onChangeText={this.onAddressTyped}
          value={this.state.address}
        />
        <View style={styles.categoryLayout}>
          <TextInput
            style={styles.field}
            label={'Category'}
            iconName={'apps'}
            iconColor={textInputColor}
            editable={false}
            value={this.state.category}
          />
          {this.state.editMode && (
            <EditButton
              title="Choose"
              // onPress={this.onCategoryPickerClick}
              hide={!this.state.editMode}
              marginHorizontal={24}
            />
          )}
        </View>
        <View style={styles.coordinatesLayout}>
          <TextInput
            style={styles.field}
            label={'Latitude'}
            iconName={'map'}
            iconColor={textInputColor}
            editable={false}
            // value={`${this.state.coordinates.latitude}`}
            numericOnly={true}
          />
          <TextInput
            style={styles.field}
            label={'Longitude'}
            iconName={'map'}
            iconColor={textInputColor}
            widthoutIcon={true}
            editable={false}
            // value={`${this.state.coordinates.longitude}`}
            numericOnly={true}
          />
        </View>
        <EditButton
          title="Choose Coordinates from Map"
          // onPress={this.chooseCoordinatesFromMap}
          hide={!this.state.editMode}
          marginHorizontal={24}
          marginVertical={24}
        />
      </View> */}
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
  parent: {
    flex: 1,
    // backgroundColor: COLOR.grey100,
    flexDirection: 'column',
  },
  list: {
    flex: 1,
  },
  categoryLayout: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: COLOR.white,
  },
  coordinatesLayout: {
    width: '100%',
    flexDirection: 'row',
  },
  field: {
    flex: 1,
  },
  editButtonContainer: {
    // borderColor: COLOR.blue500,
    // backgroundColor: COLOR.white,
  },
});