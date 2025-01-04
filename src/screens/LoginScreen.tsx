import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, Image, Alert } from 'react-native';  // Import Alert here
import Button from '../components/Button';
import Colors from '../utils/colors';
import { loginUser, googleLogin, icpLogin } from '../services/api'; // Import the API service

const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    try {
      const token = await loginUser(email, password);
      console.log('Token:', token);
      Alert.alert('Login successful', `Token: ${token}`);
    } catch (error) {
      Alert.alert('Login failed', 'Invalid credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Login.png')} style={styles.image} />
      <Text style={styles.title}>Log In</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor={Colors.textSecondary}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={Colors.textSecondary}
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Log In" onPress={handleLogin} />
      <Button title="Log In with Google" onPress={googleLogin} />
      <Button title="Log In with ICP" onPress={icpLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    backgroundColor: Colors.buttonSecondary,
    color: Colors.textPrimary,
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
  },
});

export default LoginScreen;