import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

import Nav from './src/Nav/navigation'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (    
      //View is like div with the role of container
      <View style={styles.container}>
        <Nav/>
      </View>
    );
  }
}

//Stylesheet object to import CSS
//flex is similar to flexbox in CSS

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    //flex-start= right //flex-end-left
    backgroundColor: '#F5FCFF',
  }
});
