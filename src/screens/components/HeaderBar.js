import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";

const HeaderBar = (props) =>  {

  useEffect(() => {
     console.warn("show componentIndex: ", props.componentIndex)
  },[props.componentIndex]);


  // onAddCategory = name => {
  //   this.dismissShowDialog();
  //   console.log(`CategoryScreen: inserted category name is ${name}`);
  //   if (!name || name.length == 0) {
  //     toastMaker('Please insert category name');
  //     return;
  //   }
  //   if (isCategoryExists({name}, this.props.categories)) {
  //     toastMaker('Category already exists');
  //     return;
  //   }
  //   this.props.addCategory({name});
  // };

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.headerstack}>
        <Text style={styles.bsD1}>BS&quot;D</Text>
        <Text style={styles.header}>{props.header}</Text>
        <View style={styles.buttonstack}>
          {props.componentIndex > 0 &&
            <TouchableOpacity onPress={() => { props.onBack() }} >
              <Icon name="chevron-left" style={styles.icon}></Icon>
            </TouchableOpacity>
          }
          {props.componentIndex === 0 &&
            <View style={styles.createbuttonRow}>
              <TouchableOpacity onPress={() => { props.onCreate() }} style={styles.createbutton}>
                <Icon name="plus" style={styles.icon}></Icon>
                {/* <Text style={styles.textCteate}>CREATE</Text> */}
              </TouchableOpacity>
            </View>
          }
        </View>
      </View>
    </View>
  );
}


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const styles = StyleSheet.create({
  container: {
    width: windowWidth,
  },
  headerstack: {
    height: 91,
    borderColor: "rgba(0,88,155,1)",
    borderWidth: 0,
    borderBottomWidth: .7,
    justifyContent: "center",

  },
  bsD1: {
    color: "rgba(177,177,177,1)",
    opacity: 0.75,
    fontSize: 10,
    fontFamily: "roboto-regular",
    alignSelf: "flex-end",
    marginTop: 10,
    marginRight: 18
  },
  buttonback: {
    width: 29,
    height: 40,
  },
  createbuttonRow: {
    position: "absolute",
  },
  createbutton: {
    width: "100%",
    height: 40,
    // marginRight: 38,
    left: windowWidth - 48
  },
  icon: {
    color: "rgba(0,88,155,1)",
    fontSize: 40
  },
  textCteate: {
    color: "rgba(0,88,155,1)",
    fontSize: 16,
    right: 26
  },
  header: {
    position: "absolute",
    width: '100%',
    color: "rgba(0,88,155,1)",
    fontSize: 20,
    fontFamily: "roboto-regular",
    textAlign: "center",
  },
  buttonstack: {
    height: 62,
    flexDirection: "row",
  }
});

export default HeaderBar;
