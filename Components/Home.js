import {
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Header from './Global/Header';
import btn1 from './assets/Rectangle_32.png';
import btn2 from './assets/Rectangle_33.png';
import btn3 from './assets/Rectangle_34.png';
import IconButton from './Global/IconButton';

const Home = ({navigation}) => {
  const navtab = screen => {
    if (screen === 'SellGoodScreen') {
      navigation.navigate('SellGoodScreen');
    } else if (screen === 'AttendanceScreen') {
      navigation.navigate('AttendanceScreen');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Header heading="Mehra" />
      <View style={styles.bodyContainer}>
        <IconButton img={btn1} btnText="Add Expenses" />
        <IconButton
          img={btn2}
          btnText="Sell Goods"
          onPressbtn={() => navtab('SellGoodScreen')}
        />
        <IconButton
          img={btn3}
          btnText="Attendance"
          onPressbtn={() => navtab('AttendanceScreen')}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
