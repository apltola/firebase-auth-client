import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-3fad5.cloudfunctions.net';

const SignUpForm = () => {
  const [phone, setPhone] = useState('')

  const handleSubmit = async () => {
    try {
      const create = await axios.post(`${ROOT_URL}/createUser`, {phone: phone})
      console.log('createUser => ', create.data);
      const request = await axios.post(`${ROOT_URL}/requestOneTimePassword`, {phone: phone})
      console.log(request.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View>
      <Input
        style={styles.inputStyle}
        //placeholder="Phone number"
        label="Phone number"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={phone => setPhone(phone)}
      />
      <Button
        style={styles.buttonStyle}
        title="Sign up"
        onPress={handleSubmit}
      />
      {/* <Text>phone: {phone || 'null'}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 20,
  }
});

export default SignUpForm;