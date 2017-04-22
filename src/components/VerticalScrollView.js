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
                    <View style={styles.classRatingWrapper}>
                      <ClassRatingStars rating_stars={item.rating_stars} />
                      <View>
                        <Text style={styles.classRatingNumberWrapper}>
                          <Text style={styles.classRatingNumber}>{item.Number_of_ratings} </Text>

                        </Text>
                      </View>
                    </View>
                    <View style={styles.tagWrapper}>
                      {
                        item.tags.map((subitem) => {
                        return(
                          <View
                            key={subitem}
                            style={styles.tag}
                          >
                            <Text numberOfLines={1} style={styles.tagText}>{subitem}</Text>
                          </View>
                        )
                      })}
                    </View>
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
    width: 160,
    height: 88,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'column',
    padding: 10,
    height: 113,
    flex: 1,
    justifyContent: 'center',
  },
  classRatingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  classRatingNumber: {
    color: 'rgb(90, 187, 214)',
    fontWeight: 'bold',
    fontSize: 16,
  },
  classRatingNumberWrapper: {
    color: 'rgb(90, 187, 214)',
    /*color: 'rgb(206, 206, 206)',*/
    fontSize: 12,
    marginRight: 5,
  },
  tagWrapper: {
    flexDirection: 'row',
    marginRight: 10,
    overflow: 'hidden',
  },
  tag: {
    borderStyle: 'solid',
    borderColor: '#D8D8D8',
    borderWidth: 0.5,
    marginVertical: 5,
    marginRight: 5,
  },
  tagText: {
    color: '#B5B5B5',
    fontSize: 12,
    paddingHorizontal: 8,
  }
}

export default VerticalScrollView;
