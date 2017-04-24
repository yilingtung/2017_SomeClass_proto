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
class HorizontalScrollView extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <View>
        <ViewTitle
          title={this.props.title}
          titleButton={this.props.showViewTitleButton}
        />
        <View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            automaticallyAdjustContentInsets={false}
          >
            <View style={styles.cardList}>
              {
                this.props.itemList.map((item) => {
                return(
                  <TouchableOpacity
                    key={item.title}
                    style={styles.card}
                    onPress={()=>this.props.goToClassDetailPage(item)}
                  >
                    <Image
                      source={{uri:item.thumbnail_image}}
                      style={[styles.cardImg, {width: this.props.width, height: this.props.height}]}
                    />
                    <View style={[styles.cardContent, {width: this.props.width}]}>
                      <Text numberOfLines={this.props.classNameOneLine ? 2 : 1} style={{marginRight: 5, lineHeight: 20}}>
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
                )
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    )
  }
}
const styles = {
  cardList: {
    marginTop: 5,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: 12,
    justifyContent: 'space-between'
  },
  card:{
    marginRight: 12,
    overflow: 'hidden'
  },
  cardImg: {
    borderRadius: 3,
  },
  cardContent: {
    paddingVertical: 10,
  },
}

export default HorizontalScrollView;
