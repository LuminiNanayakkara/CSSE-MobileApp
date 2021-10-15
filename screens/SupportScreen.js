import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {images, COLORS, FONTS, SIZES} from '../constants/index';
const SupportScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
     
      <Button title="Go Back" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

export default SupportScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    padding: 50,
  },
  text: {
    fontSize: 20,
    justifyContent: 'center',
    textAlign: 'center',
  },
});
