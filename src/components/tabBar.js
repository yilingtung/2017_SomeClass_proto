import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  TabBarIOS
} from 'react-native';

//BrowsePageNavigator被包裝成 stackNavigator
import {
  BrowsePageNavigator,
  MyClassesPageNavigator,
  CategoryPageNavigator,
  OpenClassPageNavigator
} from './../Router.js';

class TabBar extends Component{
  constructor(props){
    super(props);
    this.state = {
      selectedTab:'BrowsePage'
    };
  }
  render(){
    return(
      <TabBarIOS
        unselectedTintColor={styles.tabBarItemText.color}
        tintColor='rgb(90, 187, 214)'
        unselectedItemTintColor='rgb(197, 198, 200)'
        barTintColor="white"
      >
        <TabBarIOS.Item
          icon={require('./../img/btnBrowse_normal.png')}
          selectedIcon={require('./../img/btnBrowse_normal.png')}
          title="首頁"
          selected={this.state.selectedTab === 'BrowsePage'}
          onPress={() => {
            /*按下這個tab，要設定state，等等這個state會重新把上面的selected變成是成真的情況*/
            this.setState({
              selectedTab: 'BrowsePage'
            });
          }}
        >
          <BrowsePageNavigator />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./../img/btnCategory_normal.png')}
          selectedIcon={require('./../img/btnCategory_normal.png')}
          title="分類"
          selected={this.state.selectedTab === 'ChannelsPage'}
          onPress={() => {
            this.setState({
              selectedTab: 'ChannelsPage'
            });
          }}
        >
          <CategoryPageNavigator />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./../img/btnCamera_normal.png')}
          selectedIcon={require('./../img/btnCamera_normal.png')}
          title="開課"
          selected={this.state.selectedTab === 'Camera'}
          onPress={() => {
            this.setState({
              selectedTab: 'Camera'
            });
          }}
        >
          <OpenClassPageNavigator />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./../img/btnVedio_normal.png')}
          selectedIcon={require('./../img/btnVedio_normal.png')}
          title="課程"
          selected={this.state.selectedTab === 'MyClassesPage'}
          onPress={() => {
            this.setState({
              selectedTab: 'MyClassesPage'
            });
          }}
        >
          <MyClassesPageNavigator />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          icon={require('./../img/btnMyClass_normal.png')}
          selectedIcon={require('./../img/btnMyClass_normal.png')}
          title="我"
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
    color: 'rgb(197, 198, 200)',
    fontSize: 10,
    position: 'absolute',
    bottom: 5,
  },
}

export default TabBar;
