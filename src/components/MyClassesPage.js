import React, { Component } from 'react';
import { } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import MyClassesList from './MyClassesList';
import promoteGame from './../json/promoteGame';
import myOngoingClasses from './../json/myOngoingClasses';

class MyClassesPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      classesData: promoteGame,
      myOngoingClassesData: myOngoingClasses
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
      >
        <MyClassesList
          tabLabel="進行中"
          width={80}
          height={80}
          navigation={this.props.navigation}
          classesData={this.state.classesData}
          myOngoingClassesData={this.state.myOngoingClassesData}
          goToClassDetailPage={this.goToClassDetailPage}
        />
        <MyClassesList tabLabel="已完成" navigation={this.props.navigation} />
        <MyClassesList tabLabel="願望清單" navigation={this.props.navigation} />
      </ScrollableTabView>
    );
  }
}

const styles = {
}

export default MyClassesPage;
