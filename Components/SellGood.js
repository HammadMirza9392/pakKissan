import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import Header from './Global/Header';
const {height, width} = Dimensions.get('window');

const SellGood = navigation => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Header heading="Sell Goods" />

      <View style={styles.bodyContainer}>
        <View style={{marginTop: 40}}>
          <Text style={styles.label}>Amount</Text>
          <View style={styles.inptbox}>
            <Image
              source={require('./assets/Rectangle_156.png')}
              style={styles.inptimg}
            />
            <TextInput
              placeholderTextColor={'#848e90'}
              placeholder="Enter Amount..."
              style={styles.input}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.globalbtn}>
          <Text style={styles.globalbtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SellGood;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
  },
  inptbox: {
    borderColor: '#14A800',
    borderWidth: 1,
    flexDirection: 'row',
    width: width - 50,
    borderRadius: 50,
    padding: 10,
    paddingVertical: 10,
    height: 60,
    marginVertical: 10,
    alignSelf: 'center',
  },

  inptimg: {
    width: 25,
    height: 25,
    marginHorizontal: 10,
    alignSelf: 'center',
  },
  input: {
    color: '#000',
    width: '80%',
    paddingHorizontal: 20,
    alignSelf: 'center',
  },

  label: {
    color: '#484848',
    marginLeft: 35,
  },
  globalbtn: {
    backgroundColor: '#14A800',
    width: width - 150,
    padding: 15,
    borderRadius: 40,
    marginVertical: 40,
  },
  globalbtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
});
