import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from './styles';

export function EmptyComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Você não tem nenhum endereço cadastrado por enquanto...
      </Text>

      <Icon name="planet" size={64} color="#674ea7" />
    </View>
  );
}
