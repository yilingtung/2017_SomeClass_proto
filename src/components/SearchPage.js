import React, { Component } from 'react';
import { Text, View, ScrollView } from 'react-native';
import Style from './style';
import VerticalScrollView from './VerticalScrollView';
// json/category.json
import category from './../json/category.json';
//Games JSON Data
import promoteGame from './../json/promoteGame';
//User Info Data
import userInfo from './../json/userInfo';

class SearchPage extends Component {
  constructor(props){
    super(props);
    var _this = this;
    this.state = {
      promoteGame: [],
      recomandGame: [],
      userSearchHistory: userInfo.userSearchHistory,
      userWatchedClass: userInfo.userWatchedClass,
      userRecomandList: userInfo.userRecomandList,
      showingRecomandList: true
    };
    //尚待修正，不是很好的方法。
    setTimeout(()=>{
      this.props.navigation.state.searchBar.bindSearchPage(_this);
    }, 500);

    this.receivepromoteGame = this.receivepromoteGame.bind(this);
    this.generateWatchedList = this.generateWatchedList.bind(this);
    this.generateRecomandList = this.generateRecomandList.bind(this);
  }
  componentDidMount(){
    //畫出物件後，要自動產生第一次的看過清單
    this.generateRecomandList();
    this.generateWatchedList();
  }
  receivepromoteGame(promoteGame){
    //接收來至 searchBar.js 的資料
    this.setState({
      promoteGame: promoteGame,
      verticalScrollViewTitle: '搜尋結果',
      showingRecomandList: false
    });
  }
  generateWatchedList(){
    //產生看過的課程列表，對應 json/userInfo.userWatchedClass
    var _promoteGame = [];
    this.state.userWatchedClass.forEach((title)=>{
      promoteGame.forEach((game)=>{
        if(game.title == title){
          _promoteGame.push(game);
        }
      });
    });
    this.setState({
      promoteGame: _promoteGame,
      verticalScrollViewTitle: '最近看過'
    });
  }
  generateRecomandList(){
    var _recomandGame = [];
    if(this.state.userRecomandList != undefined){
      this.state.userRecomandList.forEach((title)=>{
        promoteGame.forEach((game)=>{
          if(game.title == title){
            _recomandGame.push(game);
          }
        });
      });
      this.setState({
        recomandGame: _recomandGame,
        showingRecomandList: true
      });
    }
    else {
      this.setState({showingRecomandList: false})
    }
  }
  goToClassDetailPage = (game)=>{
    //前往詳細的頁面，並且帶著資料參數
    this.props.navigation.navigate('ClassDetailPage', {...game});
  }
  render(){
    return(
      <View style={{backgroundColor: '#fff', flex: 1}}>
        <ScrollView style={{height: Style.DEVICE_HEIGHT - 94 - 49}}>
          <VerticalScrollView
            title={this.state.verticalScrollViewTitle}
            width={150}
            goToClassDetailPage={this.goToClassDetailPage}
            itemList={this.state.promoteGame}
          />
          {this.state.showingRecomandList &&
            <VerticalScrollView
              title={'推薦課程'}
              width={150}
              goToClassDetailPage={this.goToClassDetailPage}
              itemList={this.state.recomandGame}
            />
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = {

}

export default SearchPage;
