import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Line from './line';
import ClassRatingStars from './ClassRatingStars';
import Tags from './tags';
import ProgressBar from './progressBar';

class MyFinishedClassesList extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <ScrollView style={styles.container}>
        <View style={styles.cardList}>
          {
            this.props.classesListData.map((item) => {
              return(
                <View key={item.title}>
                  <TouchableOpacity
                    style={styles.card}
                    onPress={()=>this.props.goToClassDetailPage(item)}
                  >
                    <Image
                      source={{uri:item.thumbnail_image}}
                      style={[styles.cardImg, {width: this.props.width, height: this.props.height}]}
                    />
                    <View style={styles.cardContent}>
                      <Text numberOfLines={2} style={styles.className}>
                        {item.title}
                      </Text>
                      <View style={styles.classRatingWrapper}>
                        <ClassRatingStars rating_stars={item.my_Rating} />
                        <View>
                          <Text style={styles.classRatingNumberWrapper}>
                            <Text style={styles.classRatingNumber}>
                              {item.my_Rating==null?'尚未評分':'100%'}
                            </Text>
                          </Text>
                        </View>
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
        <Line />
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
    borderRadius: 3,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  cardContent: {
    flexDirection: 'column',
    padding: 10,
    height: 132,
    flex: 1,
    justifyContent: 'center',
  },
  classRatingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    marginRight: 10,
  },
  className: {
    lineHeight: 20,
  },
  nextChapter: {
    fontSize: 12,
    marginTop: 5,
    color: 'rgb(187, 187, 187)',
  },
}

export default MyFinishedClassesList;
