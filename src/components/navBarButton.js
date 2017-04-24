import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Share } from 'react-native';

class NavBarBackButton extends Component{
  //showingText : 顯示文字代替圖片。
  render(){
    return(
      <TouchableOpacity
        style={styles.header}
        onPress={()=>{
          //父元件是StackNavigator的React Component，使用
          this._reactInternalInstance._currentElement._owner._currentElement.props.navigation.goBack();
        }}
      >
        {this.props.showingText?<Text style={styles.touchableOpacityText}>{this.props.showingText}</Text>:<Image style={styles.headerIcon} source={require('./../img/btnBack.png')} />}
      </TouchableOpacity>
    );
  };
}

class NavBarShareButton extends Component{
  render(){
    return(
      <TouchableOpacity
        style={styles.header}
        onPress={()=>{
          //分享
          Share.share({
            message: 'React Native | A framework for building native apps using React'
          })
          .then(this._showResult)
          .catch((error) => this.setState({result: 'error: ' + error.message}));
        }}
      >
        {this.props.showingText?<Text style={styles.touchableOpacityText}>{this.props.showingText}</Text>:<Image style={styles.headerIcon} source={require('./../img/btnShare.png')} />}
      </TouchableOpacity>
    );
  }
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
  touchableOpacityText: {
    color: '#fff',
    marginRight:10
  }
}

export { NavBarBackButton, NavBarLikeButton, NavBarShareButton };
