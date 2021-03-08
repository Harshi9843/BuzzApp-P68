import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {View, Text, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'
import FaceBookScreen from './screens/FacebookScreen';
import InstaScreen from './screens/InstaScreen';

export default class App extends React.Component{
  render(){
    return(
      <SafeAreaProvider>
        <View>
          <Header 
          backgroundColor = "pink"
          centerComponent = {{text: 'Buzz App', style : {color: 'black', fontSize: 20}}}/> 

        </View>
       
        <AppContainer />
      </SafeAreaProvider>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook:{screen:FaceBookScreen},
  Instagram:{screen:InstaScreen}
});

const AppContainer = createAppContainer(TabNavigator);