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
    height: 1,
    backgroundColor: 'rgba(189,189,189,.2)',
  },
}

export default Line;
