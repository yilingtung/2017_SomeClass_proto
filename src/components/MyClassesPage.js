import React, { Component } from 'react';
import { } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import MyClassesList from './MyClassesList';

class MyClassesPage extends Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <ScrollableTabView
        tabBarUnderlineStyle={{backgroundColor:'rgb(90, 187, 214)'}}
        tabBarBackgroundColor={'rgb(255, 255, 255)'}
        tabBarActiveTextColor={'rgb(90, 187, 214)'}
        tabBarInactiveTextColor={'rgb(197, 198, 200)'}
        tabBarTextStyle={{fontWeight:'bold'}}
      >
        <MyClassesList tabLabel="進行中" />
        <MyClassesList tabLabel="已完成" />
        <MyClassesList tabLabel="願望清單" />
      </ScrollableTabView>
    );
  }
}

const styles = {
}

export default MyClassesPage;
