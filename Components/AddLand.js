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
import React, {useState} from 'react';
import Header from './Global/Header';
const {height, width} = Dimensions.get('window');
import {SelectList} from 'react-native-dropdown-select-list';
import RadioButtonRN from 'radio-buttons-react-native';
import dropdownIcon from './assets/Group_10.png';

const AddLand = ({navigation}) => {
  const [selected, setSelected] = useState('');

  const laboutType = [
    {key: 1, value: 'M.Jameel'},
    {key: 2, value: 'Rizwan Ali'},
    {key: 3, value: 'M.Jameel'},
    {key: 4, value: 'Rizwan Ali'},
    {key: 5, value: 'Demo '},
    {key: 6, value: 'Demo 1'},
    {key: 7, value: 'Demo 2'},
    {key: 8, value: 'Demo 3'},
  ];
  const wageType = [
    {
      label: 'Owner’s Land',
    },
    {
      label: 'Rental Land',
    },
  ];
  return (
    <ScrollView style={styles.mainContainer}>
      <Header heading="Add Land" />

      <View style={styles.bodyContainer}>
        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Choose Type</Text>
          <View style={styles.radioBox}>
            <RadioButtonRN
              data={wageType}
              selectedBtn={e => console.log(e)}
              boxStyle={{
                borderColor: '#14A800',
                borderRadius: 30,
              }}
              activeColor="#14A800"
            />
          </View>
        </View>

        <View style={{marginTop: 30}}>
          <Text style={styles.label}>Land Name</Text>
          <View style={styles.inptbox}>
            <Image
              source={require('./assets/Group_10.png')}
              style={styles.inptimg}
            />
            <TextInput
              placeholderTextColor={'#848e90'}
              placeholder="Enter Land Name ..."
              style={styles.input}
            />
          </View>
        </View>

        <View style={{marginTop: 10}}>
          <View style={styles.inptbox}>
            <Image
              source={require('./assets/Group_16.png')}
              style={styles.inptimg}
            />
            <TextInput
              placeholderTextColor={'#848e90'}
              placeholder="Enter Aera of Land ..."
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

export default AddLand;

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
    marginLeft: 10,
    alignSelf: 'center',
  },
  input: {
    color: '#000',
    width: '90%',
    paddingHorizontal: 10,
    alignSelf: 'center',
  },

  label: {
    color: '#484848',
    marginLeft: 25,
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
  dropdownbox: {
    borderColor: '#14A800',
    borderWidth: 1,
    borderRadius: 40,
    flexDirection: 'row',
    paddingLeft: 20,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownImg: {
    width: 25,
    height: 25,
    position: 'absolute',
    top: 12,
    left: 20,
  },
  dropdowninpt: {
    color: '#14A800',
    borderColor: '#14A800',
  },
  dropdowninptdrop: {
    color: '#14A800',
    width: 260,
  },
  radioBox: {
    width: width - 50,
    marginVertical: 10,
  },
  radioinpt: {
    borderColor: '#14A800',
  },
});
