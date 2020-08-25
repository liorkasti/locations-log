import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image, } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Hamburger from 'react-native-animated-hamburger';
import ActionMenu from '../components/ActionMenu';

const HeaderBar = (props) => {

  useEffect(() => {
    // TODO: validate currect index
    // console.warn("show componentIndex: ", props)
  }, [props.componentIndex]);

  return (
    <View style={styles.container}>
      <View style={styles.headerStack}>
        <Text style={styles.bsD1}>BS&quot;D</Text>
        <Text style={styles.header}>{props.header}</Text>
        <View style={styles.buttonstack}>
          {props.componentIndex > 0 &&
            <TouchableOpacity onPress={() => {
              props.onBack()
              props.onUpdateCategories(props.renderedCategories)
            }} >
              <FontAwesomeIcon
                name="chevron-left"
                style={styles.bachIcon}>
              </FontAwesomeIcon>

            </TouchableOpacity>
          }

          {props.componentIndex === 0 ?
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
            :
            props.componentIndex === 1 &&
            <View style={styles.createbuttonRow}>
              {/* TODOL right toolbar */}
              <TouchableOpacity
                onPress={() => { props.setShowMenu() }}
                style={styles.hamburgerMenu} >
                <Hamburger
                  type="cross"
                  active={props.showMenu}
                  // onPress={() => { props.onPress(); }}
                  onPress={() => { props.setShowMenu() }}
                  underlayColor="transparent"
                />
              </TouchableOpacity>

              {props.showMenu &&
                <ActionMenu
                  onActionMenu={props.onActionMenu}
                  onDelete={props.onDelete}
                  renderedCategories={props.renderedCategories}
                  renderedCategory={props.renderedCategory}
                  onActionMenu={props.onActionMenu}
                  style={styles.actionMenu}
                />
              }

              {/* <TouchableOpacity
                onPress={() => { props.setDialogOpen(); }}
                style={styles.createbutton}>
                {props.dialogOpen ?
                  <Icon name="close" style={styles.icon} />
                  :
                  <FontAwesomeIcon name="add-location" style={styles.icon} />
                }
              </TouchableOpacity> */}
            </View>
          }
        </View>
      </View>
    </View >
  );
}

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: windowWidth,
  },
  headerStack: {
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
    flexDirection: "row",
  },
  actionMenu: {
    // position: "absolute",
    // width: windowWidth,
    // right: windowWidth,
    // left: 0,
    // top: 64
  },
  hamburgerMenu: {
    zIndex: 100,
    height: 30,
    top: 3,
    left: windowWidth - 50,
    fontSize: 28,
  },
  createbutton: {
    width: "100%",
    height: 30,
    top: 7,
    left: windowWidth - 42,
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
  textCreate: {
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
