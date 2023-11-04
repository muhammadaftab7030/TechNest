import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity, FlatList } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const UserData = ({ navigation }) => {
    const [myUserData, setMyUserData] = useState();
    const [isLoaded, setIsLoaded] = useState(true)
    const [isError, setError] = useState('')
    const getUserData = async ()=>{
        try {
            const res= await fetch(`https://65265e86917d673fd76c194c.mockapi.io/technest/stud_details`)
            const resp = await res.json()   
            setMyUserData(resp)
            setIsLoaded(false)
            setError(false)
        } catch (error) {
            var eror = error.message 
            setIsLoaded(false)
            setError(eror)
        }
    }
    const reload=()=>{
      getUserData()
      setIsLoaded(true)
     }
    useEffect(()=>{
        getUserData()
    },[])
    const styles = StyleSheet.create({
      loader:{
          minHeight: responsiveHeight(100),
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center'
      },
      mainHeading:{
                flexDirection: 'row',
                display: 'flex',
                paddingVertical: 10,
                justifyContent: 'space-between',
                alignItems: 'center',
              },
      mainContainer:{
        paddingHorizontal: 17,
        paddingTop: 30,
        height: responsiveHeight(100),
        width: responsiveWidth(100),
      },
      courseContainer:{
        padding: 12,
        backgroundColor: "rgba(255,255,255, 0.98)",
        borderRadius: 5,
        shadowColor: 'grey',
        shadowOffset: {width:0, height:0},
        shadowOpacity: 0.5,
        shadowRadius: 8,
        elevation: 9,
    },
    courseTitle:{
      fontSize: responsiveFontSize(3),
      color: '#344055',
      textTransform: 'uppercase',
      marginTop: 10
    },
    courseDesc:{
      color: '#7d7d7d',
      textAlign: 'left',
      fontSize: responsiveFontSize(2.3),
      marginTop: 20,
      lineHeight: 26
    },
      cardImage:{
        aspectRatio: 1,
        height: responsiveHeight(43),
            width: responsiveWidth(100),
            display: 'flex',
            alignItems: 'stretch',
      },
      buttonStyle: {
        backgroundColor: '#809fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginTop: 15,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      buttonText: {
        color: '#eee',
        fontSize: responsiveFontSize(2.7)
      },
      errorText:{
        fontSize: responsiveFontSize(2.4)
      }
    })
    const userCard = ({item})=>{
     return(
      <View style={styles.mainContainer}>
      
        <View style={styles.courseContainer}>  
        <View>
            <Image 
              style={styles.cardImage}
              source={{uri: item.avatar}}
              resizeMode='cover'
            />
        </View>  
            <View style={styles.mainHeading}>
            <Text style={styles.courseTitle}>Bio-data</Text>
            <Text style={styles.courseTitle}>{item.id>=10 ?`#${item.id}`:`#0${item.id}`}</Text>
            </View>
            <Text style={styles.courseDesc}>Name: {item.name}</Text>
            <Text style={styles.courseDesc}>Email: {item.email}</Text>
            <Text style={styles.courseDesc}>Mobile: {item.mobile}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
              style={styles.buttonStyle}
              onPress={()=>{navigation.navigate('UserDetails', {
                username: `${item.name}`, 
                image: `${item.avatar}`,
                description: `${item.description}`
                })}}
              >
                <Text style={styles.buttonText}>More Details</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
     ) 
    }
  return (
    <View>
      {
        isLoaded ? 
        <View style={styles.loader}>
        <ActivityIndicator size='large' animating={true} color={MD2Colors.grey500} />
        </View>:
        isError ? 
          <View style={styles.loader}>
            <Text style={styles.errorText}>{isError}</Text>
            <TouchableOpacity 
          style={[styles.buttonStyle, 
          {backgroundColor: '#4630EB'}
          ]}
          onPress={reload}
        >
          <Text style={styles.buttonText}>Reload</Text>
        </TouchableOpacity>
          </View>
          :
        <FlatList 
        data={myUserData}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={userCard}
        />
      }
    </View>
    
  )
}
export default UserData


