import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';
const {height, width} = Dimensions.get('window');

const Signup = ({navigation}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <Image
          source={require('./assets/logo.png')}
          style={{marginVertical: 20}}
        />
        <Text style={styles.mainText}>Sign In</Text>
        <Text style={styles.subText}>Welcome To Pak Kissan</Text>

        <View style={styles.inptbox}>
          <Image
            source={require('./assets/Rectangle_156.png')}
            style={styles.inptimg}
          />
          <TextInput
            placeholderTextColor={'#000'}
            placeholder="Enter your user name"
            style={styles.input}
          />
        </View>

        <View style={styles.inptbox}>
          <Image
            source={require('./assets/Rectangle_158.png')}
            style={styles.inptimg}
          />
          <TextInput
            placeholderTextColor={'#000'}
            placeholder="Enter your Password"
            style={styles.input}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.checkboxContainer}>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={newValue => setToggleCheckBox(newValue)}
            style={{color: 'red'}}
          />

          <Text>Forget Password</Text>
        </View>

        <TouchableOpacity style={styles.globalbtn}>
          <Text style={styles.globalbtnText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bottomText}>
          <Text style={styles.normalText}>Create a new Account ?</Text>
          <Text
            style={styles.navText}
            onPress={() => navigation.navigate('Signup2Screen')}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signup;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    flex: 1,
  },
  mainText: {
    color: '#14A800',
    fontSize: 40,
    alignSelf: 'center',
  },
  subText: {
    color: '#484848',
    fontSize: 20,
    marginBottom: 40,
    alignSelf: 'center',
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
  globalbtn: {
    backgroundColor: '#14A800',
    width: width - 50,
    padding: 15,
    borderRadius: 40,
    marginVertical: 20,
    alignSelf: 'center',
  },
  globalbtnText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
  },
  bottomText: {
    flexDirection: 'row',
    marginVertical: 10,
    width: '90%',
    justifyContent: 'flex-end',
  },
  normalText: {
    color: '#000',
    marginTop: 1,
  },
  navText: {
    color: '#14A800',
    fontSize: 16,
    marginLeft: 5,
  },
});
