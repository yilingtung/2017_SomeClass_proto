import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  StatusBar,
} from 'react-native';

//import Page from './page1.ios.js';
import TabBar from './src/components/tabBar';


export default class ReactSample extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="white"
          barStyle="light-content"
        />
        <TabBar />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  }
}

AppRegistry.registerComponent('ReactSample', () => ReactSample);
