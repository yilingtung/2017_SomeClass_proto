import React from 'react';
import { StackNavigator } from 'react-navigation';
//首頁
import BrowsePage from './components/BrowsePage';
import ClassDetailPage from './components/ClassDetailPage';
//分類
import CategoryPage from './components/CategoryPage';
import { SearchBar, SearchBarButton } from './components/searchBar';
//搜尋
import SearchPage from './components/SearchPage';
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
          <SearchBarButton />
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
  },
  SearchPage: {
    screen: SearchPage,
    navigationOptions: {
      header: ({state}) => ({
        left: (
          null
        ),
        title: (
          <SearchBar ref={(searchBar)=>(state.searchBar = searchBar)}/>
        ),
        right: (
          <NavBarBackButton showingText="取消" />
        ),
        titleStyle: styles.navBarTitle,
        style: styles.navBar
      })
    }
  }
},{
  headerMode: 'float'
});

export const CategoryPageNavigator = StackNavigator({
  CategoryPage: {
    screen: CategoryPage,
    navigationOptions: {
      header: ({state})=>({
        left: state.params==undefined?null:<NavBarBackButton />,
        right: <SearchBarButton onPress={()=>{this.searchBar.searchGames()}}/>,
        title: state.params==undefined?'分類':state.params.mainCat,
        titleStyle: styles.navBarTitle,
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
