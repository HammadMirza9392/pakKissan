import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Components/Home';
import Attendance from './Components/Attendance';
import SellGood from './Components/SellGood';
import IconButton from './Components/Global/IconButton';
import Splash from './Components/Splash';
import Signup from './Components/Signup';
import Signin from './Components/Signin';
import Expenses from './Components/Expenses';
import PaymentClearence from './Components/PaymentClearence';
import AddLabour from './Components/AddLabour';
import Signup2 from './Components/Signup2';
import test from './Components/Test';
import Signin2 from './Components/Signin2';

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
          name="HomeScreen"
          component={Home}
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
          name="Signup2Screen"
          component={Signup2}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signin2Screen"
          component={Signin2}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="testScreen"
          component={test}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
