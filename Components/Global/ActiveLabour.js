import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');

const ActiveLabour = ({btnText}) => {
  return (
    <TouchableOpacity style={styles.mainbtnContainer}>
      <View style={styles.bodybtnContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={require('./../assets/Rectangle_34.png')}
            style={styles.btnimg}
          />
        </View>

        <View>
          <Text style={styles.btnText}>{btnText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ActiveLabour;

const styles = StyleSheet.create({
  mainbtnContainer: {
    width: width - 50,
    backgroundColor: '#14A800',
    padding: 10,
    paddingHorizontal: 30,
    paddingVertical: 20,
    borderRadius: 50,
    marginVertical: 5,
  },
  bodybtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    // width: '20%',
    position: 'absolute',
    left: 0,
  },
  btnimg: {
    color: '#fff',
    width: 35,
    height: 35,
  },
  btnText: {
    fontSize: 20,
    color: '#fff',
    textAlign: 'center',
  },
});
