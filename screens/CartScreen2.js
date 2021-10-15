import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image,TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../assets/const/colors';
import orders from '../assets/const/orders';
import { PrimaryButton } from '../components/button';


const CartScreen2 = ({navigation}) => {
  const CartCard = ({item}) => {
    return (
      <View style={style.cartCard}>
        <Image source={item.image} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.name}</Text>
          <Text style={{fontSize: 13, color: COLORS.grey}}>
            {item.supplier}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${item.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>150</Text>
          <View style={style.actionBtn}>
            <Icon name="remove" size={25} color={COLORS.white} />
            <Icon name="add" size={25} color={COLORS.white} />
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white, flex: 1}}>
      <View style={style.header}>
        <Icon name="arrow-back" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 50}}
        data={orders}
        renderItem={({item}) => <CartCard item={item} />}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 10,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$203500</Text>
            </View>
            <View>
            <Text style={{fontSize: 15,fontColor:'red'}}>Total Cost: higher than $100000</Text>
            <Text style={{fontSize: 15,fontColor:'red'}}>Request Approval to complete purchase</Text>
            </View>
            <View>
            <TouchableOpacity
          activeOpacity={0.7}
          // onPress={clickHandler}
          onPress={() => navigation.navigate('OrderScreen')}
          style={style.touchableOpacityStyle}>
          <Image
            source={{
              uri:
                'https://raw.githubusercontent.com/AboutReact/sampleresource/master/plus_icon.png',
            }}
            style={style.floatingButtonStyle}
          />
        </TouchableOpacity>
        </View>
        <View style={style.btn} >
        <TouchableOpacity>
            <Text style={{color: COLORS.white, fontWeight: 'bold'}}>
              SAVE
            </Text>   
            </TouchableOpacity>
          </View>
          <View style={style.btn2} disabled={true}>
          <TouchableOpacity >
            <Text style={{color: COLORS.white, fontWeight: 'bold'}}>
              Approve
            </Text>   
            </TouchableOpacity>
          </View>
          <View style={style.btn3} >
          <TouchableOpacity>
            <Text style={{color: COLORS.white, fontWeight: 'bold'}}>
              Get Approval
            </Text>
            </TouchableOpacity>   
          </View>
          </View>
          
        )}
      />
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom:-35,
  },
  floatingButtonStyle: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    //backgroundColor:'black'
  },
  btn: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    width:100,
    borderRadius: 12,
    bottom:-60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn2: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    width:100,
    borderRadius: 12,
    bottom:-10,
    left:140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn3: {
    backgroundColor: COLORS.primary,
    flex: 1,
    height: 50,
    width:100,
    borderRadius: 12,
    bottom:40,
    left:280,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
});

export default CartScreen2;