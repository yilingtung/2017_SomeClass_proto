import React, { Component } from 'react';
import { Alert, View, Text, TextInput, ScrollView, Image, TouchableOpacity } from 'react-native';
import ScrollableTabView, { ScrollableTabBar, } from 'react-native-scrollable-tab-view';
import Line from './line';
import Style from './style.js';

class OpenClassPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      classTitle: '',
      total_chapters: 0,
      chapterList: [],
      chapterTitle: ''
    };
    this.submitClass = this.submitClass.bind(this);
    this.addChapter = this.addChapter.bind(this);
  }
  componentDidMount(){

  }
  submitClass(){
    Alert.alert(
      '發布課程',
      '您的課程 : ' + this.state.classTitle + '\n' +
      '章節數量 : ' + this.state.total_chapters,
      [
        {text: '發布', onPress: () => console.log('OK Pressed!')},
        {text: '取消', onPress: () => console.log('Cancel Pressed!')}
      ]
    );
  }
  addChapter(){
    this.state.chapterList.push({
      no: this.state.chapterList.length,
      title: this.state.chapterTitle
    });
    this.setState({
      chapterList: this.state.chapterList,
      chapterTitle: ''
    });
  }
  render(){
    return(
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={styles.container}
      >
        <View style={{backgroundColor:'#fff'}}>
          <View>
            <Image style={styles.cardImg} source={require("./../img/class_gallery.png")} />
            <View style={styles.imgMask}>
              <Text style={styles.imgMaskText}>新增封面照片</Text>
            </View>
          </View>
          <View style={styles.infoView}>
            <Text style={styles.descriptions}>課程名稱(*)</Text>
            <View style={styles.descriptionsInputWapper}>
              <TextInput onChangeText={(title) => this.setState({classTitle:title})} placeholder={'課程名稱'} style={styles.titleInput}/>
            </View>
            <TouchableOpacity onPress={this.submitClass}>
              <View style={styles.submitButton}>
                <Text style={styles.submitBtnText}>發布課程</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <ScrollableTabView
            contentProps={{keyboardShouldPersistTaps:"always"}}
            tabBarUnderlineStyle={{backgroundColor:'rgb(90, 187, 214)'}}
            tabBarBackgroundColor={'rgb(255, 255, 255)'}
            tabBarActiveTextColor={'rgb(90, 187, 214)'}
            tabBarInactiveTextColor={'rgb(197, 198, 200)'}
            tabBarTextStyle={{fontWeight:'bold'}}
            style={styles.subContainer}
          >
            <View
              tabLabel="說明"
              style={{paddingVertical: 8}}
            >
              <View style={[styles.subTabViewWrapper,{paddingHorizontal: 20}]}>
                <Text style={styles.descriptions}>課程說明(*)</Text>
                <View style={styles.descriptionsInputWapper}>
                  <TextInput placeholder={'我的熊課是...'} multiline style={styles.descriptionsInput}/>
                </View>
              </View>
            </View>
            <View
              tabLabel="大綱"
              style={{paddingVertical: 8}}
            >
              <View style={[styles.subTabViewWrapper,{}]}>
                <View style={{alignItems:'center',marginBottom:10}}>
                  <Text style={styles.descriptions}>{this.state.total_chapters}個講座</Text>
                  <Text style={[styles.descriptions,{fontSize:12,color:'#B5B5B5'}]}>新增講座</Text>
                </View>
                <View style={{}}>
                  {
                    this.state.chapterList.map((chapter)=>{
                      return(
                      <View key={chapter.no}>
                        <View style={styles.chapterNameView}>
                          <View style={styles.horizontalWapper}>
                            <Text style={styles.chapterName} numberOfLines={1}>{ (chapter.no + 1) + " .  " + chapter.title}</Text>
                          </View>
                        </View>
                        <View>
                          <View style={styles.courseNameView}>
                            <View style={styles.horizontalWapper}>
                              <View style={[styles.descriptionsInputWapper, {flex: 1, marginTop: 10, marginBottom: 10, marginRight: 15, marginLeft: 10}]}>
                                <TextInput value={this.state.courseTitle} onChangeText={(title) => this.setState({courseTitle:title})} style={styles.courseNameInput}  placeholder='新增步驟' />
                              </View>
                              <TouchableOpacity onPress={()=>{null}}>
                                <Image style={{width: 25, height: 25}} source={require("./../img/btnAdd.png")} />
                              </TouchableOpacity>
                            </View>
                            <Line />
                          </View>
                        </View>
                      </View>
                      )
                    })
                  }
                  <View style={styles.chapterNameView}>
                    <View style={styles.horizontalWapper}>
                      <View style={[styles.descriptionsInputWapper, {flex: 1, marginTop: 8, marginBottom: 8, marginRight: 15}]}>
                        <TextInput value={this.state.chapterTitle} onChangeText={(title) => this.setState({chapterTitle:title})} style={styles.chapterNameInput}  placeholder='新增章節' />
                      </View>
                      <TouchableOpacity onPress={()=>{console.log('press');this.addChapter()}}>
                        <Image style={{width: 25, height: 25}} source={require("./../img/btnAdd.png")} />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </ScrollableTabView>
        </View>
      </ScrollView>
    )
  }
}

const styles = {
  container: {
    backgroundColor: '#F1F4F6',
  },
  subContainer: {
    backgroundColor: '#F1F4F6',
    paddingVertical: 5,
  },
  titleInput: {
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: 'bold',
    lineHeight: 24,
    color: 'rgba(0,0,0,0.7)',
    flex: 1,
    height: 30
  },
  cardImg: {
    width: Style.DEVICE_WIDTH,
    height: 200,
  },
  infoView: {
    marginHorizontal: 12,
    marginVertical: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.7)',
  },
  submitButton: {
    backgroundColor: 'rgb(232,167,64)',
    height: 34,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    marginVertical: 5,
  },
  submitBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  subTabViewWrapper: {
    paddingTop: 20,
    paddingBottom: 40,
    backgroundColor: '#fff',
  },
  descriptionsInputWapper: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.1)',
    borderRadius: 5,
    backgroundColor: 'rgba(255,255,255,0.3)',
    paddingLeft: 5
  },
  descriptions: {
    fontSize: 15,
    letterSpacing: 1,
    lineHeight: 24,
    paddingLeft: 2,
    color: 'rgba(0,0,0,0.7)'
  },
  descriptionsInput: {
    fontSize: 15,
    letterSpacing: 1,
    lineHeight: 24,
    color: 'rgba(0,0,0,0.7)',
    flex: 1,
    height: 100
  },
  chapterNameView: {
    height: 48,
    paddingHorizontal: 20,
    justifyContent: 'center',
    backgroundColor: '#F1F4F6',
  },
  courseNameView: {
    height: 48,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  chapterName: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.7)',
    lineHeight: 24,
  },
  chapterNameInput: {
    fontWeight: 'bold',
    color: 'rgba(0,0,0,0.7)',
    lineHeight: 24,
    flex: 1,
    height: 30
  },
  courseName: {
    color: 'rgba(0,0,0,0.7)',
  },
  courseNameInput: {
    lineHeight: 18,
    height: 24,
    flex: 1
  },
  horizontalWapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1
  },
  warning_icon: {
    width: 20,
    marginRight: 10
  },
  imgMask: {
    position: 'absolute',
    alignItems: 'center',
    top: 12,
    left: 12,
    bottom: 12,
    right: 12,
    borderWidth: 12,
    borderColor: 'rgba(255,255,255,.6)',
    borderRadius: 5,
  },
  imgMaskText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'rgb(90, 187, 214)',
    marginTop:15,
    padding:10,
  },
}

export default OpenClassPage;
