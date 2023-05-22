import { View, Text, TextInput, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../services/firebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const auth = FIREBASE_AUTH

  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email,password)
    } catch (error) {
      
    } finally {
      setLoading(false)
    }
  } 

  const signUp = async () =>{
    setLoading(true)
    try{
      const response = await createUserWithEmailAndPassword(auth, email,password)
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }

  return (
    <View>
      <KeyboardAvoidingView behavior='padding'>
        <Text>This is the Login page</Text>
        <TextInput value={email} placeholder={email} autoCapitalize='none'></TextInput>
        <TextInput secureTextEntry={true} value={password} placeholder={password} autoCapitalize='none'></TextInput>
        <Button title='login' onPress={signIn}/>
        <Button title='create acount' onPress={signUp}/> 
      </KeyboardAvoidingView>
    </View>
  )
}

export default Login