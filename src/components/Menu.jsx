import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
const Menu = () => {
    const navigation = useNavigation()
    const styles = StyleSheet.create({
      menuContainer:{
          display: 'flex', 
          flexDirection: 'row', 
          justifyContent: 'space-evenly'
      },
      buttonStyle:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      iconStyle:{
        height: responsiveHeight(6.7),
        width: responsiveWidth(100),
        aspectRatio: 1
      },
      textStyle:{
        fontSize: responsiveFontSize(2.1)
      }
  })
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={()=>navigation.navigate('Course')}
      >
        <Image 
            style={styles.iconStyle}
            source={require('../../assets/training.png')}
        />
        <Text style={styles.textStyle}>Courses</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={()=>navigation.navigate('Student')}
      >
        <Image 
            style={styles.iconStyle}
            source={require('../../assets/profile.png')}
        />
        <Text style={styles.textStyle}>Students Detail</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={()=>navigation.navigate('About')}
      >
        <Image 
            style={styles.iconStyle}
            source={require('../../assets/about.png')}
        />
        <Text style={styles.textStyle}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity 
      style={styles.buttonStyle}
      onPress={()=>navigation.navigate('Contact')}
      >
       <Image 
            style={styles.iconStyle}
            source={require('../../assets/contact.png')}
        />
        <Text style={styles.textStyle}>Contact us</Text>
      </TouchableOpacity>
      
    </View>
  )
}

export default Menu

