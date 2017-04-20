import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Style from './style';

class Tag extends Component{
  render(){
    return(
      <View>
        <Image source={require('./../img/')}>
      </View>
    );
  }
}

export default Tag;
