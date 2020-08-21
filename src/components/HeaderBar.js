import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image, ToolbarAction } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";

const HeaderBar = (props) => {


  useEffect(() => {
    // console.warn("show componentIndex: ", props.componentIndex)
  }, [props.componentIndex]);

  return (
    <View style={[styles.container, props.style]}>
      <View style={styles.headerStack}>
        <Text style={styles.bsD1}>BS&quot;D</Text>
        <Text style={styles.header}>{props.header}</Text>
        <View style={styles.buttonstack}>
          {props.componentIndex > 0 &&
            <TouchableOpacity
              onPress={() => { props.onBack() }} >

              <FontAwesomeIcon
                name="chevron-left"
                style={styles.bachIcon}>
              </FontAwesomeIcon>

            </TouchableOpacity>
          }

          {props.componentIndex === 0 &&
            <View style={styles.createbuttonRow}>
              <TouchableOpacity
                onPress={() => { props.setDialogOpen(); }}
                style={styles.createbutton}>

                {props.dialogOpen
                  ?
                  <Icon name="close" style={styles.icon} />
                  :
                  <FontAwesomeIcon name="add-location" style={styles.icon} />
                }
              </TouchableOpacity>
            </View>
          }
          {props.componentIndex === 1 &&
            <View style={styles.createbuttonRow}>
              {/* todoL rigt toolbar */}
              <ToolbarAction icon="more-vert"
              //  onPress={null}
              />
              <TouchableOpacity
                onPress={() => { props.setDialogOpen(); }}
                style={styles.createbutton}>

                {props.dialogOpen
                  ?
                  <Icon name="close" style={styles.icon} />
                  :
                  <FontAwesomeIcon name="add-location" style={styles.icon} />
                }
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
  headerStack: {
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
    height: 30,
    top: 7,
    left: windowWidth - 42
  },
  icon: {
    color: "rgba(0,88,155,1)",
    fontSize: 28,
  },
  bachIcon: {
    color: "rgba(0,88,155,1)",
    fontSize: 35,
    width: "100%",
    height: 30,
    top: 0,
    left: 4
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
