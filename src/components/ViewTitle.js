import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
class ViewTitle extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <View>
      {this.props.title &&
        <View style={styles.headerWrapper}>
          <Text style={styles.headerTitle}>{this.props.title}</Text>
          {this.props.titleButton &&
            <TouchableOpacity style={styles.headerBtnWrapper}>
              <Image source={require('./../img/btnArrow.png')} />
            </TouchableOpacity>
          }
        </View>
      }
      </View>
    )
  }
}

const styles = {
  headerWrapper: {
    paddingLeft: 12,
    height: 43,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerTitle: {
    lineHeight: 32,
    color: 'rgb(179, 181, 185)',
    fontWeight: 'bold'
  },
  headerBtnWrapper: {
    flexDirection: 'row',
    paddingVertical: 9,
    paddingHorizontal: 10,
  },
}

export default ViewTitle;
