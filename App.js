import React, { useState, useEffect } from 'react';
import { StyleSheet, View, StatusBar, Dimensions } from 'react-native';
import { NativeRouter, Route, Switch, Redirect } from "react-router-native";
import LocationIndex from "./src/router";

// import { getInitialStore } from '.src/utils/myLocationsStorage';

// import LocationIndex from "./src/screens";
// import { HeaderBar } from "./src/components/HeaderBar";

export default function App() {

  // const [storeState, setStoreState] = useState(store);
  // const [storeLoading, setStoreLoading] = useState(true);

  useEffect(() => {
    // console.log("App props: ", props);
    //   getInitialStore()
    //     .then((initialStore) => {
    //       // setStoreState(createStore(reducers, initialStore, middlewares))
    //       setStoreLoading(false);
    //     }).catch(() => {
    //       setStoreState(store);
    //       setStoreLoading(false);
    //     });
    return onOpenIndex();

  }, []);

  const onOpenIndex = () => {
    console.log("App props: ", App.wprops);
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