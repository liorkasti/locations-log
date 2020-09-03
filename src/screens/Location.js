import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, Dimensions, Picker } from "react-native";
import LocationItem from '../components/LocationItem'

export default function Location(props) {

  useEffect(() => {
    if (categoryList) {
      reloadStorage()
      console.log("The Location props: ", props);
    }
    // return {  };
  }, [])

  return (
    <View style={styles.container}><Text>Location Screen</Text>
      <View style={styles.parent}>
        <LocationItem></LocationItem>
      </View>
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