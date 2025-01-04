// src/screens/OnboardingScreen.tsx
import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import Button from '../components/Button';
import Colors from '../utils/colors';

// Define the type for the navigation prop
type OnboardingScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Onboarding'>;

type Props = {
  navigation: OnboardingScreenNavigationProp;
};

const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/Onboarding.png')} style={styles.image} />
      <Text style={styles.title}>Welcome to Riide</Text>
      <Text style={styles.subtitle}>
        Drive with us and earn on your terms. Explore your journey ahead!
      </Text>
      <Button title="Next" onPress={() => navigation.navigate('Welcome')} />
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

export default OnboardingScreen;
