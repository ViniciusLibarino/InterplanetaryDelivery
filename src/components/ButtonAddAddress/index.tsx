import React from 'react';
import {Text, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {styles} from './styles';

interface Props extends TouchableOpacityProps {
  handlePress: () => void;
  title: string;
}

export function ButtonAddAddress({
  title,
  handlePress,
  disabled,
  ...touchableOpacityProps
}: Props) {
  return (
    <TouchableOpacity
      onPress={handlePress}
      style={disabled ? styles.buttonDisabled : styles.button}
      activeOpacity={0.7}
      {...touchableOpacityProps}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
