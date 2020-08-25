// import React, { useState, useEffect } from "react";
// import { StyleSheet, View, Text, TouchableOpacity, TextInput, ScrollView, FlatList, Modal, Dimensions } from "react-native";
// import AsyncStorage from '@react-native-community/async-storage';

// // import {addStorageCategoryList, retrieveStorage,addCategoryList} from '../utils/myLocationsStorage';
// // import {isCategoryExists} from '../utils/myStorageHelper';

// import FontAwesomeIcon from "react-native-vector-icons/MaterialIcons";
// import Dialog, { SlideAnimation, DialogContent } from 'react-native-popup-dialog';

// import InputDialog from '../components/InputDialog';
// import CategoryItem from '../components/CategoryItem';
// import CategoryInput from '../components/CategoryInput';

// // import EmptyView from './components/EmptyView';

// export default function MyCategoriesController({ props }) {

//   const [categoryList, setCategoryList] = useState([]);
//   const [currentCategory, setCurrentCategory] = useState([]);

//   const [isUpdateList, setIsUpdateList] = useState(false);
//   const [isAddMode, setIsAddMode] = useState(false);
//   const [isCancelMode, setIsCancelMode] = useState(false);

//   // useEffect(() => {
//   //   console.log("List update? ", updateList);
//   //   if (props.comp) {
//   //     console.log("Is props.componentIndex ? ", props.componentIndex);
//   //     TODO: validate add asynch starage and sorting capabiliteis
//   //     initStorage();
//   //     updateStorage(currentCategory)
//   //     }
//   //     return updateStorage(categoryName)
//   //   }, [])

//   const addCategoryHandler = categoryName => {

//     setCurrentCategory(currentCategory => [...currentCategory, { id: KEY++, name: categoryName }]);
//     setCategoryList(categoryList => [...categoryList, { id: KEY + 4000, category: { currentCategory } }])

//     // addStorageCategoryList(categoryList).then(
//     // { id: Math.random().toString(), name: categoryName }
//     // );

//     setIsAddMode(false);
//     setIsUpdateList(true);

//     console.warn("The Current Category: ", currentCategory);
//     console.log("The List Category: ", categoryList);

//     updateStorage(categoryName, categoryList);
//     // initStorage(categoryName, categoryList);
//   };

//   const updateStorage = (newCategory, categoryList) => {
//     props.onUpdateCategory(newCategory);
//     props.onUpdateCategories(categoryList)
//     // console.log("props List Category: ", props.renderedCategories);
//     // console.log("props Current Category: ", props.onUpdateCategory);
//     setIsUpdateList(false);
//   };

//   const initStorage = (category, categoryList) => {
//     props.onUpdateCategory(category);
//     props.onUpdateCategories(categoryList);
//   }

//   const removeCategoryHandler = categoryId => {
//     console.log('TO BE DELETED: ' + categoryId);
//     // console.log("Current Category: ", currentCategory);
//     setCategoryList(currentCategory => {
//       return currentCategory.filter(category => category.id !== categoryId);
//     });
//     setIsUpdateList(true);
//   };

//   const cancelCategoryAdditionHandler = () => {
//     setIsCancelMode(true);
//   };

//   return (
//     <View style={styles.container}>
//       <ScrollView style={{ zIndex: 1, width: windowWidth * .7, height: windowHeight * .95 }}>

//         <View style={styles.textContainyer}>
//           {
//             props.renderedCategories.length ?
//               <Text style={styles.textPrompt}>Your Categories</Text>
//               :
//               <View style={styles.welcomeContainer}>
//                 <Text style={styles.textPrompt}>Please add your{"\n"}places categories</Text>
//                 <FontAwesomeIcon name="add-location" style={styles.icon} />
//               </View>
//           }
//         </View>
//         {/* {props.dialogOpen == false &&
//           <View style={styles.welcomeContainer}>
//           </View>
//         } */}

//         {/* {props.dialogOpen && */}

//         < Dialog
//           visible={props.dialogOpen}
//           onTouchOutside={() => {
//             this.setState({ visible: false });
//           }}
//           dialogAnimation={
//             new SlideAnimation({
//               slideFrom: 'bottom',
//             })
//           }
//           dialogStyle={styles.dialog}
//         >
//           <DialogContent>
//             <View style={styles.welcomeContainer}>
//               <CategoryInput
//                 visible={isAddMode}
//                 onAddCategory={addCategoryHandler}
//                 onCreate={() => { setCurrentCategory() }}
//                 onCancel={cancelCategoryAdditionHandler}
//                 dialogOpen={props.dialogOpen}
//                 onDismiss={() => { props.setDialogOpen() }}
//                 initialValue=""
//                 windowWidth={windowWidth}
//                 windowHeight={windowHeight}
//               />
//             </View>
//           </DialogContent>
//         </Dialog>

//         {/* } */}

//         {/* {categoryList.length ? */}
//         {
//           // props.showAdd &&
//           categoryList.length ?

//             <FlatList
//               keyExtractor={(item, index) => item.id}
//               data={categoryList}
//               renderItem={itemData => (
//                 <CategoryItem
//                   id={itemData.item.id}
//                   // onDelete={removeCategoryHandler}
//                   onPress={props.onNext}
//                   title={itemData.item.name}
//                   style={styles.categoryItem}
//                 />
//               )}
//             />
//             :
//             null
//         }

//       </ScrollView>
//     </View >
//   );
// }


// const windowHeight = Dimensions.get('window').height + 100;
// const windowWidth = Dimensions.get('window').width;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     maxHeight: "98%"
//   },
//   dialog: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: 300,
//     width: '90%',
//     padding: 20,
//   },
//   boxContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-around',
//     alignItems: 'center'
//   },
//   textContainer: {
//     alignItems: 'center',
//   },
//   categoryItem: {
//     alignItems: 'center',
//     width: '80%',
//   },
//   welcomeContainer: {
//     // flex: 1,
//     alignItems: 'center',
//     padding: 20,
//   },
//   textPrompt: {
//     paddingHorizontal: 10,
//     paddingVertical: 40,
//     fontSize: 20,
//     textAlign: 'center'
//   },
//   icon: {
//     color: "rgba(0,88,155,1)",
//     fontSize: 120,
//   }
// });