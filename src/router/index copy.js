// import React, { useState, useEffect } from "react";
// import { View, StyleSheet, StatusBar, Dimensions, Image, TouchableOpacity, Text, ScrollView, SafeAreaView, Constants } from "react-native"
// import { useHistory } from "react-router-dom";
// import AsyncStorage from '@react-native-community/async-storage';

// import { KEYS, setItem, getItem, } from '../utils/myLocationsStorage';

// import MyCategoriesController from "../actionController/MyCategoriesController";
// import Category from "../screens/Category";
// import Location from "../screens/Location";

// import HeaderBar from "../components/HeaderBar";

// const components = { MyCategoriesController, Category, Location };

// const CurrentComponentRouter = (props) => {
//     const CurrentComponent = props.currentComponent;
//     if (!CurrentComponent) return <View />
//     return (
//         <CurrentComponent
//             props={props}
//         />)
// };

// export default function Index(props) {

//     // load from storage
//     const items = [];
//     items = getItem(KEYS.CATEGORIES) || [];
//     console.log('items FROM STORAGE: ', (items))

//     // AsyncStorage.getItem('items').then((items) => {
//         console.log('items', JSON.parse(items))
//     // })


//     const [componentIndex, setComponentIndex] = useState(0);
//     const [renderedCategory, setRenderedCategory] = useState([]);
//     const [renderedLocation, setRenderedLocation] = useState([]);
//     const [myLocationList, setMyLocationList] = useState(items);

//     const componentKeys = ["MyCategoriesController", "Category", "Location"];
//     const headers = { MyCategoriesController: "Categories", Category: renderedCategory, Location: renderedLocation };

//     const [dialogOpen, setDialogOpen] = useState(false);
//     const [showBack, setShowBack] = useState(false);
//     const [showMenu, setShowMenu] = useState(false);

//     useEffect(() => {
//         // if (componentIndex < 0) { setShowBack(false); initStorage(); }
//         if (componentIndex < 0) {
//             setShowBack(false);
//             items = getItem(KEYS.CATEGORIES)
//             console.log('items FROM STORAGE: ', (items))
//         }
//         if (componentIndex > 0) { setShowBack(true); }

//         // todo: add to set 2 dimantions containet to hold the category item item(id,name, locations list {name, address, coordinates, and category}).
//     }, [])

//     useEffect(() => {
//         // console.log("Root Current Category: ", renderedCategory);
//         console.log("Root List Category: ", myLocationList);
//         console.log("Root getItem List Category: ", getItem(JSON.stringify(KEYS.CATEGORIES)));

//         // console.log("HEADER NAME: ", headers[componentKeys[componentIndex]]);
//         // console.log("Root componentIndex: ", componentIndex);
//         // todo: add to set 2 dimantions containet to hold the category item item(id,name, locations list {name, address, coordinates, and category}).
//         // todo: Fix initStorage when on press Add new Category.
//         // initStorage();
//     }, [componentIndex])

//     let history = useHistory();

//     const renderedCategoriesHandler = async (categoryListNode) => {

//         setRenderedCategory(categoryListNode);
//         setMyLocationList(myLocationList => [
//             // setItem(myLocationList => [
//             ...myLocationList,
//             { id: Math.random().toString(), name: categoryListNode }
//         ]);

//         const result = setItem(JSON.stringify(myLocationList))
//         console.warn("SET ITEMS", result)
//     }

//     const menuBarActionHandler = (action) => {
//         switch (action) {
//             case "addLocation":
//                 onAddHandler(action);
//                 break;
//             case "editCategory":
//                 onUpdateHandler(action);
//                 break;
//             case "deleteCategory":
//                 console.log('777777777777777: ' + action);
//                 onDeleteHandler(action);
//                 break;
//             case "onOpenLocation":
//                 onRead();
//                 break;
//             default:
//                 return next(action);
//         }
//     };


//     const onDeleteHandler = deletItem => {
//         // console.log('TO BE DELETED: ' + categoryName);
//         console.log('9999999999999999: ' + props.CurrentComponent.Index.myLocationList);
//         // console.log("Current Category: ", currentCategory);
//         let newMyStays = [];
//         for (let i = 0; i < myLocationList.length; i++) {
//             if (i !== myLocationList.indexOf(deletItem)) {
//                 console.log('Iterate VALUE ', myLocationList);
//                 newLocationList.push(myLocationList[i])
//             }
//         }
//         setMyLocationList(newLocationList);
//         setComponentIndex(componentIndex - 1);
//     };


//     const initStorage = () => {
//         setRenderedCategory(renderedCategory);
//         setMyLocationList(myLocationList);
//     }

//     return (
//         <View style={styles.container}>
//             <StatusBar backgroundColor="rgba(0,88,155,1)" />

//             <HeaderBar
//                 componentIndex={componentIndex}
//                 myLocationList={myLocationList}
//                 setMyLocationList={setMyLocationList}

//                 renderedCategory={renderedCategory}

//                 header={headers[componentKeys[componentIndex]]}
//                 onBack={() => {
//                     if (showMenu) setShowMenu(false);
//                     setComponentIndex(componentIndex - 1);
//                 }}

//                 // onActionMenu={menuBarActionHandler}
//                 showMenu={showMenu}
//                 setShowMenu={() => { setShowMenu(!showMenu); }}

//                 onDelete={onDeleteHandler}
//                 onActionMenu={(action) => { menuBarActionHandler(action); }}

//                 setDialogOpen={() => { setDialogOpen(!dialogOpen); }}
//                 dialogOpen={dialogOpen}

//                 style={styles.header}

//             />

//             {/* <ScrollView style={styles.scrollView}> */}
//             <CurrentComponentRouter
//                 currentComponent={components[componentKeys[componentIndex]]}
//                 componentIndex={componentIndex}

//                 myLocationList={myLocationList}
//                 setMyLocationList={setMyLocationList}
//                 renderedCategory={renderedCategory}
//                 setRenderedCategory={setRenderedCategory}
//                 onUpdateCategory={renderedCategoriesHandler}

//                 showMenu={showMenu}
//                 setShowMenu={() => { setShowMenu(!showMenu); }}
//                 onActionMenu={(action) => { handleAction(action); }}

//                 showBack={showBack}
//                 onBack={() => { setComponentIndex(componentIndex - 1) }}
//                 onNext={() => { setComponentIndex(componentIndex + 1) }}

//                 dialogOpen={dialogOpen}
//                 setDialogOpen={() => { setDialogOpen(!dialogOpen); }}

//                 onDismiss={() => { setDialogOpen(false); }}
//                 style={styles.componentStyle}
//             />

//             {/* </ScrollView> */}
//         </View>
//     );
// }


// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: "center",
//     },
//     header: {
//         zIndex: 100,
//         paddingBottom: 15
//     },
//     scrollView: {
//         zIndex: 1,
//     },
// });