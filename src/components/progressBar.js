import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
class ProgressBar extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return(
      <View style={styles.container}>
        <Text style={[styles.progressNumber,this.props.FontStyle]}>
          {this.props.showRatio &&
            this.props.ratio +` %`
          }
          {this.props.showFractions &&
            this.props.fractions[0]+'/'+this.props.fractions[1]
          }
        </Text>
        <View style={[styles.progressTrack,{height:this.props.ProgressBarWidth}]}>
          <View style={[styles.progressBar,{flex:this.props.ratio,backgroundColor:this.props.ProgressBarColor}]}></View>
          <View style={[styles.progressBlank,{flex:100-this.props.ratio}]}></View>
        </View>
      </View>
    );
  }
}

const styles = {
  container:{
    alignItems: 'flex-end'
  },
  progressNumber: {
  },
  progressTrack: {
    marginVertical: 3,
    backgroundColor: '#ddd',
    flexDirection: 'row',
  },
  progressBlank: {
    backgroundColor: '#ddd',
  },
}

export default ProgressBar;
