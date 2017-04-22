import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

class ClassRatingStars extends Component{
  constructor(props){
    super(props);
    this.state = {
      rating_stars: this.props.rating_stars
    };
  }
  render(){
    var array = [];
    var index = 1;

    for (var i = 0; i < this.props.rating_stars; i++) {
      array.push(<Image key={index} style={styles.star} source={require('./../img/iconStarFull.png')} />);
      index++;
    };
    for (var i = 0; i < 5-this.props.rating_stars; i++) {
      array.push(<Image key={index} style={styles.star} source={require('./../img/iconStar.png')} />);
      index++;
    };

    return(
      <View style={styles.classScoreWrapper}>
      {array}
      </View>
    )
  }
}

const styles = {
  classScoreWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    marginRight: 5,
  },
}

export default ClassRatingStars;
