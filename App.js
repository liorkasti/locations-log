import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, YellowBox, Dimensions } from 'react-native';
import { NativeRouter, Route, Switch, Redirect } from "react-router-native";
import LocationIndex from "./src/router";
import Orientation from 'react-native-orientation-locker';

// import { Navigation } from "react-native-navigation";
// import { NavigationContainer } from '@react-navigation/native';


export default function App() {

  useEffect(() => {
    
    setTimeout(() => {
      Orientation.lockToPortrait();
    });

    return onOpenIndex();
  }, []);

  const onOpenIndex = () => {
    console.disableYellowBox = true;
    // console.log("App props: ", App.wprops);
  }

  return (
    <View style={styles.container}>
      <StatusBar animated={true} hidden={false}></StatusBar>
      <NativeRouter>
        <Switch>
          {/* <Route exact path="/"> {<Categories />}</Route> */}
          <Route exact path="/" component={LocationIndex} />
        </Switch>
      </NativeRouter>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // backgroundColor: '#cdcddddc',
  },
});