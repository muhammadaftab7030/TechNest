import React, { useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import Courses from '../api/Courses'
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";


const Course = ({ navigation }) => {

  const courseCard = ({item})=>{
    return(
      <View style={styles.mainContainer}>
      
        <View style={styles.courseContainer}>
        <View>
            <Image 
              style={styles.cardImage}
              source={item.image}
              resizeMode='contain'
            />
            </View>
            <Text style={styles.courseTitle}>{item.title}</Text>
            <Text style={styles.courseDesc}>{item.description}</Text>
            <View style={styles.lineStyle}></View>
            <Text style={styles.courseDesc}>{item.aud1}</Text>
            <View style={styles.lineStyle}></View>
            <Text style={styles.courseDesc}>{item.aud2}</Text>
            <View style={styles.lineStyle}></View>
            <Text style={styles.courseDesc}>{item.aud3}</Text>
            <View style={styles.lineStyle}></View>
            <Text style={[styles.courseDesc, {
              textAlign: 'center',
              fontSize: responsiveFontSize(3),
            }]}>Rs: {item.price} /-</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
              style={styles.buttonStyle}
              onPress={()=>{navigation.navigate("Contact")}}
              >
                <Text style={styles.buttonText}>Book Now</Text>
              </TouchableOpacity>
            </View>
            
        </View>
      </View>
    )
  }

  const styles = StyleSheet.create({
    mainContainer:{
      paddingHorizontal: 20,
      width: responsiveWidth(100),
    },
    courseContainer:{
      paddingHorizontal: 13,
      marginTop: 30,
      width: responsiveWidth(90),
      backgroundColor: "rgba(255,255,255, 0.98)",
      borderRadius: 5,
      shadowColor: 'grey',
      shadowOffset: {width:0, height:0},
      shadowOpacity: 0.5,
      shadowRadius: 8,
      elevation: 9,
  },
  courseTitle:{
    fontSize: responsiveFontSize(3.3),
    color: '#344055',
    textTransform: 'uppercase',
    marginTop: 5
  },
  courseDesc:{
    color: '#7d7d7d',
    textAlign: 'left',
    fontSize: responsiveFontSize(2.2),
    marginTop: 20,
    textAlign: 'justify',
    paddingBottom: 10,
    lineHeight: 26
  },
  cardImage:{
    aspectRatio: 1,
    height: responsiveHeight(42),
        width: responsiveWidth(100),
        display: 'flex',
        marginVertical: -65,
        alignItems: 'stretch',
  },
    buttonContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
    buttonStyle: {
      backgroundColor: '#809fff',
      paddingVertical: 10,
      paddingHorizontal: 20,
      width: responsiveWidth(84),
      borderRadius: 5,
      display: 'flex',
      marginVertical: 14,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonText: {
      color: '#eee',
      fontSize: responsiveFontSize(2.5)
    },
    listContentContainer: {
      paddingBottom: 20, 
    },
    lineStyle:{
      width: responsiveWidth(84),
      padding: 0,
      borderWidth: 0.5,
      borderColor: 'grey'
  },
  })
  return (
    <View>
    

    <FlatList 
        keyExtractor={(item)=> item.id}
        data={Courses}
        renderItem={courseCard}
        contentContainerStyle = {styles.listContentContainer}
      />
    </View>
      
  )
}

export default Course

