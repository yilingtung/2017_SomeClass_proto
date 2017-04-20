import React from 'react';
import { StackNavigator } from 'react-navigation';
import GamesPage from './components/GamesPage';
import GameDetailPage from './components/GameDetailPage';
import CategoryPage from './components/CategoryPage';
import SearchBar, { SearchBarButton } from './components/searchBar';
//最上面導覽列的特殊元件
import { NavBarBackButton, NavBarLikeButton } from './components/navBarButton';

export const stackNavigator = StackNavigator({
  GamesPage: {
    screen: GamesPage,
    navigationOptions: {
      header: ({state}) => ({
        title: (
          <SearchBar ref={(input)=>{this.searchBar = input}}/>
        ),
        right: (
          <SearchBarButton onPress={()=>{this.searchBar.searchGames()}}/>
        ),
        style: styles.navBar
      })
    }
  },
  GameDetailPage: {
    screen: GameDetailPage,
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

export const categoryStackNavigator = StackNavigator({
  CategoryPage: {
    screen: CategoryPage,
    navigationOptions: {
      header: ({state})=>({
        right: (
          <SearchBarButton />
        ),
        title: '分類',
        titleStyle: styles.navBarTitle,
        style: styles.navBar
      })
    }
  }
},{

});

const styles = {
  navBar:{
    backgroundColor: 'rgb(100,65,165)',
    height:64
  },
  navBarTitle: {
    color: 'rgb(255,255,255)'
  }
};
