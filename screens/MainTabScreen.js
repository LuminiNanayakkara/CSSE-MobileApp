import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useTheme, Avatar} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';
import EditProfileScreen from './EditProfileScreen';
import PropertyScreen from './PropertyScreen'
import PropertyDetail from './PropertyDetail'
import PropertyAddForm from './PropertyAddForm'

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();
const ProfileStack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor:  '#303F9F',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor:  '#303F9F',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor:  '#303F9F',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Favourites"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Favourites',
          tabBarColor: '#303F9F',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-heart" color={color} size={26} />
          ),
        }}
      />
     
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
<HomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor:  '#303F9F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
        title:'Riyapola',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor= '#303F9F' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
        <HomeStack.Screen name="Property" component={PropertyScreen} options={{
        title:'Propery Listings',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor= '#303F9F' onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerRight: () => (
          <MaterialCommunityIcons.Button name="plus" size={25} backgroundColor='#303F9F' onPress={() => navigation.navigate('EditProfile')}></MaterialCommunityIcons.Button>
      ),
        }} />
        <HomeStack.Screen name="PropertyAddForm" component={PropertyAddForm} options={{
        title:'Propery Listings',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor= '#303F9F' onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerRight: () => (
          <MaterialCommunityIcons.Button name="plus" size={25} backgroundColor='#303F9F' onPress={() => navigation.navigate('EditProfile')}></MaterialCommunityIcons.Button>
      ),
        }} />
        <HomeStack.Screen name="PropertyDetail" component={PropertyDetail} options={{
        title:'Propery Listings',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor= '#303F9F' onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerRight: () => (
          <MaterialCommunityIcons.Button name="plus" size={25} backgroundColor='#303F9F' onPress={() => navigation.navigate('EditProfile')}></MaterialCommunityIcons.Button>
      ),
        }} />
</HomeStack.Navigator>
);

const DetailsStackScreen = ({navigation}) => (
<DetailsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#303F9F',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <DetailsStack.Screen name="Details" component={DetailsScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor='#303F9F' onPress={() => navigation.openDrawer()}></Icon.Button>
        )
        }} />
</DetailsStack.Navigator>
);

const ProfileStackScreen = ({navigation}) => (
<ProfileStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#303F9F',
        shadowColor:"#fff",
        elevation:0
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <ProfileStack.Screen name="Details" component={ProfileScreen} options={{
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor='#303F9F' onPress={() => navigation.openDrawer()}></Icon.Button>
        ),
        headerRight: () => (
            <MaterialCommunityIcons.Button name="account-edit" size={25} backgroundColor='#303F9F' onPress={() => navigation.navigate('EditProfile')}></MaterialCommunityIcons.Button>
        ),
        }} />
         <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Edit Profile',
        }}
        component={EditProfileScreen}
      />
</ProfileStack.Navigator>
);



// const ProfileStackScreen = ({navigation}) => {
//   const {colors} = useTheme();

//   return (
//     <ProfileStack.Navigator
//       screenOptions={{
//         headerStyle: {
//           backgroundColor: colors.background,
//           shadowColor: colors.background, // iOS
//           elevation: 0, // Android
//         },
//         headerTintColor: colors.text,
//       }}>
//       <ProfileStack.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           title: '',
//           headerLeft: () => (
//             <View style={{marginLeft: 10}}>
//               <Icon.Button
//                 name="ios-menu"
//                 size={25}
//                 backgroundColor={colors.background}
//                 color={colors.text}
//                 onPress={() => navigation.openDrawer()}
//               />
//             </View>
//           ),
//           headerRight: () => (
//             <View style={{marginRight: 10}}>
//               <MaterialCommunityIcons.Button
//                 name="account-edit"
//                 size={25}
//                 backgroundColor={colors.background}
//                 color={colors.text}
//                 onPress={() => navigation.navigate('EditProfile')}
//               />
//             </View>
//           ),
//         }}
//       />
//       <ProfileStack.Screen
//         name="EditProfile"
//         options={{
//           title: 'Edit Profile',
//         }}
//         component={EditProfileScreen}
//       />
//     </ProfileStack.Navigator>
//   );
// };


