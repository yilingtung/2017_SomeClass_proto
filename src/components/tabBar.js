import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TabBarIOS
} from 'react-native';
//import GamesPage from './GamesPage';
//GamePage被包裝成 stackNavigator
import { stackNavigator as StackNavigator } from './../Router';
import { categoryStackNavigator as CategoryStackNavigator } from './../Router';
//ChannelsPage
import ChannelsPage from './ChannelsPage';

class TabBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'GamesPage'
    };
  }
  render(){
    return(
      <TabBarIOS
        unselectedTintColor={styles.tabBarItemText.color}
        tintColor="rgb(100,65,165)"
        barTintColor="white"
      >
        <TabBarIOS.Item
          icon={require('./../img/btnGamesSelectedF.png')}
          title="首頁"
          selected={this.state.selectedTab === 'GamesPage'}
          onPress={() => {
            /*按下這個tab，要設定state，等等這個state會重新把上面的selected變成是成真的情況*/
            this.setState({
              selectedTab: 'GamesPage'
            });
          }}
        >
          <StackNavigator />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./../img/btnChannels.png')}
          title="分類"
          selected={this.state.selectedTab === 'ChannelsPage'}
          onPress={() => {
            this.setState({
              selectedTab: 'ChannelsPage'
            });
          }}
        >
          <CategoryStackNavigator />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./../img/btnFollowing.png')}
          selectedIcon={require('./../img/btnFollowing.png')}
          title="開課"
          selected={this.state.selectedTab === 'Following'}
          onPress={() => {
            this.setState({
              selectedTab: 'Following'
            });
          }}
        >
          {<View></View>}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./../img/btnMe.png')}
          selectedIcon={require('./../img/btnMe.png')}
          title="熊課"
          selected={this.state.selectedTab === 'Class'}
          onPress={() => {
            this.setState({
              selectedTab: 'Class'
            });
          }}
        >
          {<View></View>}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./../img/btnMe.png')}
          selectedIcon={require('./../img/btnMe.png')}
          title="自己"
          selected={this.state.selectedTab === 'Me'}
          onPress={() => {
            this.setState({
              selectedTab: 'Me'
            });
          }}
        >
          {<View></View>}
        </TabBarIOS.Item>
      </TabBarIOS>
    )
  }
}

const styles = {
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingLeft:0.5,
    paddingRight:0.5,
    height:49,
    backgroundColor: 'rgb(255,255,255)'
  },
  tabBarItem: {
    flex: 1,
    justifyContent: 'center'//height middle
  },
  tabBarItemIcon: {
    alignSelf: 'center',
    width: 49,
    height: 49
  },
  tabBarItemText: {
    alignSelf: 'center',
    color: 'rgb(187,187,187)',
    fontSize: 10,
    position: 'absolute',
    bottom: 5,
  },
  tabActive: {
    color: 'rgb(100,65,165)'
  }
}

export default TabBar;
