import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('window');

const Signin2 = ({navigation}) => {
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.bodyContainer}>
        <ImageBackground
          source={require('./assets/Group_34.png')}
          style={styles.bgImage}>
          <View
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: '#000',
              opacity: 0.6,
            }}></View>
          <Image
            source={require('./assets/lightLogo.png')}
            style={styles.logo}
          />
          <View style={styles.formWhiteBox}>
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

            <TouchableOpacity style={styles.globalbtn}>
              <Text style={styles.globalbtnText}>Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.bottomTextContainer}>
              <View style={styles.bottomText}>
                <Text style={styles.normalText}>Create a new Account ?</Text>
                <Text
                  style={styles.navText}
                  onPress={() => navigation.navigate('SignupScreen')}>
                  Sign Up
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

export default Signin2;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
  bodyContainer: {
    flex: 1,
  },
  logo: {
    marginVertical: 20,
    alignSelf: 'center',
    width: width - 80,
    height: 150,
    marginVertical: 50,
    resizeMode: 'stretch',
  },
  formWhiteBox: {
    backgroundColor: '#fff',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    paddingTop: 20,
  },
  mainText: {
    color: '#14A800',
    fontSize: 40,
    alignSelf: 'center',
    paddingTop: 30,
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
    width: width - 20,
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
  bottomTextContainer: {
    flexDirection: 'row',
    width: width - 50,
    justifyContent: 'flex-end',
    alignSelf: 'center',
    alignItems: 'center',
    margin: 20,
  },
  bottomText: {
    flexDirection: 'row',
  },
});
