import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions, Alert, Button } from "react-native";
import Menu, {
  MenuProvider,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import Hamburger from '../components/Hamburger';

export default class TopActionMenu extends Component {

  constructor(props, ctx) {
    super(props, ctx);
    this.state = {
      opened: true,
      // onActionMenu={props.onActionMenu}
    };
    console.log("props: ", props)
    console.log("props.onActionMenu: ", props.onActionMenu)

  }

  onOptionSelect(value) {
    alert(`Selected number: ${value}`);
    // console.log("props: ", props.onActionMenu)

    this.setState({ opened: true });
    this.setState(onActionMenu(value))
  }

  onTriggerPress() {
    this.setState({ opened: true });
  }

  onBackdropPress() {
    this.setState({ opened: false });
  }

  render() {
    const { opened } = this.state;
    console.log('ControlledExample - opened', opened)
    return (
      <MenuProvider
        style={{ flexDirection: 'column', padding: 30 }}>
        {/* <Text>Hello world!</Text> */}
        <Menu
          opened={opened}
          onBackdropPress={() => this.onBackdropPress()}
          onSelect={value => this.onOptionSelect(value)}>
          <MenuTrigger
            onPress={() => this.onTriggerPress()}
          // style={styles.group}
          // text='Select option' 
          >
          </MenuTrigger>
          <MenuOptions>
            <MenuOption value={'addLocation'} text='One' />
            <MenuOption value={2}>
              <Text style={{ color: 'red' }}>Two</Text>
            </MenuOption>
            <MenuOption value={3}><Text >Two</Text></MenuOption>
          </MenuOptions>
        </Menu>
      </MenuProvider>
    );
  }

  styles = StyleSheet.create({
    container: {
      position: "absolute",
      flex: 1,
      backgroundColor: "rgba(0,88,155,1.0)",
      width: 'auto',
      height: 'auto',
      top: 62,
      zIndex: 1000,
      // left: props.windowWidth - 175,
      // left: 0,
      // alignItems: 'center',
      // right: -2000,
    },
    group: {
      alignItems: "flex-end",
      justifyContent: "center",
      zIndex: 20,
      width: 180,
      height: 170
    },
    textMenuItem: {
      textAlign: 'right',
      alignSelf: 'stretch',
      color: 'white',
      fontSize: 16,
      borderBottomWidth: 0.7,
      borderColor: 'white',
      width: 130,
    },
    actionButton: {
      padding: 8,
      flexDirection: "row",
      // paddingHorizontal: 10
    },
    icon: {
      color: 'white',
      fontSize: 20,
      paddingHorizontal: 5,
      textAlign: 'right',
      alignSelf: 'stretch',
    },
  });

}

