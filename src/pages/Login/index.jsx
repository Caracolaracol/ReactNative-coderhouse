import React, {  useEffect, useState } from 'react'
import { View, Text, TextInput, KeyboardAvoidingView, StyleSheet, Pressable, Image, Platform } from 'react-native'
import { signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'

import colors from '../../theme/colors'

import { URL_AUTH_SIGNUP } from '../../constants/database'
import { signIn, signUp} from '../../store/features/authSlice'
import { DB_TORCHND, FIREBASE_AUTH } from '../../services/firebaseConfig'
import { ref, set } from 'firebase/database'
import ModalValidation from './ModalValidation'

const validateEmail = (email) => {
  // Regular expression pattern for basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePassword = (password) => {
  const passwordRegex = /^.{6,}$/;
  return passwordRegex.test(password);
}

const Login = () => {
  const dispatch = useDispatch()
  const [user, setUser] = useState('')
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
    /* const auth = getAuth() */
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
        const userId = data.localId
        dispatch(signUp(data))
        writeUserData(userId, email)
      } catch (error) {
        console.log(error)
      } finally {
      }
    }
  }

  const onHandleCancel = () => {
    setIsModalVisible(false)
  }

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, currentUser => {
      setUser(currentUser)
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
            <Pressable style={styles.loginBtn} onPress={signInHandler}>
              <Text style={{fontFamily:'lost-ages', fontSize:24, color:colors.white}}>Login</Text>
            </Pressable>
            <Pressable style={styles.signUpBtn} onPress={() => setIsLogin(false)}>
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
              <Pressable style={styles.loginBtn} onPress={signUpHandler}>
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

const styles = StyleSheet.create({ 
  container:{
    flex:1,
    flexDirection:'column',
    justifyContent:'space-around',
    alignItems:'center'
  },
  title: {
    flex:1,
    flexDirection:'row',
    alignItems:'flex-end',
  },
  body: {
    flex:2,
    alignItems:'center'
  },
  inputContainer:{
    width:'100%',
    marginBottom:20
  }, 
  input: {
    backgroundColor:colors.yellow,
    color:colors.violet_dark,
    aspectRatio:7,
    margin:10,
    padding:4,
    borderRadius:10,
    fontFamily:'lost-ages',
    fontSize:17,
    borderBottomWidth:.4,
    borderColor:colors.red
  },
  authContainer:{
    width:'100%',
    flex:1,
    alignItems:'center',
    gap:10
  },
  loginBtn: {
    aspectRatio:5,
    alignItems:'center',
    backgroundColor:colors.violet,
    padding:10,
    borderRadius:10,
  },
  signUpBtn:{
    marginTop:80,
    aspectRatio:5,
    alignItems:'center',
    backgroundColor:colors.orange_a,
    opacity:.6,
    padding:10,
    borderRadius:10,
  },
  signUpGoogleBtn: {
    marginTop:10,
    aspectRatio:6,
    alignItems:'center',
    backgroundColor:colors.orange,
    opacity:.6,
    padding:10,
    borderRadius:10,
  },


  body2: {
    flex:2,
    alignItems:'center'
  },

})