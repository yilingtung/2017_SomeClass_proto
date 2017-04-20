import React, { Component } from 'react';
import {
  View
} from 'react-native';
import TwoColList from './twoColList';
//Games JSON Data
import promoteGame from './../json/promoteGame';

class GamesPage extends Component{
  constructor(props){
    super(props);
    this.state = {
      promoteGame: promoteGame
    };
  }
  goToGameDetailPage = (game)=>{
    this.props.navigation.navigate('GameDetailPage', {...game});
  }
  render(){
    return(
      <View style={styles.container}>
        <TwoColList goToGameDetailPage={this.goToGameDetailPage} itemList={this.state.promoteGame}/>
        <View style={styles.splicLine}></View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  splicLine: {
    height: 0.5,
    backgroundColor: 'rgba(0,0,0,0.2)'
  }
}

export default GamesPage;
