import React from 'react';
import {View, Text, Button, StyleSheet, Image} from 'react-native';
import {images, COLORS, FONTS, SIZES} from '../constants/index';
const SupportScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/TOM.jpg')}
        style={{
          width: '100%',
          height: '50%',
        }}
      />
      <View style={styles.description}>
        <Text style={styles.text}>
          Sri Lanka's # 1 online car classifieds. riyapola.lk, Cars for Sale,
          car sales, motorbikes, buy car, car parts, automobile, Car Dealers,
          Hybrid vehicle ikman
        </Text>
      </View>
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
