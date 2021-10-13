import React from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const DetailsScreen = ({navigation}) => {
  return (
    <View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle} />
        <MaterialCommunityIcons
          name="plus-circle-outline"
          size={35}
          color="#283593"
        />

        <Text style={styles.cardDetails} />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle} />
        <MaterialCommunityIcons
          name="router-wireless-settings"
          size={100}
          color="#283593"
        />

        <Text style={styles.cardDetails} />
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.cardTitle} />

        <Text style={styles.cardDetails} />
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1565C0',
    height: 30,
  },
  cardInfo: {
    flex: 2,
    padding: 100,
    borderColor: '#1565C0',
    color: '#1565C0',
    margin: 5,
    borderWidth: 1,
    // borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderTopLeftRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },
});
