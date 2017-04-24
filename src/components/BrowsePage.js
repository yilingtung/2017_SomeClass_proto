import React, { Component } from 'react';
import {
  View,
  ScrollView
} from 'react-native';
import Line from './line';
import HorizontalScrollView from './HorizontalScrollView';
import VerticalScrollView from './VerticalScrollView';
//Games JSON Data
import promoteGame from './../json/promoteGame';
import dailyRecommend from './../json/dailyRecommend';
import fiveMinutesLearning from './../json/fiveMinutesLearning';
import youMayNotLikeIt from './../json/youMayNotLikeIt';

class BrowsePage extends Component{
  constructor(props){
    super(props);
    this.state = {
      promoteGame: promoteGame,
      dailyRecommend: dailyRecommend,
      fiveMinutesLearning: fiveMinutesLearning,
      youMayNotLikeIt: youMayNotLikeIt
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
        <View style={{marginVertical: 8, backgroundColor: '#fff',}}>
          <HorizontalScrollView
            title={'每日推薦'}
            width={270}
            height={120}
            showViewTitleButton={true}
            showRating={true}
            showTags={true}
            goToClassDetailPage={this.goToClassDetailPage}
            itemList={this.state.dailyRecommend}
          />
          <Line width={4}/>
          <HorizontalScrollView
            title={'五分鐘學習'}
            width={120}
            height={120}
            showViewTitleButton={true}
            classNameOneLine={true}
            showRating={true}
            showSmallRatingStar={true}
            goToClassDetailPage={this.goToClassDetailPage}
            itemList={this.state.fiveMinutesLearning}
          />
          <Line width={4}/>
          <HorizontalScrollView
            title={'即將推出'}
            width={120}
            height={120}
            classNameOneLine={true}
            goToClassDetailPage={this.goToClassDetailPage}
            itemList={this.state.youMayNotLikeIt}
          />
          <Line width={4}/>
          <VerticalScrollView
            title={'大家都在看'}
            width={150}
            showRating={true}
            showTags={true}
            goToClassDetailPage={this.goToClassDetailPage}
            itemList={this.state.promoteGame}
          />
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
}

export default BrowsePage;
