import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import Line from './line';
import { ScrollableTabView } from 'react-native-scrollable-tab-view';
import HorizontalScrollView from './HorizontalScrollView';
import VerticalScrollView from './VerticalScrollView';
import TwoColList from './twoColList';
//Games JSON Data
import promoteGame from './../json/promoteGame';

class MyClassesList extends Component{
  constructor(props){
    super(props);
    this.state = {
      promoteGame: promoteGame
    };
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
        <VerticalScrollView
          width={88}
          goToClassDetailPage={this.goToClassDetailPage}
          itemList={this.state.promoteGame}
        />
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
}

export default MyClassesList;
