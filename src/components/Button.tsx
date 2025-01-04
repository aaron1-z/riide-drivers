import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import Colors from '../utils/colors';

interface ButtonProps {
  title: string;
  onPress: () => void;
  type?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ title, onPress, type = 'primary' }) => {
  return (
    <TouchableOpacity
      style={[styles.button, type === 'secondary' && styles.secondaryButton]}
      onPress={onPress}
    >
      <Text style={[styles.text, type === 'secondary' && styles.secondaryText]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.buttonPrimary,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 10,
    width: '100%',
  },
  secondaryButton: {
    backgroundColor: Colors.buttonSecondary,
  },
  text: {
    color: Colors.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryText: {
    color: Colors.textSecondary,
  },
});

export default Button;
