import React, { Component } from 'react';
import {
  View,
} from 'react-native';
class Line extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <View style={styles.line}></View>
    )
  }
}

const styles = {
  line: {
    height: .5,
    backgroundColor: 'rgba(0,0,0,.1)',
  },
}

export default Line;
