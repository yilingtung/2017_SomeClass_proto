import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

class TwoColList extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <ScrollView>
        <View style={styles.cardList}>
          {
            this.props.itemList.map((item) => {
            return(
              <TouchableOpacity
                key={item.title}
                style={styles.card}
                onPress={()=>this.props.goToGameDetailPage(item)}
              >
                <Image style={styles.cardImg} source={{uri:item.thumbnail_image}} />
              </TouchableOpacity>
            )
          })}
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  cardList: {
    paddingTop: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'space-between'
  },
  card:{
    height: 180,
    marginBottom: 5
  },
  cardImg: {
    width: 180,
    height: 180
  }
}

export default TwoColList;
