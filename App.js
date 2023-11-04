/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React from 'react';
import Home from './src/screens/Home';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import Course from './src/screens/Course';
import UserData from './src/screens/UserData';
import UserDetails from './src/screens/UserDetails';
import Login from './src/screens/Login';
import SignUp from './src/screens/SignUp';
import MenuSideList from './src/screens/MenuSideList';
import { UserProvider } from './src/screens/UserContext';


export default App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <UserProvider>
<NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {/* Login Screen */}

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerShown: false,
          }}
        />
        {/* Home Screen */}
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
          }}>
          {props => <Home {...props} channelName="technest" />}
        </Stack.Screen>
        {/* About Screen */}
        <Stack.Screen
          name="About"
          component={About}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: 'NunitoSans_7pt_Condensed-Bold'
            },
            headerTitle: 'About',
            headerTitleAlign: 'center',
          }}
        />
        {/* Contact us */}
        <Stack.Screen
          name="Contact"
          component={Contact}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: 'NunitoSans_7pt_Condensed-Bold'
            },
            headerTitle: 'Contact us',
            headerTitleAlign: 'center',
          }}
        />
        {/* Courses offer */}
        <Stack.Screen
          name="Course"
          component={Course}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: 'NunitoSans_7pt_Condensed-Bold'
            },
            headerTitle: 'Courses',
            headerTitleAlign: 'center',
          }}
        />
        {/* user data */}
        <Stack.Screen
          name="Student"
          component={UserData}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: 'NunitoSans_7pt_Condensed-Bold'
            },
            headerTitle: 'Students Detail',
            headerTitleAlign: 'center',
          }}
        />
        {/* single user details */}
        <Stack.Screen
          name="UserDetails"
          component={UserDetails}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: 'NunitoSans_7pt_Condensed-Bold'
            },
            headerTitle: 'Student Details',
            headerTitleAlign: 'center',
          }}
        />
        {/* Sign Up */}
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerTitleStyle: {
              fontSize: 25,
              // fontFamily: 'NunitoSans_7pt_Condensed-Bold'
            },
            headerTitle: 'Sign up',
            headerTitleAlign: 'center',
          }}
        />
        {/* Logout */}
        <Stack.Screen name="MenuSideList" component={MenuSideList} />
      </Stack.Navigator>
    </NavigationContainer>
    </UserProvider>
  );
};
// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const App = () => {
//   return (
//     <View>
//       <Text>App</Text>
//     </View>
//   )
// }

// export default App

// const styles = StyleSheet.create({})