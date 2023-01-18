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
import ActiveLabour from './Global/ActiveLabour';
import dropdownIcon from './assets/Rectangle_156.png';

const Attendance = ({navigation}) => {
  const [selected, setSelected] = useState('');

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
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
        <View>
          <Text style={styles.label}>Labour Name</Text>
          <View style={styles.dropdownbox}>
            <Image source={dropdownIcon} style={styles.dropdownImg} />
            <SelectList
              setSelected={val => setSelected(val)}
              data={labourName}
              save="value"
              boxStyles={{
                borderWidth: 0,
                width: 300,
                marginLeft: 20,
              }}
              inputStyles={styles.dropdowninpt}
              dropdownStyles={{borderWidth: 0}}
              dropdownTextStyles={styles.dropdowninptdrop}
              placeholder="select labour"
              maxHeight={150}
            />
          </View>
        </View>
        <View style={{width: width - 50, marginTop: 20, marginBottom: 50}}>
          <TouchableOpacity style={styles.selectDate} onPress={showDatePicker}>
            <Image
              source={require('./assets/Rectangle_27.png')}
              style={styles.calanderIcon}
            />
            <Text style={styles.dateText}>
              {selectedDate
                ? selectedDate.toLocaleDateString()
                : 'No date selected'}
            </Text>
          </TouchableOpacity>

          <DateTimePickerModal
            date={selectedDate}
            isVisible={datePickerVisible}
            mode="date"
            onConfirm={handleConfirm}
            onCancel={hideDatePicker}
          />
        </View>
        <TouchableOpacity
          style={styles.globalbtn}
          onPress={() => navigation.navigate('Payment Clearence')}>
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
  dropdownbox: {
    borderColor: '#14A800',
    borderWidth: 1,
    borderRadius: 40,
    flexDirection: 'row',
    paddingLeft: 20,
    padding: 5,
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
  label: {
    color: '#484848',
    marginLeft: 15,
    marginVertical: 8,
  },
  selectDate: {
    borderColor: '#14A800',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    flexDirection: 'row',
    position: 'absolute',
    left: 0,
  },
  calanderIcon: {
    height: 30,
    width: 30,
  },
  dateText: {
    fontSize: 16,
    color: '#000',
    marginHorizontal: 10,
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
