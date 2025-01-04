import React from 'react';
import { View, Image, Text, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack'; // Import StackNavigationProp
import { RootStackParamList } from '../navigation/types'; // Import the types
import Button from '../components/Button';
import Colors from '../utils/colors';

// Define the type for the navigation prop
type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Welcome.png')} style={styles.image} />
      <Text style={styles.title}>Welcome to Riide</Text>
      <Text style={styles.subtitle}>Ready to get started? Log in or sign up now.</Text>
      <Button title="Log In" onPress={() => navigation.navigate('Login')} />
      <Button title="Sign Up" onPress={() => Alert.alert('Sign-up flow here')} type="secondary" />
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
    height: 300,
    resizeMode: 'contain',
  },
  title: {
    color: Colors.textPrimary,
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
  },
  subtitle: {
    color: Colors.textSecondary,
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
  },
});

export default WelcomeScreen;
