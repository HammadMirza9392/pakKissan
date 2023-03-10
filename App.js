import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ImageBackground,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator, DrawerItem} from '@react-navigation/drawer';

import MyLand from './Components/MyLand';
import LabourManage from './Components/LabourManage';
import Splash from './Components/Splash';
import LandItem from './Components/Global/LandItem';
import Profile from './Components/Profile';
import Attendance from './Components/Attendance';
import SellGood from './Components/SellGood';
import IconButton from './Components/Global/IconButton';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Expenses from './Components/Expenses';
import PaymentClearence from './Components/PaymentClearence';
import AddLabour from './Components/AddLabour';
import Signup2 from './Components/Signup2';
import Signin2 from './Components/Signin2';
import AddCrop from './Components/AddCrop';
import MainHome from './Components/MainHome';
import AddLand from './Components/AddLand';
import DrawerNav from './Components/DrawerNav';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SigninScreen"
          component={Signin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignupScreen"
          component={Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup2Screen"
          component={Signup2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin2Screen"
          component={Signin2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DrawerNavScreen"
          component={DrawerNav}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Expenses"
          component={Expenses}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={MainHome}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="Profile"
          component={Profile}
          options={{headerShown: false}}
        />
         <Stack.Screen
          name="AttendanceScreen"
          component={Attendance}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SellGoodScreen"
          component={SellGood}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="IconButtonScreen"
          component={IconButton}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ExpensesScreen"
          component={Expenses}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="PaymentClearenceScreen"
          component={PaymentClearence}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddLabourScreen"
          component={AddLabour}
          options={{headerShown: false}}
        />
       
        <Stack.Screen
          name="AddCropScreen"
          component={AddCrop}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainHomeScreen"
          component={MainHome}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddLandScreen"
          component={AddLand}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
const styles = StyleSheet.create({});
