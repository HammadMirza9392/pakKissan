import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  TextInput,
  View,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Header from './Global/Header';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const {height, width} = Dimensions.get('window');

const PaymentClearence = ({navigation}) => {
  const [selectedStartDate, setStartSelectedDate] = useState(new Date());
  const [selectedEndDate, setEndSelectedDate] = useState(new Date());
  const [startDatePickerVisible, setStartDatePickerVisible] = useState(false);
  const [endDatePickerVisible, setEndDatePickerVisible] = useState(false);

  const showStartDatePicker = () => {
    setStartDatePickerVisible(true);
  };
  const showEndDatePicker = () => {
    setEndDatePickerVisible(true);
  };

  const hideStartDatePicker = () => {
    setStartDatePickerVisible(false);
  };
  const hideEndDatePicker = () => {
    setEndDatePickerVisible(false);
  };

  const startDatePicker = date => {
    setStartSelectedDate(date);
    hideStartDatePicker();
  };

  const endDatePicker = date => {
    setEndSelectedDate(date);
    hideEndDatePicker();
  };

  return (
    <ScrollView style={styles.mainContainer}>
      <Header heading="Payment Clearence" />

      <View style={styles.bodyContainer}>
        <View style={{marginTop: 30}}>
          <Text style={styles.label}>Labour Name</Text>
          <View style={styles.inptbox}>
            <Image
              source={require('./assets/Rectangle_156.png')}
              style={styles.inptimg}
            />
            <TextInput
              placeholderTextColor={'#848e90'}
              placeholder="Write Name of Labour..."
              style={styles.input}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: width - 50,
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          <View>
            <Text style={[styles.label, {marginBottom: 10}]}>Start Date</Text>
            <TouchableOpacity
              style={styles.selectDate}
              onPress={showStartDatePicker}>
              <Image
                source={require('./assets/Rectangle_27.png')}
                style={styles.calanderIcon}
              />
              <Text style={styles.dateText}>
                {selectedStartDate
                  ? selectedStartDate.toLocaleDateString()
                  : 'No date selected'}
              </Text>
            </TouchableOpacity>

            <DateTimePickerModal
              date={selectedStartDate}
              isVisible={startDatePickerVisible}
              mode="date"
              onConfirm={startDatePicker}
              onCancel={hideStartDatePicker}
            />
          </View>

          <View>
            <Text style={[styles.label, {marginBottom: 10}]}>Ending Date</Text>
            <TouchableOpacity
              style={styles.selectDate}
              onPress={showEndDatePicker}>
              <Image
                source={require('./assets/Rectangle_27.png')}
                style={styles.calanderIcon}
              />
              <Text style={styles.dateText}>
                {selectedEndDate
                  ? selectedEndDate.toLocaleDateString()
                  : 'No date selected'}
              </Text>
            </TouchableOpacity>

            <DateTimePickerModal
              date={selectedEndDate}
              isVisible={endDatePickerVisible}
              mode="date"
              onConfirm={endDatePicker}
              onCancel={hideEndDatePicker}
            />
          </View>
        </View>

        <View style={{marginTop: 20}}>
          <Text style={styles.label}>Already Paid</Text>
          <View style={styles.inptbox}>
            <Image
              source={require('./assets/Group_2.png')}
              style={styles.inptimg}
            />
            <TextInput
              placeholderTextColor={'#848e90'}
              placeholder="Enter Paid Amount Here..."
              style={styles.input}
            />
          </View>
        </View>

        <TouchableOpacity
          style={styles.globalbtn}
          onPress={() => navigation.navigate('Expenses')}>
          <Text style={styles.globalbtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PaymentClearence;

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
  selectDate: {
    borderColor: '#14A800',
    alignItems: 'center',
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    flexDirection: 'row',
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
});
