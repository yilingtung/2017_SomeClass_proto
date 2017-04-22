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
    super(props);
    this.state = {
      promoteGame: promoteGame
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
    }
  }
  componentDidMount(){

  }
  goToOneSpliteCategoryPage(category){
    this.props.navigation.navigate('CategoryPage', {...category});
  }
  goToClassDetailPage = (game)=>{
    this.props.navigation.navigate('ClassDetailPage', {...game});
  }
  render(){
    return(
      <View style={styles.container}>
        <ScrollView
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
                  <Text>{ cat.title }</Text>
                </TouchableOpacity>
              )
            })}
            {this.state.category==undefined?<Text>{this.state.recordCat}</Text>:null}
          </View>
        </ScrollView>
        <Line />
        <ScrollView style={{}}>
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
    flex: 1,
    backgroundColor: '#fff'
  },
  filterContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
    paddingTop: 5,
    paddingBottom: 5
  },
  filterItem: {
    flex: 1,
    marginLeft: 5,
    marginRight: 5,
    height: 20,
    alignItems: 'center',
  }
}

export default CategoryPage;
