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
      <View>
        <View style={styles.openCourseView}>
          <Image source={require('./../img/btnAdd_orange.png')} />
          <Text numberOfLines={2} style={styles.openCourseText}>熊課啦</Text>
        </View>
      </View>
    )
  }
}

const styles = {
  openCourseView:{
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    marginHorizontal: 12,
    marginVertical: 12,
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
