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
      <View style={[styles.line,
        this.props.width && {height:this.props.width}
      ]}>
      </View>
    )
  }
}

const styles = {
  line: {
    height: 2,
    backgroundColor: '#F1F4F6',
  },
}

export default Line;
