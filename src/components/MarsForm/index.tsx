import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import {useAddressStore} from '../../service/addressContext';
import {ButtonAddAddress} from '../ButtonAddAddress';
import {FormTextInput} from '../FormTextInput';
import {MarsFormSchema, marsFormSchema} from './marsFormSchema';
import {styles} from './styles';

export function MarsForm() {
  const addressStore = useAddressStore();
  const navigation = useNavigation();

  const {control, formState, handleSubmit} = useForm<MarsFormSchema>({
    resolver: zodResolver(marsFormSchema),
    defaultValues: {
      planet: 'mars',
      addressName: '',
      addressLote: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: MarsFormSchema) => {
    console.log('data', data);
    addressStore.addAddress({
      title: data.addressName,
      planet: 'mars',
      address: data.addressLote,
      id: Number(data.addressLote),
    });
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <FormTextInput
        control={control}
        name="addressName"
        label="Nome do endereço"
        placeholder="Digite o nome do endereço"
        errorMessage={formState.errors.addressName?.message}
      />
      <FormTextInput
        control={control}
        name="addressLote"
        label="Lote"
        placeholder="Digite o lote do endereço"
        keyboardType="numeric"
        errorMessage={formState.errors.addressLote?.message}
      />
      <ButtonAddAddress
        disabled={!formState.isValid}
        title="Adicionar endereço"
        handlePress={handleSubmit(onSubmit)}
      />
    </View>
  );
}
