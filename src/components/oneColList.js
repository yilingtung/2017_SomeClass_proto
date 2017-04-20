import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import Style from './style';

class OneColList extends Component{
  render(){
    return(
      <ScrollView style={styles.scrollView}>
        <View style={styles.cardList}>
          <View style={styles.card}>
            <Image style={styles.cardImg} source={require('./../img/imgFirebat.png')} />
          </View>
          <View style={styles.card}>
            <Image style={styles.cardImg} source={require('./../img/imgForsen.png')} />
          </View>
          <View style={styles.card}>
            <Image style={styles.cardImgSta} source={require('./../img/imgKolento.png')} />
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  scrollView: {
    height: Style.DEVICE_HEIGHT
  },
  cardList: {
    paddingTop: 5,
    flex: 1
  },
  card:{
    paddingBottom: 5,
    paddingLeft:4.5,
    paddingRight:5.5,
    flex: 1
  },
  cardImg: {
    flex: 1,
    width: Style.DEVICE_WIDTH - 10,
    height: 200
  },
  cardImgSta: {
    flex: 1,
    width: Style.DEVICE_WIDTH - 10,
    height: 144
  },
}

export default OneColList;
