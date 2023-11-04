import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Menu from '../components/Menu'
import MenuSideList from './MenuSideList'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
  } from "react-native-responsive-dimensions";

const Home = (props) => {
    
    const description = "TECHNEST Professional Training Institute is one of the best IT Training Institutes in Pakistan."
    const [toggle, setToggle] = useState(false)
    const menu_squared = require('../../assets/icons8-menu-squared-64.png');
    const home_img = require('../../assets/abc.jpg');

    const styles = StyleSheet.create({
        mainContainer:{
            height: responsiveHeight(100),
            display: 'flex',
            width: responsiveWidth(100),
            justifyContent: 'space-between',
            paddingHorizontal: 20,
            backgroundColor: '#fff',
            textAlign: 'center'
        },
        homeTop:{
            display: 'flex',
            justifyContent:'center',
            alignItems:'center',
            paddingHorizontal: 10
        },
        headerImage:{
            height: undefined,
            width: responsiveWidth(90),
            aspectRatio: 1,
            display: 'flex',
            alignItems: 'stretch',
            marginTop: 10,
            borderRadius: 20
        },
        mainHeader:{
            fontSize: responsiveFontSize(3.5),
            color: '#344055',
            textTransform: 'uppercase',
        },
        mainHeader1:{
            fontSize: responsiveFontSize(4),
            marginTop: 0,
            color: '#4c5dab'
        },
        paraStyle:{
            color: '#7d7d7d',
            textAlign: 'left',
            fontSize: responsiveFontSize(2.2),
            marginTop: 20,
            textAlign: 'justify',
            paddingBottom: 10,
            lineHeight: 26
        },
        lineStyle:{
            marginBottom: 20,
            borderWidth: 0.5,
            borderColor: 'grey'
        },
        headermenuContainer:{
            display: 'flex', 
            flexDirection: 'row', 
            justifyContent: 'space-between',
            marginTop: 45,
            paddingHorizontal: 10,
    
        },
        buttonStyle:{
          display: 'flex',
          justifyContent: 'flex-end',
        },
        iconStyle:{
            height: responsiveHeight(6.7),
            width: responsiveWidth(100),
            aspectRatio: 1
        },
        mainView:{
            display: 'flex',   
        }
    })
  return (
    <View style={styles.mainContainer}>
    <View style={styles.headermenuContainer}>
    <Text style={[styles.mainHeader, styles.mainHeader1]}>{props.channelName}</Text>
    <TouchableOpacity
      style={styles.buttonStyle}
      onPress={()=>setToggle(!toggle)}
      >
       <Image 
            style={styles.iconStyle}
            source={menu_squared}
        />
      </TouchableOpacity>
    
    </View>
    {
        toggle ? <MenuSideList 
        navigation={props.navigation} 
        />:null
    }
    
    <View style={styles.homeTop}>
    <Image 
        style={styles.headerImage}
        source={home_img}
        resizeMode='contain'
    />
    <Text style={styles.mainHeader}>Welcome to</Text>
    <Text style={[styles.mainHeader, styles.mainHeader1]}>
        {props.channelName}
        </Text>
    <Text style={styles.paraStyle}>{description}</Text>
    </View>
    <View style={styles.menuStyle}>
    <View style={styles.lineStyle}></View>
        <Menu />
    <View style={[styles.lineStyle, , {
        marginVertical: 20,
    }]}></View>
    </View>
    </View>
  )
}

export default Home

