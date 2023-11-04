import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Checkbox from 'expo-checkbox';
import { ScrollView } from 'react-native';
import {validate} from '../plugins/validation';


const SignUp = ({navigation}) => {
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [retypePassword, setRetypePassword] = useState('')
  const [showPassword,setShowPassword] = useState(false)
  const [checkValue,setcheckValue] = useState(false)
  

  const submit = ()=>{
    if(!name && !email && !password && !retypePassword ){
      alert("Please fill all the fields!")
    }else if(password !== retypePassword){
        alert("Password and retype-password does not match!")
    }else{
      if(validate(email)){
        alert(`${name} your account has been successfully created!`)
        
      const data = {
        username: name,
        email: email.toLocaleLowerCase(),
        password: password,
      };
      axios.post(
        // "https://formspree.io/f/xbjvqgbq", 
        "https://65265e86917d673fd76c194c.mockapi.io/technest/users",
        data,
        {headers: {"Accept": "application/json"}}
        )
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      navigation.navigate('Login')
      }else{
        alert("Email is incorrect!")
        setEmail('')
      }
      
    }
  }
  useEffect(()=>{
    !checkValue ? setShowPassword(true):setShowPassword(false)
  },[checkValue])
  
  const login = ()=>{
    navigation.navigate('Login')
  }
  return (
    <ScrollView style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Sign up to TECHNEST</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Name</Text>
        <TextInput 
          style={styles.inputStyle}
          placeholder='Enter your name...'
          value={name}
          onChangeText={(name)=>setName(name)}
        />
      </View>
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
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Re-type password</Text>
        <TextInput 
          style={styles.inputStyle}
          secureTextEntry={showPassword}
          placeholder='Retype-password...'
          value={retypePassword}
          onChangeText={(retypePassword)=>setRetypePassword(retypePassword)}
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
          {backgroundColor: name && email && password? '#4630EB': 'grey'}
          ]}
          disabled={!name || !email || !password}
          onPress={submit}
        >
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.buttonStyle, {marginTop: 0} ]}
          onPress={login}
        >
          <Text style={[styles.buttonText,{color: '#344055', fontSize: 18}]}>Have you already Account? Login</Text>
        </TouchableOpacity>
      
    </ScrollView>
  )
}

export default SignUp

const styles = StyleSheet.create({
  mainContainer:{
    height: '100%',
    paddingHorizontal: 20,
    backgroundColor: '#fff'
  },
  mainHeader:{
    fontSize: 25,
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
    fontSize: 19,
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
  wrapper:{
    display:'flex',
    flexDirection: 'row',
    marginTop: 20,
    // fontFamily:''
  },
  checkbox:{
    marginTop: 4
  },
  wrapperText:{
    marginLeft: 5,
    fontSize: 20,
    paddingRight: 10,
    color: '#7d7d7d',
    // fontFamily: ''
  }
})