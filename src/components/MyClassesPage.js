import React, { Component } from 'react';
import { } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import MyClassesListView from './MyClassesListView';

import promoteGame from './../json/promoteGame';
import userInfo from './../json/userInfo';

import myOngoingClasses from './../json/myOngoingClasses';
import myFinishedClasses from './../json/myFinishedClasses';

class MyClassesPage extends Component{
  constructor(props){
    super(props);
    console.log(12);
    this.state = {
      userInfo: userInfo,
      classesData: promoteGame,
      myOngoingClassesData: [],
      myFinishedClassesData: [],
      myWantedClassesDate: []
    };
    this.generateOngoingClassesList = this.generateOngoingClassesList.bind(this);
    this.generatemyFinishedClassesList = this.generatemyFinishedClassesList.bind(this);
    this.generatemyWantedClassesDate = this.generatemyWantedClassesDate.bind(this);
  }
  componentDidMount(){
    this.generateOngoingClassesList();
    this.generatemyFinishedClassesList();
    this.generatemyWantedClassesDate();
  }
  goToClassDetailPage = (game)=>{
    this.props.navigation.navigate('ClassDetailPage', {...game});
  }
  generateOngoingClassesList(){
    var _ongoingClassesList = [];
    promoteGame.forEach((game)=>{
      this.state.userInfo.onGoing_Courses.forEach((course)=>{
        if(game.title == course.title){
          _ongoingClassesList.push(Object.assign(game, course));
        }
      });
    });
    this.setState({myOngoingClassesData: _ongoingClassesList});
  }
  generatemyFinishedClassesList(){
    var _myFinishedClassesData = [];
    promoteGame.forEach((game)=>{
      this.state.userInfo.finished_Courses.forEach((course)=>{
        if(game.title == course){
          _myFinishedClassesData.push(game);
        }
      });
    });
    this.setState({myFinishedClassesData: _myFinishedClassesData});
  }
  generatemyWantedClassesDate(){
    var _myWantedClassesDate = [];
    promoteGame.forEach((game)=>{
      this.state.userInfo.wanted_Courses.forEach((course)=>{
        if(game.title == course){
          _myWantedClassesDate.push(game);
        }
      });
    });
    this.setState({myWantedClassesDate: _myWantedClassesDate});
  }
  render(){
    return(
      <ScrollableTabView
        tabBarUnderlineStyle={{backgroundColor:'rgb(90, 187, 214)'}}
        tabBarBackgroundColor={'rgb(255, 255, 255)'}
        tabBarActiveTextColor={'rgb(90, 187, 214)'}
        tabBarInactiveTextColor={'rgb(197, 198, 200)'}
        tabBarTextStyle={{fontWeight:'bold'}}
        style={styles.container}
      >
        <MyClassesListView
          tabLabel="進行中"
          width={80}
          height={80}
          navigation={this.props.navigation}
          classesListData={this.state.myOngoingClassesData}
          goToClassDetailPage={this.goToClassDetailPage}
        />
        <MyClassesListView
          tabLabel="已完成"
          width={80}
          height={80}
          navigation={this.props.navigation}
          classesListData={this.state.myFinishedClassesData}
          goToClassDetailPage={this.goToClassDetailPage}
        />
        <MyClassesListView
          tabLabel="願望清單"
          width={80}
          height={80}
          navigation={this.props.navigation}
          classesListData={this.state.myWantedClassesDate}
          goToClassDetailPage={this.goToClassDetailPage}
        />
      </ScrollableTabView>
    );
  }
}

const styles = {
  container: {
    marginBottom: 48,
  }
}

export default MyClassesPage;
