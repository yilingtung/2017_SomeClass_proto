import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import Style from './style.js';

class CategoryPage extends Component {
  componentDidMount(){

  }
  goToOneSpliteCategoryPage(category){
    this.props.navigation.navigate('oneSpliteCategoryPage', {...category});
  }
  render(){
    return(
      <View>
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
            <TouchableOpacity style={styles.filterItem} onPress={()=>{this.filterScroll.scrollTo({x: -80});}}>
              <Text>音樂</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem} onPress={()=>{this.goToOneSpliteCategoryPage()}}>
              <Text>程式</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem} onPress={()=>{this.goToOneSpliteCategoryPage()}}>
              <Text>料理</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem} onPress={()=>{this.goToOneSpliteCategoryPage()}}>
              <Text>設計</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem} onPress={()=>{this.goToOneSpliteCategoryPage()}}>
              <Text>語文</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem} onPress={()=>{this.goToOneSpliteCategoryPage()}}>
              <Text>程式</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem} onPress={()=>{this.goToOneSpliteCategoryPage()}}>
              <Text>料理</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem} onPress={()=>{this.goToOneSpliteCategoryPage()}}>
              <Text>設計</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem} onPress={()=>{this.goToOneSpliteCategoryPage()}}>
              <Text>語文</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem} onPress={()=>{this.goToOneSpliteCategoryPage()}}>
              <Text>程式</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem} onPress={()=>{this.goToOneSpliteCategoryPage()}}>
              <Text>料理</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem} onPress={()=>{this.goToOneSpliteCategoryPage()}}>
              <Text>設計</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterItem} onPress={()=>{this.goToOneSpliteCategoryPage()}}>
              <Text>語文</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={styles.courseContainer}>
          <View style={styles.courseVideoWapper}>
            <Image style={styles.courseVideo} source={{uri: 'https://res.cloudinary.com/willischou/image/upload/v1491886605/imgHearthstone_3x_rebqar.png'}} />
          </View>
          <View style={styles.courseDescriptionWapper}>
            <Text style={styles.courseDescriptionTitle}>課程名稱</Text>
            <Text style={styles.courseDescriptionSubtitle}>用水彩來描繪城市中的景物，課堂中實際示範各種繪畫技巧。</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
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
  },
  courseContainer: {
    flexDirection: 'row',
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  courseVideoWapper: {
    width: 150
  },
  courseVideo:{
    width: 150,
    height: 100
  },
  courseDescriptionWapper: {
    flex: 6,
    height: 100,
    paddingTop: 5,
    paddingLeft: 15
  },
  courseDescriptionTitle:{
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.8)'
  },
  courseDescriptionSubtitle:{
    fontSize: 10,
    color: 'rgba(0,0,0,0.6)'
  }
}

export default CategoryPage;
