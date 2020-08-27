// import React, { Component, useState, useEffect } from 'react';
// import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Alert, Button } from "react-native";
// import Menu, {
//   MenuProvider,
//   MenuOptions,
//   MenuOption,
//   MenuTrigger,
// } from 'react-native-popup-menu';
// import Hamburger from '../components/Hamburger';

// const TopActionMenu = (props) => {
//   // const [onOptionSelect, setOnOptionSelect] = useState('');
//   // const [onTriggerPress, setOnTriggerPress] = useState(true);
//   // const [onBackdropPress, setOnBackdropPress] = useState(false);

//   useEffect(() => {
//     opened = props.showMenu;
//     console.log('ControlledExample - opened', props.showMenu)
//   }, []);

//   const { opened } = props.showMenu;
//   console.log('ControlledExample - opened', props.showMenu)

//   const onOptionSelect = (value) => {
//     Alert.alert('Selected number: ' + { value });
//     this.setState({ opened: true });
//   }

//   const onTriggerPress = () => {
//     props.setShowMenu()
//     // this.setState({ opened: true });
//   }

//   const onBackdropPress = () => {
//     this.setState({ opened: false });
//   }

//   return (
//     <MenuProvider
//       style={{ flexDirection: 'column', padding: 30 }}>
//       {/* <Text>Hello world!</Text> */}
//       <Menu
//         opened={opened}
//         onBackdropPress={opened}
//         onSelect={value => this.onOptionSelect(value)}>
//         <MenuTrigger
//           onPress={() => onTriggerPress()}
//         // style={styles.group}
//         // text='Select option' 
//         >
//         </MenuTrigger>
//         <MenuOptions>
//           <MenuOption value={1} text='One' />
//           <MenuOption value={2}>
//             <Text style={{ color: 'red' }}>Two</Text>
//           </MenuOption>
//           <MenuOption value={3} text='Three' /><Text style={{ color: 'red' }}>Three</Text>
//         </MenuOptions>
//       </Menu>
//     </MenuProvider>
//   )
// };

// // export default class TopActionMenu extends Component {

// //   constructor(props, ctx) {
// //     super(props, ctx);
// //     this.state = { opened: true };
// //     // console.log("props: ", props)
// //   }

// //   onOptionSelect(value) {
// //     alert(`Selected number: ${value}`);
// //     this.setState({ opened: true });
// //   }

// //   onTriggerPress() {
// //     this.setState({ opened: true });
// //   }

// //   onBackdropPress() {
// //     this.setState({ opened: false });
// //   }

// //   render() {
// //     const { opened } = this.state;
// //     console.log('ControlledExample - opened', opened)
// //     return (
// //       <MenuProvider
// //         style={{ flexDirection: 'column', padding: 30 }}>
// //         {/* <Text>Hello world!</Text> */}
// //         <Menu
// //           opened={opened}
// //           onBackdropPress={() => this.onBackdropPress()}
// //           onSelect={value => this.onOptionSelect(value)}>
// //           <MenuTrigger
// //             onPress={() => this.onTriggerPress()}
// //           // style={styles.group}
// //           // text='Select option' 
// //           >
// //           </MenuTrigger>
// //           <MenuOptions>
// //             <MenuOption value={1} text='One' />
// //             <MenuOption value={2}>
// //               <Text style={{ color: 'red' }}>Two</Text>
// //             </MenuOption>
// //             <MenuOption value={3} disabled={true} text='Three' />
// //           </MenuOptions>
// //         </Menu>
// //       </MenuProvider>
// //     );
// //   }


// const windowWidth = Dimensions.get('window').width;


// const styles = StyleSheet.create({
//   container: {
//     position: "absolute",
//     flex: 1,
//     backgroundColor: "rgba(0,88,155,1.0)",
//     width: 'auto',
//     height: 'auto',
//     top: 62,
//     zIndex: 1000,
//     left: windowWidth - 175,
//     // left: 0,
//     // alignItems: 'center',
//     // right: -2000,
//   },
//   group: {
//     alignItems: "flex-end",
//     justifyContent: "center",
//     zIndex: 20,
//     width: 180,
//     height: 170
//   },
//   textMenuItem: {
//     textAlign: 'right',
//     alignSelf: 'stretch',
//     color: 'white',
//     fontSize: 16,
//     borderBottomWidth: 0.7,
//     borderColor: 'white',
//     width: 130,
//   },
//   actionButton: {
//     padding: 8,
//     flexDirection: "row",
//     // paddingHorizontal: 10
//   },
//   icon: {
//     color: 'white',
//     fontSize: 20,
//     paddingHorizontal: 5,
//     textAlign: 'right',
//     alignSelf: 'stretch',
//   },
// });

// export default TopActionMenu;
