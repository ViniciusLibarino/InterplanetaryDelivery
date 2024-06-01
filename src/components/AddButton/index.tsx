import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {AppStackNavigationProp} from '../../routes';
import {styles} from './styles';

export function AddButton() {
  const navigation =
    useNavigation<AppStackNavigationProp<'AddAddressScreen'>>();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.7}
      onPress={() => navigation.navigate('AddAddressScreen')}>
      <View style={styles.wrapper}>
        <Icon name="plus" size={20} color="#674ea7" />
        <Text style={styles.title}>Adicionar novo endereço</Text>
      </View>
    </TouchableOpacity>
  );
}
