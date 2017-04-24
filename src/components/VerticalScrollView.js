import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import Line from './line';
import ViewTitle from './ViewTitle';
import ClassRatingStars from './ClassRatingStars';
import Tags from './tags';
class VerticalScrollView extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <View>
        <ViewTitle
          title={this.props.title}
          titleButton={this.props.titleButton}
        />
        <View>
          <View style={styles.cardList}>
            {
              this.props.itemList.map((item) => {
              return(
                <View key={item.title}>
                  <TouchableOpacity
                    style={styles.card}
                    onPress={()=>this.props.goToClassDetailPage(item)}
                  >
                    <Image
                      source={{uri:item.thumbnail_image}}
                      style={[styles.cardImg, {width: this.props.width}]}
                    />
                    <View style={styles.cardContent}>
                      <Text numberOfLines={2} style={{lineHeight: 20}}>
                        {item.title}
                      </Text>
                      {this.props.showRating &&
                        <ClassRatingStars
                          rating_stars={item.rating_stars}
                          Number_of_ratings={item.Number_of_ratings}
                          showSmallRatingStar={this.props.showSmallRatingStar}
                        />
                      }
                      {this.props.showTags &&
                        <Tags tags={item.tags} />
                      }
                    </View>
                  </TouchableOpacity>
                  <View style={{marginLeft: 12}}>
                  <Line />
                </View>
              </View>
              )
            })}
          </View>
        </View>
      </View>
    )
  }
}

const styles = {
  cardList: {
    flexDirection: 'column',
  },
  card:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  cardImg: {
    height: 88,
    borderRadius: 3,
  },
  cardContent: {
    flexDirection: 'column',
    padding: 10,
    height: 113,
    flex: 1,
    justifyContent: 'center',
  },
}

export default VerticalScrollView;
