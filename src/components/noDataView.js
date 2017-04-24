import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
class NoDataView extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <View style={styles.openCourseView}>
        <View style={{height: 88, width: 150, borderRadius: 3,backgroundColor:'#F1F4F6',position:'absolute',top:12,left:12,}}></View>
        <View style={{height: 20, width: 150, borderRadius: 3,backgroundColor:'#F1F4F6',position:'absolute',top:12,left:172,}}></View>
        <View style={{height: 18, width: 150, borderRadius: 3,backgroundColor:'#F1F4F6',position:'absolute',top:50,left:172,}}></View>
        <View style={{height: 13, width: 50, borderRadius: 3,backgroundColor:'#F1F4F6',position:'absolute',top:85,left:172,}}></View>
        <View style={{height: 13, width: 68, borderRadius: 3,backgroundColor:'#F1F4F6',position:'absolute',top:85,left:232,}}></View>
      </View>
    )
  }
}

const styles = {
  openCourseView:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 12,
    marginBottom: 12,
    height: 113,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
}

export default NoDataView;
