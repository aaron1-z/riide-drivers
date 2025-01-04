import React from 'react';
import { View, TextInput, StyleSheet, Text, Image, Alert } from 'react-native';  // Import Alert here
import Button from '../components/Button';
import Colors from '../utils/colors';

const LoginScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Login.png')} style={styles.image} />
      <Text style={styles.title}>Log In</Text>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor={Colors.textSecondary} />
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor={Colors.textSecondary}
        secureTextEntry
      />
      <Button title="Log In" onPress={() => Alert.alert('Logging in...')} /> {/* Use Alert here */}
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
