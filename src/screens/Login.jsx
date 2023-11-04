import { StyleSheet, Text, TextInput, Image, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { ActivityIndicator, MD2Colors } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import { useIsFocused } from '@react-navigation/native';
import UserContext from './UserContext';
import { ScrollView } from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize
} from "react-native-responsive-dimensions";
import { validate } from '../plugins/validation';

const Login = ({navigation}) => {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [showPassword,setShowPassword] = useState(false)
  const [checkValue,setcheckValue] = useState(false)
  const [myUserData, setMyUserData] = useState();
  const [isLoaded, setIsLoaded] = useState(true)
  const [isError, setError] = useState('')
  const focus = useIsFocused();
  const { updateUser } = useContext(UserContext);
    const getUserData = async ()=>{
        try {
            const res= await fetch(`https://65265e86917d673fd76c194c.mockapi.io/technest/users`)
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
    },[submit, focus])
    
  const submit = ()=>{
    getUserData()
    if(!email && !password ){
      alert("Please fill all the fields!")
    }else{
        
        const matchUser = myUserData.filter((elem => email.toLocaleLowerCase() === elem.email && password === elem.password
        ))
        if(validate(email)){
          if(matchUser != ''){
            matchUser.forEach(elem => {
              const { username }= elem
              updateUser(username);
              navigation.navigate('Home')
              });
            setEmail('')
            setPassword('')
            setShowPassword(true)
            setcheckValue(false)
        }else{
            alert("Your email and password doesn't match!")
        }
        }else{
          alert("Email and password are incorrect!")
          setEmail('')
          setPassword('')
        }
    }
  }
  useEffect(()=>{
    !checkValue ? setShowPassword(true):setShowPassword(false)
  },[checkValue])
  const signup = ()=>{
    navigation.navigate('SignUp')
  }
  const styles = StyleSheet.create({
    mainContainer:{
      height: responsiveHeight(100),
      // height: hp('30%'),
      // flex: 100,
      paddingHorizontal: 20,
      backgroundColor: '#fff'
    },
    mainHeader:{
      fontSize: responsiveFontSize(3),
      color: '#344055',
      fontWeight: '500',
      paddingTop: 20,
      textAlign: 'center',
      paddingBottom: 15,
      textTransform: 'uppercase',
      // fontFamily: ''
    },
  mainHeader1:{
      fontSize: 60,
      marginTop: 60,
      color: '#4c5dab'
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
    multiline:{
      paddingVertical: 4,
    },
    buttonStyle:{
      borderRadius: 5,
      paddingVertical: 10,
      paddingHorizontal: 10,
      description: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 30,
      marginBottom: 13
    },
    buttonText:{
      color: '#eee',
      fontSize: 20
    },
    checkbox:{
      marginTop: 4
    },
    wrapper:{
      display:'flex',
      flexDirection: 'row',
      marginTop: 20,
      // fontFamily:''
    },
    wrapperText:{
      marginLeft: 5,
      fontSize: 20,
      paddingRight: 10,
      color: '#7d7d7d',
      // fontFamily: ''
    },
    loader:{
      minHeight: responsiveHeight(100),
      display: 'flex',
      justifyContent: 'center',
      alignItems:'center'
  },
  errorText:{
    fontSize: responsiveFontSize(3)
  },
  iconContainer:{
  display: 'flex',
  alignItems: 'center',
  marginTop: 60,
  },
  iconStyle:{
    height: responsiveFontSize(16),
    width: responsiveWidth(100),
    aspectRatio: 1
  },
  })
  return (
    <ScrollView>
        {
        isLoaded ? 
        <View style={styles.loader}>
        <ActivityIndicator size='large' animating={true} color={MD2Colors.grey500} />
        </View>
            : 
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
      <View style={styles.mainContainer}>
      <View style={styles.iconContainer}>
      <Image 
        style={styles.iconStyle}
        source={require('../../assets/ic_launcher_round.png')}
        />
      </View>
      <Text style={styles.mainHeader}>Log in to TECHNEST</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Email</Text>
        <TextInput 
          style={styles.inputStyle}
          placeholder='Enter your email...'
          value={email}
          onChangeText={(email)=>setEmail(email)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Password</Text>
        <TextInput 
          style={styles.inputStyle}
          secureTextEntry={showPassword}
          placeholder='Enter your password...'
          value={password}
          onChangeText={(password)=>setPassword(password)}
        />
      </View>
      {/* checkbox */}
      <View style={styles.wrapper}>
      <Text style={styles.wrapperText}>
        Show Password
      </Text>
      <Checkbox 
      style={styles.checkbox}
        value={checkValue}
        onValueChange={()=>setcheckValue(!checkValue)}
        color={checkValue? '#4630EB': undefined}
      />
      </View> 
      {/* Submit */}
      
        <TouchableOpacity 
          style={[styles.buttonStyle, 
          {backgroundColor: email? '#4630EB': 'grey'}
          ]}
          disabled={!email}
          onPress={submit}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.buttonStyle, {marginTop: 0} ]}
          onPress={signup}
        >
          <Text style={[styles.buttonText,{color: '#344055', fontSize: 18}]}>New to TECHNEST? Sign Up</Text>
        </TouchableOpacity>
      
    </View>
        }
    </ScrollView>
  )
}

export default Login

