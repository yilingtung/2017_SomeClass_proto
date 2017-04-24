import React from 'react';
import { StackNavigator } from 'react-navigation';
import BrowsePage from './components/BrowsePage';
import ClassDetailPage from './components/ClassDetailPage';
import GameDetailPage from './components/GameDetailPage';
import MyClassesPage from './components/MyClassesPage';
import MyPersonalPage from './components/MyPersonalPage';
import SearchBar, { SearchBarButton } from './components/searchBar';
//最上面導覽列的特殊元件
import { NavBarBackButton, NavBarLikeButton } from './components/navBarButton';

export const BrowsePageNavigator = StackNavigator({
  BrowsePage: {
    screen: BrowsePage,
    navigationOptions: {
      header: ({state}) => ({
        title:'首頁',
        titleStyle: styles.navBarTitle,
        right: (
          <SearchBarButton onPress={()=>{this.searchBar.searchGames()}}/>
        ),
        style: styles.navBar
      })
    }
  },
  ClassDetailPage: {
    screen: ClassDetailPage,
    navigationOptions: {
      header: ({state}) => ({
        left: (
          <NavBarBackButton />
        ),
        right: (
          <NavBarLikeButton />
        ),
        title: (state.params.title),
        titleStyle: styles.navBarTitle,
        style: styles.navBar
      })
    }
  }
},{
  headerMode: 'float'
});

export const MyClassesPageNavigator = StackNavigator({
  MyClassesPage: {
    screen: MyClassesPage,
    navigationOptions: {
      header: ({state}) => ({
        title:'我的課程',
        titleStyle: styles.navBarTitle,
        right: (
          <SearchBarButton onPress={()=>{this.searchBar.searchGames()}}/>
        ),
        style: styles.navBar
      })
    }
  },
  ClassDetailPage: {
    screen: ClassDetailPage,
    navigationOptions: {
      header: ({state}) => ({
        left: (
          <NavBarBackButton />
        ),
        right: (
          <NavBarLikeButton />
        ),
        title: (state.params.title),
        titleStyle: styles.navBarTitle,
        style: styles.navBar
      })
    }
  }
},{
  headerMode: 'float'
});

export const MyPersonalPageNavigator = StackNavigator({
  MyPersonalPage: {
    screen: MyPersonalPage,
    navigationOptions: {
      header: ({state}) => ({
        title:'自己',
        titleStyle: styles.navBarTitle,
        right: (
          <SearchBarButton onPress={()=>{this.searchBar.searchGames()}}/>
        ),
        style: styles.navBar
      })
    }
  },
  ClassDetailPage: {
    screen: ClassDetailPage,
    navigationOptions: {
      header: ({state}) => ({
        left: (
          <NavBarBackButton />
        ),
        right: (
          <NavBarLikeButton />
        ),
        title: (state.params.title),
        titleStyle: styles.navBarTitle,
        style: styles.navBar
      })
    }
  }
},{
  headerMode: 'float'
});

const styles = {
  navBar:{
    backgroundColor: 'rgb(90, 187, 214)',
    height:64,
  },
  navBarTitle: {
    color: 'rgb(255,255,255)'
  }
};
