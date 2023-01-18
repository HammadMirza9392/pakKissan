import {
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  Dimensions,
} from 'react-native';
import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import LandItem from './SellGood';
import MyLand from './MyLand';

const Tab = createMaterialTopTabNavigator();

const {height, width} = Dimensions.get('window');

const MainHome = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <View>
        <Image
          source={require('./assets/bg.png')}
          style={{
            position: 'absolute',
            width: '100%',
            height: '100%',
            resizeMode: 'stretch',
            bottom: 0,
            backgroundColor: '#fff',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
          }}>
          <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}>
            <Image
              source={require('./assets/Group_41.png')}
              style={styles.topIcons}
            />
          </TouchableOpacity>

          <View style={{flexDirection: 'row'}}>
            <Image
              source={require('./assets/Group_42.png')}
              style={styles.topIcons}
            />
            <Text
              style={styles.topText}
              onPress={() => navigation.navigate('Add Land')}>
              Add Land
            </Text>
          </View>
        </View>

        <Image source={require('./assets/lightLogo.png')} style={styles.logo} />
      </View>
      <Tab.Navigator
        screenOptions={{
          //  tabBarLabelStyle: {fontSize: 12},
          tabBarItemStyle: {borderBottomColor: '#000'},
          //tabBarStyle: {backgroundColor: 'powderblue'},
        }}>
        <Tab.Screen name="My Land" component={MyLand} />
        <Tab.Screen name="Labour Managment" component={LandItem} />
      </Tab.Navigator>
    </View>
  );
};

export default MainHome;

const styles = StyleSheet.create({
  logo: {
    width: width - 200,
    height: 100,
    marginBottom: 40,
    resizeMode: 'stretch',
    marginLeft: '15%',
  },
  topIcons: {
    height: 20,
    width: 20,
  },
  topText: {
    fontSize: 15,
    color: '#fff',
    marginLeft: 5,
  },
});
