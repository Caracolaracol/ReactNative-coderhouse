import { View, Text, TextInput, Button, KeyboardAvoidingView, StyleSheet, Pressable } from 'react-native'
import React, {  useState } from 'react'

import { useDispatch } from 'react-redux'
import { URL_AUTH_SIGNUP } from '../../constants/database'
import { signUp } from '../../store/features/AuthSlice'

const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('agasasagbrina@gmail.com')
  const [password, setPassword] = useState('13vf6s27')
  const [loading, setLoading] = useState(false)

  
  const signIn = async () => {

  } 

  const signUpHandler = async () => {
    try {
      const response = await fetch(URL_AUTH_SIGNUP, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password,
          returnSecureToken: true
        })
      })
      const data = await response.json()

      dispatch(signUp(data))
    } catch (error) {
      console.log(error)
    } finally {
      console.log('fin')
    }
  }

  return (
      <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <Text>This is the Login page</Text>
        <TextInput placeholder='email' autoCapitalize='none'></TextInput>
        <TextInput secureTextEntry={true} placeholder='password' autoCapitalize='none'></TextInput>
        <Button title='login' onPress={signIn}/>
        <Pressable onPress={signUpHandler} style={{backgroundColor:'red'}}>
          <Text>
          create acount
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
  )
}

export default Login

const styles = StyleSheet.create({ 
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }

})