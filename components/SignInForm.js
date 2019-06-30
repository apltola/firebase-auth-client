import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input, Button } from 'react-native-elements';
import axios from 'axios';

const ROOT_URL = 'https://us-central1-one-time-password-3fad5.cloudfunctions.net';

const SignInForm = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const handleSubmit = async () => {
    try {

    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View>
      <View style={{ marginBotton: 10 }}>
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
          title="Submit"
          onPress={handleSubmit}
        />
        <Text>phone: {phone || 'null'}</Text>
      </View>
      <View style={{ marginBotton: 10 }}>
        <Input
          style={styles.inputStyle}
          //placeholder="Phone number"
          label="Verification code"
          keyboardType="phone-pad"
          value={code}
          onChangeText={code => setCode(code)}
        />
        <Button
          style={styles.buttonStyle}
          title="Submit"
          onPress={handleSubmit}
        />
        <Text>code: {phone || 'null'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 20,
  }
});

export default SignInForm;