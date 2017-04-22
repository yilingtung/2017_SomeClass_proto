import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Line from './line';
import ClassRatingStars from './ClassRatingStars';
import Tags from './tags';
import ProgressBar from './progressBar';

class MyOngoingClassesList extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <ScrollView style={styles.container}>
        <View style={styles.cardList}>
          {
            this.props.classesListData.map((item) => {
              var ratio = Number(Math.round(item.finish_chapters/item.total_chapters * 100).toFixed(0));
              return(
                <View key={item.title}>
                  <TouchableOpacity
                    style={styles.card}
                    onPress={()=>this.props.goToClassDetailPage(item)}
                  >
                    <Image
                      source={{uri:item.thumbnail_image}}
                      style={[styles.cardImg, {width: this.props.width, height: this.props.height}]}
                    />
                    <View style={styles.cardContent}>
                      <Text numberOfLines={2} style={styles.className}>
                        {item.title}
                      </Text>
                      <Text numberOfLines={2} style={styles.nextChapter}>
                        Next Chapter : {item.next_chapters}
                      </Text>
                      <ProgressBar
                        ratio={ratio}
                        fractions={[item.finish_chapters,item.total_chapters]}
                        showFractions={true}
                        FontStyle={{fontSize:18,fontWeight:'bold',color:'rgb(90, 187, 214)'}}
                        ProgressBarWidth={4}
                        ProgressBarColor={'rgb(90, 187, 214)'}
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={{marginLeft: 12}}>
                    <Line />
                  </View>
                </View>
              )
          })}
        </View>
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
  cardList: {
    flexDirection: 'column',
  },
  card:{
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 12,
  },
  cardImg: {
    borderRadius: 3,
    marginVertical: 15,
    marginHorizontal: 10,
  },
  cardContent: {
    flexDirection: 'column',
    padding: 10,
    height: 132,
    flex: 1,
    justifyContent: 'center',
  },
  classRatingWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  className: {
    lineHeight: 20,
  },
  nextChapter: {
    fontSize: 12,
    marginTop: 5,
    color: 'rgb(187, 187, 187)',
  },
}

export default MyOngoingClassesList;
