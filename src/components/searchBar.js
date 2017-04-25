import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';
//Games JSON Data
import promoteGame from './../json/promoteGame';
import Style from './style.js';

class SearchBar extends Component{
  //搜尋的功能元件
  constructor(props){
    super(props);
    this.state = {searchText: 'Search', searchHolder: null};
    this.searchGames = this.searchGames.bind(this);
    this.bindSearchPage = this.bindSearchPage.bind(this);
  }
  searchGames(input){
    //開始根據輸入 input，來塞選資料
    //並且把資料餵給 SearchPage
    var _promoteGame = [];
    //空白鍵視為是多項搜尋字串
    var inputArray = input.split(' ');
    console.log(inputArray);
    if(input != ""){
      promoteGame.forEach((game)=>{
        inputArray.forEach((input)=>{
          if(input != "" && game.title.includes(input)){
            _promoteGame.push(game);
          }
        });
      });
      this.state.searchPage.receivepromoteGame(_promoteGame);
    }
    else{
      //空的搜尋條件，產生使用看過清單＆推薦清單
      this.state.searchPage.generateWatchedList();
      this.state.searchPage.generateRecomandList();
    }
    this.setState({searchText: input});
  }
  bindSearchPage(searchPage){
    //讓searchPage可以被獲取
    this.setState({searchPage: searchPage});
  }
  render(){
    return(
        <View style={styles.searchBar}>
          <Image style={styles.searchIcon} source={require('./../img/btnSearch_gray.png')}/>
          <TextInput
            style={styles.searchBarText}
            onChangeText={(input) => this.searchGames(input)}
            value={this.state.searchText}
          />
        </View>
    )
  }
}

class SearchBarButton extends Component{
  constructor(props){
    super(props);
    this.state = {};
    this.onPress = this.onPress.bind(this);
  }
  onPress(){
    this._reactInternalInstance._currentElement._owner._currentElement.props.navigation.navigate('SearchPage');
  }
  render(){
    return(
      <TouchableOpacity
        onPress={this.onPress}
      >
        <Image style={styles.headerIcon} source={require('./../img/btnSearch.png')} />
      </TouchableOpacity>
    );
  }
}

const styles = {
  searchBar: {
    height: 20 ,
    flex: 1,
    width: Style.DEVICE_WIDTH-69,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginLeft: 12,
    marginRight: 57,
    marginVertical: 7,
    paddingHorizontal: 12,
  },
  searchBarText: {
    height: 20,
    color: 'rgb(197, 198, 200)',
    fontSize: 15,
    flex: 1,
    alignSelf: 'center'
  },
  searchIcon:{
    alignSelf: 'center',
    width: 18,
    height: 18,
    marginRight: 5,
  },
  headerIcon: {
    width: 33,
    height: 33,
    marginRight: 10,
  },
}

export { SearchBar, SearchBarButton };
