import {StyleSheet, Image, Text, View} from 'react-native';
import React from 'react';
import {ImageBackground} from 'react-native';

const LandItem = ({title, navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('./../assets/myLandBg.png')}
        style={styles.bgImag}
      />
      <View style={styles.innerBox}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default LandItem;

const styles = StyleSheet.create({
  // mainContainer: {borderRadius: 20, backgroundColor: 'red'},
  bgImag: {
    borderRadius: 20,
    height: 150,
    width: 150,
    position: 'absolute',
  },
  innerBox: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 150,
    width: 150,
  },
  text: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff',
  },
});
