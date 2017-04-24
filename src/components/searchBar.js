import React, { Component } from 'react';
import {
  View,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native';

class SearchBar extends Component{
  constructor(props){
    super(props);
    this.state = {searchText : 'Search'};
  }
  searchGames(){
    console.error(this.state.searchText);
  }
  render(){
    return(
      <View>
        <View style={{height: 30 ,width: 300, marginLeft: -20, flexDirection: 'row', backgroundColor: 'rgb(49,31,83)', borderRadius: 5, paddingLeft: 8.5}}>
          <Image style={styles.searchIcon} source={require('./../img/iconSearch.png')}/>
          <TextInput
            style={{height: 30, color: 'rgb(158,163,227)', fontSize: 15, width: 200, alignSelf: 'center'}}
            onChangeText={(text) => this.setState({searchText : text})}
            value={this.state.searchText}
          />
        </View>
      </View>
    )
  }
}

class SearchBarButton extends Component{
  render(){
    return(
      <TouchableOpacity
        onPress={this.props.onPress}
      >
        <Image style={styles.headerIcon} source={require('./../img/btnSearch.png')} />
      </TouchableOpacity>
    );
  }
}

const styles = {
  searchIcon:{
    alignSelf: 'center',
    width: 18,
    height: 18,
    marginRight:5.5
  },
  headerIcon: {
    width: 33,
    height: 33,
    marginRight: 10,
  },
}

export default SearchBar;
export { SearchBarButton };
