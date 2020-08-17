import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import { NativeRouter, Route, Switch, BackButton, Redirect } from "react-router-native";
import { Categories } from "./src/screens";
import { HeaderBar } from "./src/components/HeaderBar";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar animated={true} hidden={false}></StatusBar>
      <NativeRouter>
        <Switch>
          <BackButton>
            <Route exact path="/screens" exact component={Categories} />
          </BackButton>
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