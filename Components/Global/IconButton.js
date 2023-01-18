import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');

const IconButton = ({img, btnText, onPressbtn}) => {
  return (
    <TouchableOpacity style={styles.mainbtnContainer} onPress={onPressbtn}>
      <View style={styles.bodybtnContainer}>
        <View style={styles.btnImgContainer}>
          <Image source={img} style={styles.btnimg} />
        </View>
        <View>
          <Text style={styles.btnText}>{btnText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  mainbtnContainer: {
    width: width - 50,
    backgroundColor: '#14A800',
    padding: 20,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginVertical: 10,
  },
  bodybtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnImgContainer: {
    position: 'absolute',
    left: 0,
  },
  btnimg: {
    color: '#fff',
    width: 40,
    height: 40,
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '500',
    textAlign: 'center',
  },
});
