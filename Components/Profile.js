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

const Profile = ({navigation}) => {
  const navtab = screen => {
    if (screen === 'Sell Good') {
      navigation.navigate('Sell Good');
    } else if (screen === 'Attendance') {
      navigation.navigate('Attendance');
    } else {
      navigation.navigate('Expenses');
    }
  };
  return (
    <View style={styles.mainContainer}>
      <Header heading="Mehra" />
      <View style={styles.bodyContainer}>
        <IconButton
          img={btn1}
          btnText="Add Expenses"
          onPressbtn={() => navtab('Expenses')}
        />
        <IconButton
          img={btn2}
          btnText="Sell Goods"
          onPressbtn={() => navtab('Sell Good')}
        />
        <IconButton
          img={btn3}
          btnText="Attendance"
          onPressbtn={() => navtab('Attendance')}
        />
      </View>
    </View>
  );
};

export default Profile;

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
