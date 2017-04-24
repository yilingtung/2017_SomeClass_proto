import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
class ButtonOpenCourse extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <TouchableOpacity>
        <View style={styles.openCourseView}>
          <Image source={require('./../img/btnAdd_orange.png')} />
          <Text numberOfLines={2} style={styles.openCourseText}>熊課啦</Text>
        </View>
      </TouchableOpacity>
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
    height: 80,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  openCourseText: {
    marginVertical: 10,
    marginLeft: 5,
    marginRight: 10,
    letterSpacing: 3,
    color: 'rgb(232, 167, 60)',
    fontWeight: 'bold',
    fontSize: 20,
  },
}

export default ButtonOpenCourse;
