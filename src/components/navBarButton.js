import React, { Component } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

class NavBarBackButton extends Component{
  render(){
    return(
      <TouchableOpacity
        style={styles.header}
        onPress={()=>{
          //父元件是StackNavigator的React Component，使用
          this._reactInternalInstance._currentElement._owner._currentElement.props.navigation.goBack();
        }}
      >
        <Image style={styles.headerIcon} source={require('./../img/btnBack.png')} />
      </TouchableOpacity>
    );
  };
}

class NavBarLikeButton extends Component{
  render(){
    return(
      <TouchableOpacity
        style={styles.header}
        onPress={()=>{
          //送出喜好設定

        }}
      >
        <Image style={styles.headerIcon} source={require('./../img/btnLike.png')} />
      </TouchableOpacity>
    );
  };
}

const styles = {
  header: {
    backgroundColor: 'rgb(90, 187, 214)',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft:8.5,
    paddingRight:8.5
  },
  headerIcon: {
    alignSelf: 'center',
    width: 33,
    height: 33
  },
}

export { NavBarBackButton, NavBarLikeButton };
