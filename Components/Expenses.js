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

const Expenses = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <Header heading="Expenses" />

      <View style={styles.bodyContainer}>
        <View style={{marginTop: 30}}>
          <Text style={styles.label}>Active Labour</Text>
          <View style={styles.inptbox}>
            <Image
              source={require('./assets/Rectangle_156.png')}
              style={styles.inptimg}
            />
            <TextInput
              placeholderTextColor={'#848e90'}
              placeholder="Enter your user name"
              style={styles.input}
            />
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={styles.label}>Details</Text>
          <View style={styles.inptmsgbox}>
            <TextInput
              placeholderTextColor={'#848e90'}
              placeholder="Start writing Here ..."
              style={styles.inputmsg}
              multiline={true}
              maxLength={300}
            />
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <Text style={styles.label}>Amount</Text>
          <View style={styles.inptbox}>
            <Image
              source={require('./assets/Rectangle_156.png')}
              style={styles.inptimg}
            />
            <TextInput
              placeholderTextColor={'#848e90'}
              placeholder="Please Enter the amount here"
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

export default Expenses;

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
  inptmsgbox: {
    borderColor: '#14A800',
    borderWidth: 1,
    width: width - 50,
    borderRadius: 25,
    padding: 10,
    paddingVertical: 10,
    height: 60,
    marginVertical: 10,
    alignSelf: 'center',
    height: 150,
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
  inputmsg: {
    color: '#000',
    width: '80%',
    // paddingHorizontal: 20,
    //paddingBottom: 90,
    alignSelf: 'center',
    //height: 120,
    //backgroundColor: 'red',
  },
  label: {
    color: '#484848',
    marginLeft: 35,
  },
  globalbtn: {
    backgroundColor: '#14A800',
    width: width - 50,
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
