import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import { NativeRouter, Route, Switch, Redirect } from "react-router-native";
import LocationIndex from "./src/router";

export default function App() {

  useEffect(() => {
    return onOpenIndex();
  }, []);

  const onOpenIndex = () => {
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
  },
});