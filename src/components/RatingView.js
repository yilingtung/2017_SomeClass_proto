import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import ClassRatingStars from './ClassRatingStars';
class RatingView extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <View style={styles.container}>
        <ClassRatingStars
          rating_stars={this.props.item.rating}
        />
        <Text style={styles.time_stamp}>
          {this.props.item.time_stamp}
        </Text>
        <View>
          <Text>
            {this.props.item.userName}
          </Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>

        </View>
        <View style={styles.commentView}>
          <Text>
            {this.props.item.comment}
          </Text>
        </View>
      </View>
    )
  }
}

const styles = {
  container: {
    marginVertical: 10,
  },
  commentView: {
    marginTop: 5,
  },
  time_stamp: {
    color: '#B5B5B5',
    fontSize: 10,
    lineHeight: 17,
  },
}

export default RatingView;
