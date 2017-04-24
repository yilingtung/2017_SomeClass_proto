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
      total_chapters,
      chapters
    } = this.props.navigation.state.params;
    this.state = {
      title: title,
      descriptions: descriptions,
      thumbnail_image: thumbnail_image,
      videoList: videoList,
      rating_stars: rating_stars,
      Number_of_ratings: Number_of_ratings,
      total_chapters: total_chapters,
      chapters: chapters
    }
  }
  generateChapterList(chapters){
    chapters.forEach((chapter)=>{

    });
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
                 {this.state.descriptions && this.state.descriptions.replace(/↵/g,"\n")}
                </Text>
              </View>
            </View>
            <View
              tabLabel="大綱"
              style={{paddingVertical: 8}}
            >
              <View style={[styles.subTabViewWrapper,{}]}>
                <View style={{alignItems:'center',marginBottom:10}}>
                  <Text style={styles.descriptions}>{this.state.total_chapters}個講座</Text>
                  <Text style={[styles.descriptions,{fontSize:12,color:'#B5B5B5'}]}>02:59:46</Text>
                </View>
                <View style={{}}>
                  {
                    this.state.chapters != null ? (
                      <View>
                      {
                        this.state.chapters.map((chapter, index)=>{
                          return(
                          <View  key={chapter.chapter_title + this.state.title}>
                            <View style={styles.chapterNameView}>
                              <Text style={styles.chapterName} numberOfLines={1}>{(index + 1) + " .  " + chapter.chapter_title}</Text>
                            </View>
                              {
                                chapter.courses.map((course, index)=>{
                                  return(
                                    <View key={course.course_title + this.state.title}>
                                      <View style={styles.courseNameView}>
                                        <Text style={styles.courseName} numberOfLines={1}>{(index + 1) + " .  " + course.course_title}</Text>
                                      </View>
                                      <Line />
                                    </View>
                                  )
                                })
                              }
                            </View>
                          )
                        })
                      }
                      </View>
                    ) : (
                      <View style={styles.chapterNameView}>
                        <View style={styles.horizontalWapper}>
                          <Image resizeMode={'contain'} style={styles.warning_icon} source={require("./../img/warning_icon.png")} />
                          <Text style={styles.chapterName} numberOfLines={1}>尚未提供</Text>
                        </View>
                      </View>
                    )
                  }
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
  horizontalWapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  warning_icon: {
    width: 20,
    marginRight: 10
  }
}

export default ClassDetailPage;
