import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React, {useEffect} from 'react';
const {height, width} = Dimensions.get('window');

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('AttendanceScreen');
    }, 3000);
  }, []);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.thumbContainer}>
        <Image
          source={require('./assets/splashScreen.png')}
          style={styles.thumbnail}
        />
      </View>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  splashImg: {
    resizeMode: 'cover',
    width: width * 0.5,
    height: '100%',
  },
  thumbContainer: {
    width: '100%',
    height: '100%',
  },
  thumbnail: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'cover',
  },
});
