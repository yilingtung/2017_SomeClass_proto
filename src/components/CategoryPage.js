import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import VerticalScrollView from './VerticalScrollView';
import Line from './line';
import Style from './style.js';
// json/category.json
import category from './../json/category.json';
//Games JSON Data
import promoteGame from './../json/promoteGame';

class CategoryPage extends Component {
  constructor(props){
    var firstCat,secondCat,thirdCat;
    super(props);
    this.state = {
      promoteGame: [],
      gameList: null
    };
    if(this.props.navigation.state.params == undefined){
      this.state.category = category;
    }
    else{
      //有設定篩選 filter 條件
      //category要設定成為相對應的子分類
      this.state.category = this.props.navigation.state.params.subCategory;
      this.state.mainCat = this.props.navigation.state.params.mainCat;
      this.state.recordCat = this.props.navigation.state.params.recordCat;
      var recordCatArray = this.state.recordCat.split(" > ");
      firstCat = recordCatArray[0];
      secondCat = recordCatArray[1];
      thirdCat = recordCatArray[2];
    }
    if(firstCat != undefined || secondCat != undefined || thirdCat != undefined ){
      promoteGame.forEach((game)=>{
        //標籤的對照
        if(game.tags[0] == firstCat && secondCat == undefined && thirdCat == undefined){
          //只有一個標籤
          this.state.promoteGame.push(game);
        }
        else if(game.tags[0] == firstCat && game.tags[1] == secondCat && thirdCat == undefined){
          //有兩個標籤
          this.state.promoteGame.push(game);
        }
        else if(game.tags[0] == firstCat && game.tags[1] == secondCat && game.tags[2] == thirdCat){
          //有三個標籤
          this.state.promoteGame.push(game);
        }
      })
    }
    else {
      this.state.promoteGame = promoteGame;
    }
  }
  componentDidMount(){

  }
  goToOneSpliteCategoryPage(category){
    //前往分類頁面，並且帶著下一次篩選的參數
    this.props.navigation.navigate('CategoryPage', {...category});
  }
  goToClassDetailPage = (game)=>{
    //前往詳細的頁面，並且帶著資料參數
    this.props.navigation.navigate('ClassDetailPage', {...game});
  }
  render(){
    return(
      <View style={styles.container}>
        <ScrollView
          style={{height: 30}}
          contentInset={{left: 80}}
          contentOffset={{x: -80}}
          centerContent
          horizontal
          directionalLockEnabled
          automaticallyAdjustContentInsets={false}
          ref={(scrollView)=>{this.filterScroll = scrollView}}
        >
          <View style={styles.filterContainer}>
            {this.state.category==undefined?null:this.state.category.map((cat)=>{
              return(
                <TouchableOpacity
                  key={ cat.title }
                  style={styles.filterItem}
                  onPress={()=>{
                    this.filterScroll.scrollTo({x: -80});
                    cat.mainCat = cat.title;
                    //沒有前面的紀錄，設定成空的字串
                    this.state.recordCat = this.state.recordCat==undefined?"":this.state.recordCat;
                    //將前面的紀錄串上後面的字串
                    cat.recordCat = this.state.recordCat + (this.state.recordCat==""?"":" > ") + cat.mainCat;
                    this.goToOneSpliteCategoryPage(cat);
                  }}
                >
                  <Text style={{height: 20}}>{ cat.title }</Text>
                </TouchableOpacity>
              )
            })}
            {this.state.category==undefined?<Text>{this.state.recordCat}</Text>:null}
          </View>
        </ScrollView>
        <Line />
        <ScrollView style={{height: Style.DEVICE_HEIGHT - 94 - 49}}>
          <VerticalScrollView
            title={""}
            width={150}
            goToClassDetailPage={this.goToClassDetailPage}
            itemList={this.state.promoteGame}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#fff'
  },
  filterContainer: {
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5,
    height: 30
  },
  filterItem: {
    marginLeft: 10,
    marginRight: 10,
    height: 20,
    alignItems: 'center',
  }
}

export default CategoryPage;
