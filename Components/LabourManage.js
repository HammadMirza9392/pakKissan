import {StyleSheet, Text, TouchableOpacity, Image, View} from 'react-native';
import React from 'react';

const LabourManage = () => {
  return (
    <View style={styles.mainContainer}>
      {/* <TouchableOpacity>
        <Image source={require('./assets/myLandBg.png')} />
      </TouchableOpacity> */}

      <Text style={{color: '#000', fontSize: 40}}>LabourManage</Text>
    </View>
  );
};

export default LabourManage;

const styles = StyleSheet.create({
  mainContainer: {flex: 1},
});
