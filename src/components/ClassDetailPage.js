import React, { Component } from 'react';
import { View, Text, Image, WebView, ScrollView } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ClassRatingStars from './ClassRatingStars';
import Line from './line';
import Style from './style.js';

class ClassDetailPage extends Component{
  constructor(props){
    super(props);
    const {
      title,
      descriptions,
      thumbnail_image,
      videoList,
      rating_stars,
      Number_of_ratings,
    } = this.props.navigation.state.params;
    this.state = {
      title: title,
      descriptions: descriptions,
      thumbnail_image: thumbnail_image,
      videoList: videoList,
      rating_stars: rating_stars,
      Number_of_ratings: Number_of_ratings,
    }
  }
  render(){
    return(
      <ScrollView
        style={styles.container}
      >
        <View style={{backgroundColor:'#fff'}}>
          <Image style={styles.cardImg} source={{uri: this.state.thumbnail_image}} />
          <View style={styles.infoView}>
            <Text style={styles.title}>{this.state.title}</Text>
            <ClassRatingStars
              rating_stars={this.state.rating_stars}
              Number_of_ratings={this.state.Number_of_ratings}
            />
            <View style={styles.joinButton}>
              <Text style={styles.joinBtnText}>加入此課程</Text>
            </View>
          </View>
        </View>
        <View>
          <ScrollableTabView
            tabBarUnderlineStyle={{backgroundColor:'rgb(90, 187, 214)'}}
            tabBarBackgroundColor={'rgb(255, 255, 255)'}
            tabBarActiveTextColor={'rgb(90, 187, 214)'}
            tabBarInactiveTextColor={'rgb(197, 198, 200)'}
            tabBarTextStyle={{fontWeight:'bold'}}
            style={styles.subContainer}
          >
            <View
              tabLabel="說明"
              style={{paddingVertical: 8}}
            >
              <View style={[styles.subTabViewWrapper,{paddingHorizontal: 20}]}>
                <Text style={styles.descriptions}>
                 {this.state.descriptions.replace(/↵/g,"\n")}
                </Text>
              </View>
            </View>
            <View
              tabLabel="大綱"
              style={{paddingVertical: 8}}
            >
              <View style={[styles.subTabViewWrapper,{}]}>
                <View style={{alignItems:'center',marginBottom:10}}>
                  <Text style={styles.descriptions}>24 個講座</Text>
                  <Text style={[styles.descriptions,{fontSize:12,color:'#B5B5B5'}]}>02:59:46</Text>
                </View>
                <View style={{}}>
                  <View>
                    <View style={styles.chapterNameView}>
                      <Text style={styles.chapterName} numberOfLines={1}>Getting Started With HTML</Text>
                    </View>
                    <View style={styles.courseNameView}>
                      <Text style={styles.courseName} numberOfLines={1}>1.  Intro to Course</Text>
                    </View>
                    <Line />
                    <View style={styles.courseNameView}>
                      <Text style={styles.courseName} numberOfLines={1}>2.  Get FREE access to the chatroom and get help with questions</Text>
                    </View>
                    <Line />
                    <View style={styles.courseNameView}>
                      <Text style={styles.courseName} numberOfLines={1}>3.  Installing an IDE</Text>
                    </View>
                    <Line />
                    <View style={styles.courseNameView}>
                      <Text style={styles.courseName} numberOfLines={1}>4.  Building Your First Website</Text>
                    </View>
                    <Line />
                    <View style={styles.courseNameView}>
                      <Text style={styles.courseName} numberOfLines={1}>5.  HTML5 page structure with the important Meta Tags</Text>
                    </View>
                    <Line />
                  </View>
                  <View>
                    <View style={styles.chapterNameView}>
                      <Text style={styles.chapterName} numberOfLines={1}>Getting Started With HTML</Text>
                    </View>
                    <View style={styles.courseNameView}>
                      <Text style={styles.courseName} numberOfLines={1}>1.  Intro to Course</Text>
                    </View>
                    <Line />
                    <View style={styles.courseNameView}>
                      <Text style={styles.courseName} numberOfLines={1}>2.  Get FREE access to the chatroom and get help with questions</Text>
                    </View>
                    <Line />
                    <View style={styles.courseNameView}>
                      <Text style={styles.courseName} numberOfLines={1}>3.  Installing an IDE</Text>
                    </View>
                    <Line />
                    <View style={styles.courseNameView}>
                      <Text style={styles.courseName} numberOfLines={1}>4.  Building Your First Website</Text>
                    </View>
                    <Line />
                    <View style={styles.courseNameView}>
                      <Text style={styles.courseName} numberOfLines={1}>5.  HTML5 page structure with the important Meta Tags</Text>
                    </View>
                    <Line />
                  </View>

                </View>

              </View>
            </View>
            <View
              tabLabel="評價"
            >
            </View>
            <View
              tabLabel="更多"
            >
            </View>
          </ScrollableTabView>
        </View>
      </ScrollView>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#F1F4F6',
    marginBottom: 49,
  },
  subContainer: {
    backgroundColor: '#F1F4F6',
    paddingVertical: 5,
  },
  cardImg: {
    width: Style.DEVICE_WIDTH,
    height: 200,
  },
  infoView: {
    marginHorizontal: 12,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.7)',
  },
  joinButton: {
    backgroundColor: 'rgb(232, 167, 60)',
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 5,
  },
  joinBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTabViewWrapper: {
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  descriptions: {
    fontSize: 15,
    letterSpacing: 1,
    lineHeight: 24,
    color: 'rgba(0,0,0,0.7)',
  },
  chapterNameView: {
    height: 48,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#F1F4F6',
  },
  courseNameView: {
    height: 48,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  chapterName: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.7)',
    lineHeight: 24,
  },
  courseName: {
    color: 'rgba(0,0,0,0.7)',
  },
}

export default ClassDetailPage;
