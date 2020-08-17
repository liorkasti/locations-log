import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import { NativeRouter, Route, Switch, Redirect } from "react-router-native";
import Categories from "./src/screens";
// import { HeaderBar } from "./src/components/HeaderBar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} hidden={false}></StatusBar>
      <NativeRouter>
        <Switch>
          {/* <Route exact path="/"> {<Categories />}</Route> */}
            <Route exact path="/" component={Categories} />
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