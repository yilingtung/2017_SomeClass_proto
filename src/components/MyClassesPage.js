import React, { Component } from 'react';
import { } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import MyClassesListView from './MyClassesListView';
import promoteGame from './../json/promoteGame';
import myOngoingClasses from './../json/myOngoingClasses';
import myFinishedClasses from './../json/myFinishedClasses';

class MyClassesPage extends Component{
  constructor(props){
    super(props);
    console.log(12);
    this.state = {
      classesData: promoteGame,
      myOngoingClassesData: myOngoingClasses,
      myFinishedClassesData: myFinishedClasses,
    };
  }
  goToClassDetailPage = (game)=>{
    this.props.navigation.navigate('ClassDetailPage', {...game});
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
          classesListData={this.state.classesData}
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
