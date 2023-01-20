import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from 'react-native';

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {ImageBackground} from 'react-native';

const CustomSidebarMenu = props => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ImageBackground
        source={require('./../assets/Group_23.png')}
        style={styles.sidebarTop}>
        <View
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            backgroundColor: '#000',
            opacity: 0.8,
          }}></View>

        <View style={styles.profileBox}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('./../assets/profile.jpg')}
              style={styles.profileimg}
            />
            <View style={styles.profileTextBox}>
              <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>
                Hammad Mirza
              </Text>
              <Text style={{color: '#fff', fontSize: 14}}>Owner </Text>
            </View>
          </View>
        </View>
      </ImageBackground>

      <DrawerContentScrollView {...props} style={{backgroundColor: '#fff'}}>
        <DrawerItemList {...props} />

        {/* <View style={styles.customItem}>
          <Text
            onPress={() => {
              Linking.openURL('https://aboutreact.com/');
            }}>
            Rate Us
          </Text>
        </View> */}
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sidebarTop: {
    height: 200,
    width: '100%',
    justifyContent: 'center',
  },
  topbgImage: {
    width: '100%',
  },
  profileBox: {
    alignItems: 'center',
  },
  profileimg: {
    width: 80,
    height: 80,
    borderRadius: 80,
  },
  profileTextBox: {
    marginHorizontal: 10,
  },
});

export default CustomSidebarMenu;
