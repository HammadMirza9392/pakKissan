import React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

function HomeScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

const Test = () => {
  // var radiogroup_options = [
  //   {id: 0, label: 'Button1'},
  //   {id: 1, label: 'Button2'},
  //   {id: 2, label: 'Button3'},
  //   {id: 3, label: 'Button4'},
  // ];

  return (
    // <View style={{backgroundColor: 'red'}}>
    //   <RadioGroup
    //     horizontal
    //     options={radiogroup_options}
    //     style={{color: 'red'}}
    //   />
    // </View>
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Test;

// const styles = StyleSheet.create({});
