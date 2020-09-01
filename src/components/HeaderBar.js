import React, { useState, useEffect } from "react";
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image, } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Hamburger from '../components/Hamburger';
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

          {props.componentIndex > 0 ?
            // --------------------- Current Category View: ---------------------
            <>
              <TouchableOpacity onPress={() => {
                props.onBack()
              }} >
                <FontAwesomeIcon
                  name="chevron-left"
                  style={styles.bachIcon}>
                </FontAwesomeIcon>
              </TouchableOpacity>

              <View style={styles.createButtonRow}>

                <TouchableOpacity
                  onPress={props.setShowMenu}
                  style={styles.hamburgerMenu} >
                  <Hamburger
                    type="cross"
                    active={props.showMenu}
                    onPress={props.setShowMenu}
                    underlayColor="transparent"
                  />
                </TouchableOpacity>

                {props.showMenu &&

                  <View style={styles.buttonRow}>

                    <TouchableOpacity
                      onPress={() => { props.onActionMenu("addLocation") }}
                      style={styles.actionMenu}>
                      {props.dialogLocationOpen ?
                        <Icon name="close" style={styles.icon} />
                        :
                        <FontAwesomeIcon name="add-location" style={styles.icon} />
                      }
                    </TouchableOpacity>

                    <TouchableOpacity
                      onPress={() => { props.onActionMenu("editCategory") }}
                      style={styles.actionMenu}>
                      {props.updateOpen ?
                        <Icon name="close" style={styles.icon} />
                        :
                        <FontAwesomeIcon name="edit-location" style={styles.icon} />
                      }
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => { props.onActionMenu("deleteCategory") }}
                      style={styles.actionMenu}
                    >
                      <Icon name="map-marker-remove-variant" style={styles.icon} />
                    </TouchableOpacity>
                    
                    {/* <TouchableOpacity
                    onPress={() => { props.onActionMenu("resetCategories"); }}
                    tag="Reset Categories"
                    style={styles.actionMenu}
                >
                    <Icon name="map-marker-off" style={styles.icon} />
                </TouchableOpacity> */}
                  </View>
                }
              </View>
            </>

            :
            // --------------------- Categories View: --------------------- 
            <View style={styles.createButtonRow}>
              <TouchableOpacity
                onPress={() => { props.setDialogOpen(); }}
                style={styles.createButton}
              >

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
  buttonBack: {
    width: 29,
    height: 40,
  },
  createButtonRow: {
    position: "absolute",
    flexDirection: "row",
  },
  buttonRow: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "center",
    top: 8,
    left: windowWidth - 140,
  },
  actionMenu: {
    zIndex: 100,
    marginRight: 5,
    fontSize: 30,
  },
  hamburgerMenu: {
    zIndex: 100,
    height: 30,
    top: 3,
    left: windowWidth - 50,
    fontSize: 28,
  },
  createButton: {
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