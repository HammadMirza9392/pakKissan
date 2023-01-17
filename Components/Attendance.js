import {
  StyleSheet,
  Text,
  Button,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Header from './Global/Header';
import {SelectList} from 'react-native-dropdown-select-list';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const {height, width} = Dimensions.get('window');
import IconButton from './Global/IconButton';
import ActiveLabour from './Global/ActiveLabour';
import {icon1} from './assets/Group_2.png';

const Attendance = ({navigation}) => {
  const [selected, setSelected] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setDate] = useState('');

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  let handleConfirm = date => {
    setDate(date);
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  const labourName = [
    {key: 1, value: 'M.Jameel'},
    {key: 2, value: 'Rizwan Ali'},
    {key: 3, value: 'M.Jameel'},
    {key: 4, value: 'Rizwan Ali'},
    {key: 5, value: 'Demo '},
    {key: 6, value: 'Demo 1'},
    {key: 7, value: 'Demo 2'},
    {key: 8, value: 'Demo 3'},
  ];
  return (
    <ScrollView style={styles.mainContainer}>
      <Header heading="Labour Attendance" />
      <View style={styles.bodyContainer}>
        <View style={styles.dropdownStyle}>
          <Text style={styles.label}>Labour Name</Text>
          <SelectList
            setSelected={val => setSelected(val)}
            data={labourName}
            save="value"
            boxStyles={{borderColor: '#14A800', borderRadius: 40}}
            inputStyles={styles.dropdowninpt}
            dropdownStyles={{borderColor: '#14A800'}}
            dropdownTextStyles={styles.dropdowninptdrop}
            placeholder="select labour"
            maxHeight={150}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.selectDate}>
            <Image />
            <Text>
              {selectedDate === '' ? (
                <Text style={{color: '#000'}}>Select Date Time</Text>
              ) : (
                {selectedDate}
              )}
            </Text>
          </TouchableOpacity>
          <Button title="Show Date Picker" onPress={showDatePicker} />
          <DateTimePickerModal
            isVisible={isDatePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <TouchableOpacity style={styles.globalbtn}>
          <Text style={styles.globalbtnText}>Submit</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.activelabourLabel}>Active Labour</Text>
          <ActiveLabour btnText="M.Jameel" />
          <ActiveLabour btnText="Rizwan Ali" />
          <ActiveLabour btnText="M.Jameel" />
          <ActiveLabour btnText="Rizwan Ali" />
        </View>
      </View>
    </ScrollView>
  );
};

export default Attendance;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    flex: 1,
    alignItems: 'center',
    marginVertical: 40,
  },
  dropdownStyle: {
    width: width - 50,
  },
  label: {
    color: '#484848',
    marginLeft: 15,
    marginVertical: 8,
  },
  dropdowninpt: {
    color: '#14A800',
    borderColor: '#14A800',
  },
  dropdowninptdrop: {
    color: '#14A800',
  },
  selectDate: {
    borderColor: '#14A800',
  },
  globalbtn: {
    backgroundColor: '#14A800',
    width: width - 50,
    padding: 15,
    borderRadius: 40,
    marginVertical: 20,
  },
  globalbtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  activelabourLabel: {
    color: '#484848',
    marginLeft: 15,
    marginVertical: 8,
  },
});