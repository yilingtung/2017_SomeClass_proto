import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Line from './line';
import Button from './button';
import NoDataView from './noDataView';
import ButtonOpenCourse from './buttonOpenCourse';
import HorizontalScrollView from './HorizontalScrollView';
import VerticalScrollView from './VerticalScrollView';
//Game Json Data
import promoteGame from './../json/promoteGame';
//User Info JSON Data
import userInfo from './../json/userInfo';

class MyPersonalPage extends Component{
  constructor(props){
    super(props);
    console.log(1);
    this.state = {
      userInfo: userInfo,
      userOpenCoursesList: [],
      userWatchedClassList: []
    };
    this.generateOpenCoursesList = this.generateOpenCoursesList.bind(this);
    this.generateWatchesClassList = this.generateWatchesClassList.bind(this);
  }
  componentDidMount(){
    this.generateOpenCoursesList(promoteGame);
    this.generateWatchesClassList(promoteGame);
  }
  generateOpenCoursesList(promoteGame){
    var _userOpenCoursesList = [];
    promoteGame.forEach((game)=>{
      this.state.userInfo.userOpenCourses.forEach((course)=>{
        if(game.title == course){
          _userOpenCoursesList.push(game);
        }
      });
    });
    this.setState({userOpenCoursesList: _userOpenCoursesList});
  }
  generateWatchesClassList(){
    var _userWatchedClassList = [];
    promoteGame.forEach((game)=>{
      this.state.userInfo.userWatchedClass.forEach((course)=>{
        if(game.title == course){
          _userWatchedClassList.push(game);
        }
      });
    });
    this.setState({userWatchedClassList: _userWatchedClassList});
  }
  goToClassDetailPage = (game)=>{
    this.props.navigation.navigate('ClassDetailPage', {...game});
  }
  goToGameDetailPage = (game)=>{
    this.props.navigation.navigate('GameDetailPage', {...game});
  }
  render(){
    return(
      <ScrollView style={styles.container}>
        <View>
          <Image style={styles.backgroundColorImg} source={{uri: userInfo.userBackgroundImage}} />
        </View>
        <View style={styles.usderInfoView}>
          <Text style={styles.userName}>{userInfo.userName}</Text>
          <Text style={{color: 'rgb(179, 181, 185)'}}>{userInfo.user_title}</Text>
          <View style={{flexDirection:"row"}}>
            <View style={[styles.descriptionsBox,{marginRight: 30}]}>
              <View>
                <Text style={styles.descriptionsBoxText}>{userInfo.students.length}</Text>
              </View>
              <View>
                <Text style={[styles.descriptions,{fontSize:12,color:'#B5B5B5'}]}>Students</Text>
              </View>
            </View>
            <View style={styles.descriptionsBox}>
              <View>
                <Text style={styles.descriptionsBoxText}>{userInfo.userOpenCourses.length}</Text>
              </View>
              <View>
                <Text style={[styles.descriptions,{fontSize:12,color:'#B5B5B5'}]}>Courses</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{position: 'absolute',top:46,}}>
          <Image style={styles.userImage} source={{uri: userInfo.userPhoto}} />
        </View>
        <View style={{backgroundColor: '#F1F4F6', paddingVertical: 2}}>
          <ScrollableTabView
            tabBarUnderlineStyle={{backgroundColor:'rgb(90, 187, 214)'}}
            tabBarBackgroundColor={'rgb(255, 255, 255)'}
            tabBarActiveTextColor={'rgb(90, 187, 214)'}
            tabBarInactiveTextColor={'rgb(197, 198, 200)'}
            tabBarTextStyle={{fontWeight:'bold'}}
            style={styles.subContainer}
          >
            <View
              tabLabel="我開的課"
              style={{paddingVertical: 8}}
            >
              {
                this.state.userOpenCoursesList == 0 ?
                  <View>
                    <ButtonOpenCourse />
                    <View style={{alignItems: 'center',marginVertical:0}}>
                      <Text style={{color: '#B5B5B5',marginVertical:5}}>還沒開設課程</Text>
                      <Text style={{color: '#B5B5B5',marginVertical:5}}>快和大家分享你的信念吧</Text>
                    </View>
                  </View>
                :
                  <View style={{backgroundColor: '#fff'}}>
                    <VerticalScrollView
                      width={150}
                      showRating={true}
                      showTags={true}
                      goToClassDetailPage={this.goToClassDetailPage}
                      itemList={this.state.userOpenCoursesList}
                    />
                  </View>
              }
            </View>
            <View
              tabLabel="觀看紀錄"
              style={{paddingVertical: 8}}
            >
              {
                this.state.userWatchedClassList == 0 ?
                  <View>
                    <NoDataView />
                    <View style={{alignItems: 'center',marginVertical:0}}>
                      <Text style={{color: '#B5B5B5'}}>還沒看過任何課程</Text>
                    </View>
                  </View>
                :
                  <View style={{backgroundColor: '#fff'}}>
                    <VerticalScrollView
                      width={150}
                      showRating={true}
                      showTags={true}
                      goToClassDetailPage={this.goToClassDetailPage}
                      itemList={this.state.userWatchedClassList}
                    />
                  </View>
              }
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
    marginTop: -20,
    backgroundColor: '#F1F4F6',
  },
  backgroundColorImg: {
    width: Style.DEVICE_WIDTH,
    height: 92,
  },
  userImage: {
    height: 72,
    width: 72,
    borderRadius: 36,
    marginVertical: 10,
    marginHorizontal: 12,
  },
  usderInfoView: {
    paddingVertical: 24,
    paddingLeft: 96,
    paddingRight: 12,
    backgroundColor: '#fff',
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'rgba(0,0,0,.7)',
    marginBottom: 5,
  },
  descriptionsBox: {
    alignItems: "center",
    marginVertical: 20,
    marginHorizontal: 0,
  },
  descriptionsBoxText: {
    letterSpacing: 1,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.7)',
    marginTop: 2,
  },
}

export default MyPersonalPage;
