/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import Header from "./src/components/header";
import AlbumList from "./src/components/album-list";

export default class TestApp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header HeaderText={"HeaderTest"} />
        <AlbumList />
      </View>
    );
  }
}

AppRegistry.registerComponent("TestApp", () => TestApp);
