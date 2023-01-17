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

const IconButton = ({img, btnText, navigation, onPressbtn}) => {
  return (
    <TouchableOpacity style={styles.mainbtnContainer} onPress={onPressbtn}>
      <View style={styles.bodybtnContainer}>
        <Image source={img} style={styles.btnimg} />

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
    padding: 10,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginVertical: 10,
  },
  bodybtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
});
