import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import Line from './line';
import HorizontalScrollView from './HorizontalScrollView';
import VerticalScrollView from './VerticalScrollView';
import TwoColList from './twoColList';
//Games JSON Data
import promoteGame from './../json/promoteGame';

class BrowsePage extends Component{
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
        <HorizontalScrollView
          title={'每日推薦'}
          width={270}
          height={120}
          showViewTitleButton={true}
          showRatingStars={true}
          showRatingNumber={true}
          showTags={true}
          goToClassDetailPage={this.goToClassDetailPage}
          itemList={this.state.promoteGame}
        />
        <HorizontalScrollView
          title={'五分鐘學習'}
          width={120}
          height={120}
          showViewTitleButton={true}
          classNameOneLine={true}
          showRatingStars={true}
          goToClassDetailPage={this.goToClassDetailPage}
          itemList={this.state.promoteGame}
        />
        <HorizontalScrollView
          title={'即將推出'}
          width={120}
          height={120}
          classNameOneLine={true}
          goToClassDetailPage={this.goToClassDetailPage}
          itemList={this.state.promoteGame}
        />
        <VerticalScrollView
          title={'大家都在看'}
          width={150}
          showRatingStars={true}
          showRatingNumber={true}
          showTags={true}
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
    marginTop: -20,
    backgroundColor: '#fff',
  },
}

export default BrowsePage;
