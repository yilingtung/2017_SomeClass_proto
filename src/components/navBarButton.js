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
        {this.props.showingText?<View style={styles.headerIcon}><Text style={styles.touchableOpacityText}>{this.props.showingText}</Text></View>:<Image style={styles.headerIcon} source={require('./../img/btnBack.png')} />}
      </TouchableOpacity>
    );
  };
}

class NavBarShareButton extends Component{
  render(){
    return(
      <TouchableOpacity
        onPress={()=>{
          //分享
          Share.share({
            message: 'React Native | A framework for building native apps using React'
          })
          .then(this._showResult)
          .catch((error) => this.setState({result: 'error: ' + error.message}));
        }}
      >
        {this.props.showingText?<View style={styles.headerIcon}><Text style={styles.touchableOpacityText}>{this.props.showingText}</Text></View>:<Image style={styles.headerIcon} source={require('./../img/btnShare.png')} />}
      </TouchableOpacity>
    );
  }
}

class NavBarLikeButton extends Component{
  render(){
    return(
      <TouchableOpacity
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
  headerIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 33,
    height: 33,
    marginHorizontal: 10,
  },
  touchableOpacityText: {
    color: '#fff',
    flexDirection: 'row',
    fontWeight: 'bold',
  }
}

export { NavBarBackButton, NavBarLikeButton, NavBarShareButton };
