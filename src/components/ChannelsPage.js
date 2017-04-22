import React, { Component } from 'react';
import {
  View,
} from 'react-native';


import NavBar from './navBar';
import OneColList from './oneColList';

class Page2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <OneColList />
        <View style={styles.splicLine}></View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  splicLine: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
}

export default Page2;
