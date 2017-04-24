import React, { Component } from 'react';
import { View, Text, Image, WebView, ScrollView } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import ClassRatingStars from './ClassRatingStars';
import Line from './line';
import Button from './button';
import RatingView from './RatingView';
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
      chapters,
      rating,
      instructor
    } = this.props.navigation.state.params;
    this.state = {
      title: title,
      descriptions: descriptions,
      thumbnail_image: thumbnail_image,
      videoList: videoList,
      rating_stars: rating_stars,
      Number_of_ratings: Number_of_ratings,
      total_chapters: total_chapters,
      chapters: chapters,
      rating:rating,
      instructor:instructor
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
            <Button
              title={"加入此課程"}
              backgroundColor={'rgb(232, 167, 60)'}
            />
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
              style={{paddingVertical: 8}}
            >
              <View style={[styles.subTabViewWrapper,{paddingHorizontal: 20}]}>
                <View style={{alignItems: 'center',}}>
                  <Text style={styles.ratinNumber}>
                   {this.state.rating_stars}
                  </Text>
                  <ClassRatingStars
                    rating_stars={this.state.rating_stars}
                    Number_of_ratings={this.state.Number_of_ratings}
                  />
                </View>
                <Text style={{fontWeight:'normal',color:'rgba(0,0,0,0.7)',marginVertical:10}}>
                評論 ({this.state.rating.length})
                </Text>
                {
                  this.state.rating.length == 0 ?
                  <View style={{alignItems: 'center'}}>
                    <Text style={{color: '#B5B5B5'}}>
                      還沒有評論
                    </Text>
                  </View>
                  :
                  this.state.rating.map((item)=>{
                    return(
                      <RatingView key={item.rating_id} item={item}/>
                    )
                  })
                }
              </View>
            </View>
            <View
              tabLabel="更多"
              style={{paddingVertical: 8}}
            >
              <View style={[styles.subTabViewWrapper,{paddingHorizontal: 20}]}>
                <View style={{alignItems:'center',marginBottom:10}}>
                  <Text style={styles.descriptions}>講者</Text>
                </View>
                <View>
                  <View style={{alignItems:'center',marginVertical:5}}>
                    <Image style={styles.instructorImage} source={{uri: this.state.instructor.instructor_photo}} />
                    <Text style={[styles.descriptions,{fontWeight:'bold'}]}>
                     {this.state.instructor.instructor_name}
                    </Text>
                    <Text style={[styles.descriptions,{fontSize:12,color:'#B5B5B5'}]}>
                     {this.state.instructor.instructor_title}
                    </Text>
                    <View style={{width:100}}>
                      <View style={{alignItems:'center',marginVertical:5}}>
                        <ClassRatingStars
                          rating_stars={this.state.instructor.instructor_rating}
                          showSmallRatingStar={true}
                          smallTextStyle={{fontSize: 28,color: 'rgba(0,0,0,0.7)'}}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={{flexDirection:"row", marginHorizontal: 12, marginVertical:5}}>
                  <View style={styles.descriptionsBox}>
                    <View>
                      <Text style={styles.descriptionsBoxText}>{this.state.instructor.instructor_students}</Text>
                    </View>
                    <View>
                      <Text style={[styles.descriptions,{fontSize:12,color:'#B5B5B5'}]}>Students</Text>
                    </View>
                  </View>
                  <View style={styles.descriptionsBox}>
                    <View>
                      <Text style={styles.descriptionsBoxText}>{this.state.instructor.instructor_courses}</Text>
                    </View>
                    <View>
                      <Text style={[styles.descriptions,{fontSize:12,color:'#B5B5B5'}]}>Courses</Text>
                    </View>
                  </View>
                  <View style={styles.descriptionsBox}>
                    <View>
                      <Text style={styles.descriptionsBoxText}>{this.state.instructor.instructor_comments}</Text>
                    </View>
                    <View>
                      <Text style={[styles.descriptions,{fontSize:12,color:'#B5B5B5'}]}>Comments</Text>
                    </View>
                  </View>
                </View>
                <View style={{marginVertical:10}}>
                  <Text style={styles.descriptions}>
                   {this.state.instructor.instructor_descriptions}
                  </Text>
                </View>
              </View>
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
    paddingVertical: 2,
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
  },
  ratinNumber: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'rgba(0,0,0,0.7)',
  },
  instructorImage: {
    height: 72,
    width: 72,
    borderRadius: 36,
    marginVertical: 10,
  },
  descriptionsBox: {
    alignItems: "center",
    marginHorizontal: 10,
    flex: 1,
  },
  descriptionsBoxText: {
    letterSpacing: 1,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.7)',
    marginTop: 2,
  }
}

export default ClassDetailPage;
