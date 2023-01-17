import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Header = props => {
  return (
    <View style={styles.headerMainContainer}>
      <Text style={styles.headingText}>{props.heading}</Text>
    </View>
  );
};

Header.defaultProps = {
  heading: 'Pak Kissan',
};
export default Header;

const styles = StyleSheet.create({
  headerMainContainer: {
    backgroundColor: '#14A800',
    height: 90,
    justifyContent: 'center',
    textAlign: 'center',
  },
  headingText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
});
