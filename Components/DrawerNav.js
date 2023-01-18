import {StyleSheet, Image, View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

import Signin from './Signin';
import Attendance from './Attendance';
import SellGood from './SellGood';
import Expenses from './Expenses';
import PaymentClearence from './PaymentClearence';
import AddLabour from './AddLabour';
import AddCrop from './AddCrop';
import Profile from './Profile';
import MainHome from './MainHome';
import CustomSidebarMenu from './Global/CustomSidebarMenu';

const DrawerNav = () => {
  return (
    <View style={{flex: 1}}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={props => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="Home"
          component={MainHome}
          options={{
            headerShown: false,
            drawerActiveTintColor: '#14A800',
            drawerIcon: ({focused}) => (
              <Image
                source={require('./assets/home.png')}
                tintColor={focused ? '#14A800' : '#000'}
                style={styles.ICondrawer}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            drawerActiveTintColor: '#14A800',
            drawerIcon: ({focused}) => (
              <Image
                source={require('./assets/Rectangle_27.png')}
                tintColor={focused ? '#14A800' : '#000'}
                style={styles.ICondrawer}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Attendance"
          component={Attendance}
          options={{
            headerShown: false,
            drawerActiveTintColor: '#14A800',
            drawerIcon: ({focused}) => (
              <Image
                source={require('./assets/attendance.png')}
                tintColor={focused ? '#14A800' : '#000'}
                style={styles.ICondrawer}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Sell Good"
          component={SellGood}
          options={{
            headerShown: false,
            drawerActiveTintColor: '#14A800',
            drawerIcon: ({focused}) => (
              <Image
                source={require('./assets/trade.png')}
                tintColor={focused ? '#14A800' : '#000'}
                style={styles.ICondrawer}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Expenses"
          component={Expenses}
          options={{
            headerShown: false,
            drawerActiveTintColor: '#14A800',
            drawerIcon: ({focused}) => (
              <Image
                source={require('./assets/credit-card.png')}
                tintColor={focused ? '#14A800' : '#000'}
                style={styles.ICondrawer}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Payment Clearence"
          component={PaymentClearence}
          options={{
            headerShown: false,
            drawerActiveTintColor: '#14A800',
            drawerIcon: ({focused}) => (
              <Image
                source={require('./assets/credit-cards.png')}
                tintColor={focused ? '#14A800' : '#000'}
                style={styles.ICondrawer}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Add Labour"
          component={AddLabour}
          options={{
            headerShown: false,
            drawerActiveTintColor: '#14A800',
            drawerIcon: ({focused}) => (
              <Image
                source={require('./assets/add-user.png')}
                tintColor={focused ? '#14A800' : '#000'}
                style={styles.ICondrawer}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Add Crop"
          component={AddCrop}
          options={{
            headerShown: false,
            drawerActiveTintColor: '#14A800',
            drawerIcon: ({focused}) => (
              <Image
                source={require('./assets/add-to-basket.png')}
                tintColor={focused ? '#14A800' : '#000'}
                style={styles.ICondrawer}
              />
            ),
          }}
        />

        <Drawer.Screen
          name="Add Land"
          component={AddLabour}
          options={{
            headerShown: false,
            drawerActiveTintColor: '#14A800',
            drawerIcon: ({focused}) => (
              <Image
                source={require('./assets/add.png')}
                tintColor={focused ? '#14A800' : '#000'}
                style={styles.ICondrawer}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="Signin"
          component={Signin}
          options={{
            headerShown: false,
            drawerActiveTintColor: '#14A800',
            drawerIcon: ({focused}) => (
              <Image
                source={require('./assets/sign-in.png')}
                tintColor={focused ? '#14A800' : '#000'}
                style={styles.ICondrawer}
              />
            ),
          }}
        />
        {/* <Drawer.Screen
        name="DrawerNavScreen"
        component={DrawerNav}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      /> */}
      </Drawer.Navigator>
    </View>
  );
};

export default DrawerNav;

const styles = StyleSheet.create({
  ICondrawer: {
    height: 25,
    width: 25,
  },
});
