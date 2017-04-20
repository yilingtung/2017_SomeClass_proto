/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Image
} from 'react-native';

class Page1 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={require('./src/img/logoTwitch.png')} />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgb(100,65,165)',
  }
}

export default Page1;
