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
      <View>
      {this.props.showSmallRatingStar?
        <View style={{flexDirection:'row',margin:5,justifyContent:'flex-end'}}>
          <Text style={{color:'rgb(232, 167, 60)',fontSize:16,fontWeight:'bold',marginRight:3}}>{this.props.rating_stars}</Text>
          <Image key={index} style={styles.star} source={require('./../img/iconStarFull.png')} />
        </View>
         :
        <View style={styles.classRatingWrapper}>
          <View style={styles.classRatingWrapper}>
          {array}
          </View>
          {this.props.rating_stars==null&&
            <Text style={styles.classRatingNumberWrapper}>
              未評分
            </Text>
          }
          {this.props.Number_of_ratings &&
            <Text style={styles.classRatingNumberWrapper}>
              ({this.props.Number_of_ratings})
            </Text>
          }
        </View>
      }
      </View>
    )
  }
}

const styles = {
  classRatingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    marginRight: 5,
  },
  classRatingNumber: {
    color: 'rgb(90, 187, 214)',
    fontWeight: 'bold',
    fontSize: 16,
  },
  classRatingNumberWrapper: {
    /*color: 'rgb(90, 187, 214)',*/
    color: 'rgb(206, 206, 206)',
    fontSize: 12,
    marginRight: 10,
  },
}

export default ClassRatingStars;
