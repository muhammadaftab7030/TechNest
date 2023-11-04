import { StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import React from 'react'

const About = () => {
  const insta = require('../../assets/icons8-instagram-96.png');
const youtube = require('../../assets/icons8-youtube-96.png');
const facebook = require('../../assets/icons8-facebook-96.png');

  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.mainHeader}>TECHNEST</Text>
      {/* <Text style={styles.paraStyle}>
      {description}
      </Text> */}
      {/* <View>
        <Image style={styles.imgStyle} source={require('../../assets/aboutus.jpg')} />
      </View> */}
      <View style={styles.aboutLayout}>
      <Text style={styles.aboutSubHeader}>About Us</Text>
      <Text style={[styles.paraStyle, styles.aboutPara]}>
      TECHNEST Professional Training Institute is one of the best IT Training Institutes in Pakistan. It has been providing quality IT education since 2005.
      </Text>
      </View>
      
      <Text style={styles.mainHeader}>Follow on Social Networks</Text>
      <View style={styles.menuContainer}>
        <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={()=>Linking.openURL('https://www.instagram.com/')}
        >
        <Image
        style={styles.iconStyle}
        source={insta}
         />
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={()=>Linking.openURL('https://www.youtube.com/')}
        >
        <Image
        style={styles.iconStyle}
        source={youtube}
         />
        </TouchableOpacity>
        <TouchableOpacity 
        style={styles.buttonStyle}
        onPress={()=>Linking.openURL('https://www.facebook.com/')}
        >
        <Image
        style={styles.iconStyle}
        source={facebook}
         />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
  aboutContainer:{
    display: 'flex',
    alignItems: 'center'
  },
  imgStyle:{
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader:{
    fontSize: 18,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginTop: 30,
    marginBottom: 10,
    lineHeight: 30,
  },
  paraStyle:{
    fontSize: 18,
    paddingHorizontal: 20,
    color: '#7d7d7d',
    textAlign: 'justify',
    paddingBottom: 30,
  },
  aboutLayout:{
    backgroundColor: '#4c5dab',
    paddingHorizontal: 30,
    marginVertical: 30
  },
  aboutSubHeader:{
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    lineHeight: 30,
    alignSelf: 'center'
  },
  aboutPara:{
    color: '#fff',
  },
  menuContainer:{
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  iconStyle:{
    width: '100%',
    height: 50,
    aspectRatio: 1
  }
})