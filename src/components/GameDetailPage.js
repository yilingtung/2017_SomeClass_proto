import React, { Component } from 'react';
import { View, Text, Image, WebView, ScrollView } from 'react-native';
import Style from './style.js';

class GameDetailPage extends Component{
  constructor(props){
    super(props);
    const {
      title,
      descriptions,
      thumbnail_image,
      videoList
    } = this.props.navigation.state.params;
    this.state = {
      title: title,
      descriptions: descriptions,
      thumbnail_image: thumbnail_image,
      videoList: videoList
    }
  }
  render(){
    return(
      <ScrollView style={styles.scrollView}>
        <View style={{flex: 1}}>
          <Image style={styles.cardImg} source={{uri: this.state.thumbnail_image}} />
          <Text style={styles.title}>{this.state.title}</Text>
          <Text style={styles.descriptions}>{this.state.descriptions}</Text>
          {this.state.videoList == null ? null : this.state.videoList.map((video)=>(
            <View style={{height: 200, flex:1}} key={video.title}>
              <WebView
                source={{uri: video.url}}
                style={{
                        marginTop: 20,
                        height: 200
                      }}
              />
              <Text>
                {video.title}
              </Text>
            </View>
          ))}
          </View>
      </ScrollView>
    );
  }
}

const styles = {
  scrollView: {
    height: Style.DEVICE_HEIGHT
  },
  cardImg: {
    width: Style.DEVICE_WIDTH,
    height: 200,
    marginBottom: 10
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.7)',
    textAlign: 'center'
  },
  descriptions: {
    fontSize: 14,
    textAlign: 'center'
  }
}

export default GameDetailPage;
