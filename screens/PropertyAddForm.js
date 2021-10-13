import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';

import Input from '../components/Inputs';
import Submit from '../components/Submit';

const SignUp = props => {
  return (
    <ScrollView style={{backgroundColor: 'white'}}>
      <View style={styles.container}>
        <Image
          source={require('../assets/TOM.png')}
          resizeMode="center"
          style={styles.image}
        />
        <Text style={styles.textTitle}>Property Add Form</Text>
        <Input name="Title" />
        <Input name="Price" />
        <Input name="Telephone Number" />
        <Input
          style={{
            width: '85%',
            justifyContent: 'center',
            borderColor: 'black',
            border: 2,
          }}
          name="Description"
          multiline={true}
          numberOfLines={3}
          placeholder="Description"
          require={true}
        />

        <Submit color="#0251ce" title="Add" />
        <View style={{flexDirection: 'row'}} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 300,
    height: 250,
  },
  textTitle: {
    fontSize: 30,
    fontFamily: 'Foundation',
    marginVertical: 5,
  },
  textBody: {
    fontSize: 16,
    fontFamily: 'Foundation',
  },
  postInput: {},
});

export default SignUp;
