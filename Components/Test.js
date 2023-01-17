import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';

const test = () => {
  return (
    <View>
      <View
        style={{
          //make overlay
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          //change this color to the other one which you want
          backgroundColor: '#000000c0',
        }}
      />
      <Image
        source={require('./assets/Group_34.png')}
        style={{
          height: '100%',
          width: '100%',
          resizeMode: 'cover',
        }}
      />
    </View>
  );
};

export default test;

const styles = StyleSheet.create({});
