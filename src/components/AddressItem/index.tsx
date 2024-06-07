import React from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {useAddressStore} from '../../service/addressStore';
import {styles} from './styles';

type DataProps = {
  id: number;
  title: string;
  address: string;
  planet: 'earth' | 'mars';
};

export function AddressItem({item}: {item: DataProps}) {
  const {removeAddress} = useAddressStore();

  const handleRemoveAddress = () => {
    Alert.alert('Remover endereço da lista?', 'Tem certeza?', [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Sim',
        style: 'destructive',
        onPress: () => removeAddress(item.id),
      },
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.wrapper}>
          {item.planet === 'earth' ? (
            <FAIcon name="globe-americas" size={32} color="#674ea7" />
          ) : (
            <FAIcon name="globe" size={32} color="#674ea7" />
          )}
          <Text style={styles.title}>{item.title}</Text>
        </View>
        <View>
          <Text style={styles.addressDetails}>{item.address}</Text>
        </View>
      </View>

      <View style={styles.contentActions}>
        <TouchableOpacity activeOpacity={0.8} onPress={handleRemoveAddress}>
          <FAIcon name="trash" size={20} color="#674ea7" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
