import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, FlatList, ScrollView, Dimensions, Picker } from "react-native";
import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
import Dialog, { DialogFooter, DialogTitle, DialogButton, SlideAnimation, PopupDialog, DialogContent } from 'react-native-popup-dialog';
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import { addCategory, addLocations, addLocation, updateCategory, removeCategory } from '../action/modifyActions';

import CardItem from '../components/CardItem';
import ModifyLocation from '../action/ModifyLocation';
import ModifyCategory from '../action/ModifyCategory';
import ActionMenu from '../components/ActionMenu';


export default function DialogComponent(props) {

    useEffect(() => {

        const _props = JSON.stringify({ props });
        console.log('DialogComponent._props: ' + _props);
        // props = JSON.parse(props);
        console.log('DialogComponent.props: ' + props);
        // console.log('locationDialogOpen: ' + locationDialogOpen);

        // console.log('LocationList: ' + JSON.stringify(locationList));
        // console.log('LocationList: ' + JSON.stringify(locationList));
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                {/* {locationDialogOpen && */}
                < Dialog
                    visible={props.locationDialogOpen}
                    // onTouchOutside={() => { visible = onDismiss(); }}
                    // onTouchOutside={setLocationDialogOpen(false)}
                    // onTouchOutside={() => {
                    //   setLocationDialogOpen({ visible: false });
                    // }}
                    // onTouchOutside={() => { cancelCategoryHandler }}
                    onTouchOutside={() => { (props.onDismiss()) }}
                    // onTouchOutside={() => { visible = (!visible) }}
                    // onTouchOutside={() => { visible = props.setLocationDialogOpen; }}
                    dialogAnimation={
                        new SlideAnimation({
                            slideFrom: 'bottom',
                        })
                    }
                    dialogStyle={styles.locationDialog}
                >
                    <DialogContent>
                        <View style={styles.welcomeContainer}>
                            <ModifyLocation
                                initialValue=""
                                visible={props.locationDialogOpen}
                                locationDialogOpen={props.locationDialogOpen}
                                setLocationDialogOpen={props.setLocationDialogOpen}

                                onSave={props.onSave}
                                onUpdate={props.onUpdate}
                                onAdd={props.addLocationHandler}
                                reloadStorage={props.reloadStorage}

                                myLocationList={props.myLocationList}
                                onUpdateCategories={props.onUpdateCategories}

                                onCancel={props.onCancel}
                                onDismiss={props.onDismiss }

                                locationDialogOpen={props.locationDialogOpen}
                                setLocationDialogOpen={props.setLocationDialogOpen}

                                showMediumMap={props.showMediumMap}
                                setShowMediumMap={props.setShowMediumMap}

                                isAddLocationMode={props.isAddLocationMode}
                                setIsAddLocationMode={props.setIsAddLocationMode}
                                // setIsUpdateMode={() => { setIsUpdateMode(!isUpdateMode) }}
                                // isUpdateMode={isUpdateMode}

                                // reloadStorage={reloadStorage}
                                // renderedCategory={props.renderedCategory}
                                // onUpdateCategories={props.onUpdateCategories}

                                windowWidth={props.windowWidth}
                                windowHeight={props.windowHeight}
                            />
                        </View>
                    </DialogContent>
                </Dialog>
                {/* } */}

                {/* {(props.updateOpen) && */}
                < Dialog
                    visible={props.updateOpen}
                    onTouchOutside={() => {
                        (props.onDismiss())
                        // this.setState({ visible: false });
                        // props.setUpdateOpen(false);
                        // visible = props.updateOpen
                        // cancelCategoryHandler
                        // props.onDismiss();
                        // visible: false
                        // props.setUpdateOpen();
                        // this.setState({ visible: false }, () => Keyboard.dismiss());
                        // conso.le.log('visible : ', visible);
                        // this.setState({ visible: false });
                    }}
                    /* 
                                dialogTitle={
                                  <DialogTitle
                                    title="Dialog Title"
                                  // dialogStyle={styles.dialogTitle}
                                  />}
                      */
                    // footer={
                    //   <DialogFooter>
                    //     <DialogButton
                    //       text="CANCEL"
                    //       onPress={() => { cancelCategoryHandler }}
                    //     />
                    //     <DialogButton
                    //       text="OK"
                    //       onPress={props.updateTextHandler}
                    //     // onPress={() => { }}
                    //     />
                    //   </DialogFooter>
                    // }

                    dialogAnimation={
                        new SlideAnimation({
                            slideFrom: 'bottom',
                        })
                    }
                    dialogStyle={styles.dialog}
                >
                    <DialogContent>
                        <View style={styles.welcomeContainer}>
                            <ModifyCategory
                                initialValue=""
                                visible={props.updateOpen}
                                updateOpen={props.updateOpen}
                                setUpdateOpen={props.setUpdateOpen}

                                onUpdate={props.onUpdate}
                                reloadStorage={props.reloadStorage}

                                myLocationList={props.myLocationList}
                                onUpdateCategories={props.onUpdateCategories}

                                onCancel={props.onCancel}
                                onDismiss={props.onDismiss}


                                setIsUpdateMode={props.setIsUpdateMode}
                                isUpdateMode={props.isUpdateMode}

                                windowWidth={windowWidth}
                                windowHeight={windowHeight}
                            />
                        </View>
                    </DialogContent>
                </Dialog>
            </View>
        </View>

    );
}


const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    // container: {
    //   flexGrow: 1,
    //   // flex: 1,
    //   height: 1600,
    //   width: windowWidth,
    // },
    container: {
        flex: 1,
        maxHeight: "98%",
        zIndex: 10,
        alignContent: "center",
        justifyContent: 'center',
    },
    textDialog: {
        padding: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    dialog: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 260,
        width: '90%',
        padding: 20,
    },
    dialogTitle: {
        justifyContent: 'center',
        alignItems: 'center',
        // height: 60,
        paddingTop: 20,
        marginTop: 20,
        padding: 20,
        fontSize: 20,
        textAlign: 'center'
        // width: '90%',
        // padding: 20,
    },
    locationDialog: {
        alignItems: 'center',
        height: windowHeight * .8,
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
        textAlign: 'center',
        zIndex: 1
    },
    icon: {
        color: "rgba(0,88,155,1)",
        fontSize: 120,
        zIndex: 1
    },
});