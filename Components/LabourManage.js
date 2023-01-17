import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

const LabourManage = () => {
  return (
    <View style={styles.mainContainer}>
      <Image source={require('./assets/myLandBg.png')} />
      <Text>LabourManage</Text>
    </View>
  );
};

export default LabourManage;

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
});
