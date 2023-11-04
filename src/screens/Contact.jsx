import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Platform } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Checkbox from 'expo-checkbox';
import { TouchableWithoutFeedback } from 'react-native';
import { Keyboard } from 'react-native';
import { ScrollView } from 'react-native';
import {validate} from '../plugins/validation';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";

const Contact = ({navigation}) => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [message,setMessage] = useState('')
  const [agree,setAgree] = useState(false)
  
  const submit = ()=>{
    if(!name && !email && !phone && !message ){
      alert("Please fill all the fields!")
    }else{
      if(validate(email) && phone.length == 11){
        alert(`Thank you! ${name}. We will be contact you as soon as possible`)
        const data = {
          username: name,
          email: email.toLocaleLowerCase(),
          phone: phone,
          msg: message
        }
        axios.post(
          "https://formspree.io/f/mjvqjopd", 
          data,
          {headers: {"Accept": "application/json"}}
          )
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        navigation.navigate('Home')
      }else{
        if(validate(email) == false){
          alert("Email is incorrect!")
          setEmail('')
        }else if(phone.length < 11){
          alert("Mobile no. length should be 11 numbers")
          setPhone('')
        }
      }
    }
  }
  const styles = StyleSheet.create({
    mainContainer:{
      height: responsiveHeight(100),
      paddingHorizontal: 20,
      width: responsiveWidth(100),
      backgroundColor: '#fff'
    },
    mainHeader:{
      fontSize: responsiveFontSize(3),
      color: '#344055',
      paddingBottom: 15,
      fontWeight: '500',
      paddingTop: 30,
      textTransform: 'uppercase',
    },
    description:{
      fontSize: responsiveFontSize(2.4),
      color: '#7d7d7d',
      paddingBottom: 10,
      lineHeight: 25
    },
    inputContainer:{
      marginTop: 20,
    },
    labels:{
      fontSize: responsiveFontSize(2.2),
      fontWeight: 'bold',
      color: '#7d7d7d',
      paddingBottom: 5,
      // fontFamily:'',
      lineHeight: 25
    },
    inputStyle:{
      borderWidth: 1,
      borderColor: 'rgba(0,0,0,0.3)',
      paddingHorizontal: 15,
      paddingVertical: 6,
      borderRadius: 2,
    },
    
    buttonStyle:{
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 10,
      description: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30
    },
    buttonText:{
      color: '#eee',
      fontSize: responsiveFontSize(2.3)
    },
    wrapper:{
      display:'flex',
      flexDirection: 'row',
      marginTop: 20,
    },
    wrapperText:{
      marginLeft: 10,
      fontSize: responsiveFontSize(2.3),
      color: '#7d7d7d',
    }
  })
  return (
    <KeyboardAvoidingView
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}
    >
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Level up your knowledge</Text>
      <Text style={styles.description}>You can raach us anytime via TECHNEST@gmail.com</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput 
          style={styles.inputStyle}
          placeholder='Enter your name...'
          value={name}
          onChangeText={(name)=>setName(name)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your email</Text>
        <TextInput 
          style={styles.inputStyle}
          placeholder='Enter your email...'
          value={email}
          onChangeText={(email)=>setEmail(email)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your Mobile No.</Text>
        <TextInput 
          style={styles.inputStyle}
          placeholder='03xxxxxxxxxxx'
          value={phone}
          keyboardType='numeric'
          onChangeText={(phone)=> setPhone(phone)}
            maxLength={11}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Message</Text>
        <TextInput 
          style={[styles.inputStyle, styles.multilinestyle]}
          placeholder='Tell us about yourself'
          value={message}
          onChangeText={(msg)=>setMessage(msg)}
          numberOfLines={5}
          multiline={true}
          textAlignVertical="top"
        />
      </View>

      {/* checkbox */}
      <View style={styles.wrapper}>
      <Checkbox 
        value={agree}
        onValueChange={()=>setAgree(!agree)}
        color={agree? '#4630EB': undefined}
      />
      <Text style={styles.wrapperText}>
        I have read and agreed with the TN
      </Text>
      </View>      
      {/* Submit */}
      
        <TouchableOpacity 
          style={[styles.buttonStyle, 
          {backgroundColor: agree? '#4630EB': 'grey'}
          ]}
          disabled={!agree}
          onPress={submit}
        >
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      
    </ScrollView>
    </TouchableWithoutFeedback> 
    </KeyboardAvoidingView>
  )
}

export default Contact



