import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from 'react-native';
class tags extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <View style={styles.tagWrapper}>
        {
          this.props.tags.map((item) => {
          return(
            <View
              key={item}
              style={styles.tag}
            >
              <Text numberOfLines={1} style={styles.tagText}>{item}</Text>
            </View>
          )
        })}
      </View>
    )
  }
}

const styles = {
  tagWrapper: {
    flexDirection: 'row',
    marginRight: 10,
    overflow: 'hidden',
  },
  tag: {
    borderStyle: 'solid',
    borderColor: '#D8D8D8',
    borderWidth: 0.5,
    marginVertical: 5,
    marginRight: 5,
  },
  tagText: {
    color: '#B5B5B5',
    fontSize: 12,
    paddingHorizontal: 8,
  }
}

export default tags;
