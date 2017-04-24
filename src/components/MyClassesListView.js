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

class MyClassesListView extends Component{
  constructor(props){
    super(props);
    console.log(123);
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
                      {this.props.tabLabel=="進行中"&&
                        <View>
                          <Text numberOfLines={2} style={styles.nextChapter}>
                            Next Chapter : {item.next_chapters}
                          </Text>
                          <ProgressBar
                            ratio={ Number(Math.round(item.finish_chapters/item.total_chapters * 100).toFixed(0))}
                            fractions={[item.finish_chapters,item.total_chapters]}
                            showFractions={true}
                            FontStyle={{fontSize:18,fontWeight:'bold',color:'rgb(90, 187, 214)'}}
                            ProgressBarWidth={4}
                            ProgressBarColor={'rgb(90, 187, 214)'}
                          />
                        </View>
                      }
                      {this.props.tabLabel=="已完成"&&
                        <View>
                          <View style={styles.classRatingWrapper}>
                            <ClassRatingStars
                              rating_stars={item.my_Rating}
                            />
                          </View>
                        </View>
                      }
                      {this.props.tabLabel=="願望清單"&&
                        <View>
                          <View style={styles.classRatingWrapper}>
                            <ClassRatingStars
                              rating_stars={item.rating_stars}
                              Number_of_ratings={item.Number_of_ratings}
                            />
                          </View>
                        </View>
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
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F1F4F6',
    paddingVertical: 8,
  },
  cardList: {
    flexDirection: 'column',
    backgroundColor: '#fff',
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
  className: {
    lineHeight: 20,
  },
  nextChapter: {
    fontSize: 12,
    marginTop: 5,
    color: 'rgb(187, 187, 187)',
  },
}

export default MyClassesListView;
