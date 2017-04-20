import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
} from 'react-native';

class NavBar extends Component{
  render(){
    return(
      <View>
        <View style={styles.header}>
          <Image style={styles.headerIcon} source={require('./../img/btnBack.png')} />
          <Text style={styles.headerText}>Hearthstone</Text>
          <Image style={styles.headerIcon} source={require('./../img/btnLike.png')} />
        </View>
        <View style={styles.navBar}>
          <View style={[styles.navBarItem, styles.barActvie]}>
            <Text style={styles.navText}>LIVE</Text>
          </View>
          <View style={styles.navBarItem}>
            <Text style={styles.navText}>RECENT</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  //Section 1
  header: {
    backgroundColor: 'rgb(100,65,165)',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 20,
    paddingLeft:8.5,
    paddingRight:8.5,
    height:64
  },
  headerText: {
    fontSize: 18,
    textAlign: 'center',
    color: 'rgb(255,255,255)',
    flex: 2,
    marginTop:8
  },
  headerIcon: {
    alignSelf: 'center',
    width: 33,
    height: 33
  },
  //Section 2
  navBar: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  navBarItem: {
    flex: 1,
    height: 44,
    justifyContent: 'center'//height middle
  },
  barActvie: {
    borderBottomWidth: 4,
    borderBottomColor: 'rgb(100,65,165)'
  },
  navText: {
    fontSize: 13,
    color: 'rgb(100,65,165)',
    textAlign: 'center'
  }
}

export default NavBar;
