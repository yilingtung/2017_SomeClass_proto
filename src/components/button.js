import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
class Button extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <View style={[styles.joinButton,{
        backgroundColor: this.props.backgroundColor,
      }]}>
        <Text style={styles.joinBtnText}>{this.props.title}</Text>
      </View>
    )
  }
}

const styles = {
  joinButton: {
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 5,
  },
  joinBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
}

export default Button;
