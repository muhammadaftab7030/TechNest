import { StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import UserContext from './UserContext';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const MenuSideList = ({navigation}) => {
  const { username } = useContext(UserContext);
  const styles = StyleSheet.create({
    mainContainer:{
        position: 'absolute',
        zIndex: 1000,
        top: 110,
        right: 0,
        display: 'flex',
        backgroundColor: '#fff',
        width: responsiveWidth(60),
        paddingHorizontal: 10
    },
    aboutLayout:{
      backgroundColor: '#4c5dab',
      paddingHorizontal: 15,
    },
    aboutSubHeader:{
      fontSize: responsiveFontSize(2),
      color: '#fff',
      textTransform: 'uppercase',
      fontWeight: '500',
      marginVertical: 10,
      lineHeight: 30,
    },
    buttonStyle:{
      display: 'flex',
      flexDirection: 'row',
      marginVertical: 15,
      paddingHorizontal: 10,
    },
    lineStyle:{
      marginBottom: 20,
      borderWidth: 0.5,
      borderColor: 'grey',
      padding: 0,
      margin: 0
  },
    iconStyle:{
      height: responsiveHeight(6.7),
      width: responsiveWidth(6),
      aspectRatio: 1
    },  
    textLogout:{
      fontSize: responsiveFontSize(2),
      paddingHorizontal: 6
    }
})
  const logout = require('../../assets/icons8-logout-30.png');
  return (
    <View style={styles.mainContainer}>
    <View style={styles.aboutLayout}>
      <Text style={styles.aboutSubHeader}>Welcome {username}</Text>
      </View>
      <TouchableOpacity
      style={styles.buttonStyle}
      onPress={()=>navigation.navigate('Login')}
      >
      <Image
        style={styles.iconStyle}
        source={logout}
         />
       <Text style={styles.textLogout}>Logout</Text>
      </TouchableOpacity>
      <View style={styles.lineStyle}></View>
    </View>
  )
}

export default MenuSideList

