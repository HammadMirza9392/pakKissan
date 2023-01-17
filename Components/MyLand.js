import {StyleSheet, Text, Image, View, FlatList} from 'react-native';
import React from 'react';
import {BackgroundImage} from '@rneui/themed/dist/config';
import LandItem from './Global/LandItem';

const MyLand = () => {
  const data = [
    {
      title: 'Roohi',
    },
    {
      title: 'Mehra',
    },
    {
      title: 'Roohi',
    },
    {
      title: 'Mehra',
    },
    {
      title: 'Roohi',
    },
    {
      title: 'Mehra',
    },
    {
      title: 'Roohi',
    },
    {
      title: 'Mehra',
    },
  ];

  return (
    <View style={{flex: 1, paddingBottom: 30}}>
      <FlatList
        data={data}
        numColumns={2}
        columnWrapperStyle={{
          flex: 1,
          justifyContent: 'space-around',
          margin: 20,
        }}
        renderItem={({item}) => {
          return <LandItem title={item.title} />;
        }}
      />
      <View style={styles.bottomspace}></View>
    </View>
  );
};

export default MyLand;

const styles = StyleSheet.create({
  boxContainer: {},
  bottomspace: {
    backgroundColor: '#fff',
    position: 'absolute',
    height: 30,
    width: '100%',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});
