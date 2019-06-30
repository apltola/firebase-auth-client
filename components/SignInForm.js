import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';

const ROOT_URL = 'https://us-central1-one-time-password-3fad5.cloudfunctions.net';

const SignInForm = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    try {
      const reqData = { phone: phone, code: code };
      let { data } = await axios.post(`${ROOT_URL}/verifyOneTimePassword`, reqData);
      console.log(data);
      firebase.auth().signInWithCustomToken(data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={{ marginTop: 40 }}>
      <View>
        <Input
          style={styles.inputStyle}
          placeholder="phone"
          label="Phone number"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={phone => setPhone(phone)}
        />
        {/* <Text>phone: {phone || 'null'}</Text> */}
      </View>
      <View style={{ marginTop: 30 }}>
        <Input
          style={styles.inputStyle}
          placeholder="code"
          label="Verification code"
          keyboardType="phone-pad"
          value={code}
          onChangeText={code => setCode(code)}
        />
        <Button
          style={styles.buttonStyle}
          title="Log in"
          onPress={handleSubmit}
        />
        {/* <Text>code: {phone || 'null'}</Text> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 30,
  },
  inputStyle: {
    //marginTop: 20
  }
});

export default SignInForm;