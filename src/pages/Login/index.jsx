import React, {  useEffect, useState } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, Pressable, Image, Platform } from 'react-native'

import { signInWithEmailAndPassword, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
import { ref, set } from 'firebase/database'
import { DB_TORCHND, FIREBASE_AUTH } from '../../services/firebaseConfig'

import { useDispatch } from 'react-redux'
import { signIn } from '../../store/features/authSlice'

import ModalValidation from './ModalValidation'
import { validateEmail, validatePassword } from './Validations'
import styles from './styles'
import colors from '../../theme/colors'

const Login = () => {
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [validationText, setValidationText] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  
  const writeUserData = (userId, email) => { // add user to database
    set(ref(DB_TORCHND, 'users/' + userId), {
      userId:userId,
      email:email,
      favourites:[]
    })
    .then(() => {
      console.log("data saved succesfully")
    })
    .catch((error) => {
      console.log(error)
    });
  }

  const signInHandler = async () => {
    // login
    if (!validateEmail(email)) {
      setValidationText('Invalid Email. Please enter a valid email address');
      
      return;
    } else {
      signInWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredential) => {
        // Signed in
        const userData = userCredential.user
        const userId = userCredential.user.uid;
        const tokenId = userCredential.user.getIdToken().then((token) => {
          dispatch(signIn({userId, token}))
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      }) 
    }
  } 

  const signUpHandler = async () => {
    // create account
    if (!validateEmail(email)) {
      setValidationText('Invalid Email. Please enter a valid email address');
      setIsModalVisible(true)
      return;
    } else if (!validatePassword(password)) {
      setValidationText('Invalid Password. Please enter a password with at least 6 characters');
      setIsModalVisible(true)
      return;
    } else {
      createUserWithEmailAndPassword(FIREBASE_AUTH, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        const userId = user.uid
        const tokenId = userCredential.user.getIdToken().then((token) => {
          dispatch(signIn({userId, token}))
          writeUserData(userId, email)
        })
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        // ..
      });
    }
  }

  const onHandleCancel = () => {
    setIsModalVisible(false)
  }

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, currentUser => {
      console.log(`user changed: ${currentUser}`)
    })
  },[])

  return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
        <View style={styles.title}>
            <Text style={{fontFamily:'MORGANA', fontSize:84, color:colors.blue}}>Torchnd</Text>
            <Image source={require('../../../src/assets/splash.png')} style={{width:'24%', aspectRatio:1}} />        
        </View>
        {
          isLogin ? 
        <View  style={styles.body}>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='email' autoCapitalize='none' keyboardType="email-address" defaultValue={email} onChangeText={(text) => setEmail(text)}></TextInput>
            <TextInput style={styles.input} secureTextEntry={true} placeholder='password' autoCapitalize='none' defaultValue={password} onChangeText={(text) => setPassword(text)}></TextInput>
          </View>
          <View style={styles.authContainer}>
            <Pressable style={({pressed}) => [{backgroundColor: pressed ? colors.violet_dark:colors.violet},styles.loginBtn]} onPress={signInHandler}>
              <Text style={{fontFamily:'lost-ages', fontSize:24, color:colors.white}}>Login</Text>
            </Pressable>
            <Pressable style={({pressed}) => [{backgroundColor:pressed ? colors.orange: colors.orange_a,},styles.signUpBtn]} onPress={() => setIsLogin(false)}>
              <Text style={{fontFamily:'lost-ages', fontSize:20, color:colors.violet_dark}}>
                Create account
              </Text>
            </Pressable>
            <Pressable style={styles.signUpGoogleBtn}>
              <Text style={{fontFamily:'lost-ages', fontSize:20, color:colors.violet_dark}}>
                SignUp With Google
              </Text>
            </Pressable>
            <Text style={{fontFamily:'lost-ages', fontSize:16, color:colors.violet_dark, marginTop:10}}>Forgot your password?</Text>
          </View>
        </View>
            :
          <View style={styles.body2}>
            <View style={styles.inputContainer}>
              <TextInput style={styles.input} placeholder='email' autoCapitalize='none' defaultValue={email} onChangeText={(text) => setEmail(text)}></TextInput>
              <TextInput style={styles.input} secureTextEntry={true} placeholder='password' autoCapitalize='none' defaultValue={password} onChangeText={(text) => setPassword(text)}></TextInput>
            </View>
            <View style={styles.authContainer}>
              <Pressable style={({pressed}) => [{backgroundColor: pressed ? colors.violet_dark:colors.violet},styles.loginBtn]} onPress={signUpHandler}>
                <Text style={{ fontFamily: 'lost-ages', fontSize: 24, color: colors.white }}>SignUp</Text>
              </Pressable>
              <Pressable onPress={() => setIsLogin(true)}>
                <Text style={{ fontFamily: 'lost-ages', fontSize: 16, color: colors.violet_dark, marginTop: 10 }}>Go back</Text>
              </Pressable>
            </View>
            { isModalVisible && <ModalValidation textValidation={validationText} onHandleCancel={onHandleCancel}/>}
          </View>
        }
      </KeyboardAvoidingView>
  )
}

export default Login
