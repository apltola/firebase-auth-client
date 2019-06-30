import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default function App() {

  useEffect(() => {
    // firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyCmrX54z48_H4d0U_oinLbUsLXzATdxyKQ",
      authDomain: "one-time-password-3fad5.firebaseapp.com",
      databaseURL: "https://one-time-password-3fad5.firebaseio.com",
      projectId: "one-time-password-3fad5",
      storageBucket: "",
      messagingSenderId: "593488694562",
      appId: "1:593488694562:web:219b9f7f126266b7"
    };

    // initialize firebase
    firebase.initializeApp(firebaseConfig);

    return () => null;
  }, []);

  return (
    <View style={styles.container}>
      <SignUpForm />
      <SignInForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },
});
