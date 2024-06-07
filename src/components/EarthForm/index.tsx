import {zodResolver} from '@hookform/resolvers/zod';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView, View} from 'react-native';
import {useAddressStore} from '../../service/addressStore';
import {ButtonAddAddress} from '../ButtonAddAddress';
import {FormTextInput} from '../FormTextInput';
import {EarthFormSchema, earthFormSchema} from './earthFormSchema';
import {styles} from './styles';

export function EarthForm() {
  const {addNewAddress} = useAddressStore();
  const navigation = useNavigation();

  const {control, formState, handleSubmit} = useForm<EarthFormSchema>({
    resolver: zodResolver(earthFormSchema),
    defaultValues: {
      planet: 'earth',
      addressName: '',
      addressStreet: '',
      addressNumber: '',
      addressComplement: '',
      addressDistrict: '',
      addressCity: '',
      addressState: '',
      addressCountry: '',
      addressZipCode: '',
    },
    mode: 'onChange',
  });

  const onSubmit = (data: EarthFormSchema) => {
    console.log('data', data);
    addNewAddress({
      title: data.addressName,
      planet: 'earth',
      address: `${data.addressStreet}, ${data.addressNumber} - ${data.addressComplement} - ${data.addressCity} - ${data.addressState}`,
      id: Number(data.addressZipCode),
    });
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <FormTextInput
          control={control}
          name="addressName"
          label="Nome do endereço"
          placeholder="Digite o nome do endereço"
          errorMessage={formState.errors.addressName?.message}
        />
        <FormTextInput
          control={control}
          name="addressStreet"
          label="Rua"
          placeholder="Digite sua rua"
          errorMessage={formState.errors.addressStreet?.message}
        />
        <FormTextInput
          control={control}
          name="addressNumber"
          label="Número"
          placeholder="Digite o número"
          keyboardType="numeric"
          errorMessage={formState.errors.addressNumber?.message}
        />
        <FormTextInput
          control={control}
          name="addressComplement"
          label="Complemento"
          placeholder="Digite o complemento"
          errorMessage={formState.errors.addressComplement?.message}
        />
        <FormTextInput
          control={control}
          name="addressCity"
          label="Cidade"
          placeholder="Digite sua cidade"
          errorMessage={formState.errors.addressCity?.message}
        />
        <FormTextInput
          control={control}
          name="addressState"
          label="Estado"
          placeholder="Digite seu estado"
          maxLength={2}
          errorMessage={formState.errors.addressState?.message}
        />
        <FormTextInput
          control={control}
          name="addressCountry"
          label="País"
          placeholder="Digite seu país"
          errorMessage={formState.errors.addressCountry?.message}
        />
        <FormTextInput
          control={control}
          name="addressZipCode"
          label="CEP"
          placeholder="Digite seu CEP"
          keyboardType="numeric"
          maxLength={8}
          errorMessage={formState.errors.addressZipCode?.message}
        />
        <ButtonAddAddress
          disabled={!formState.isValid}
          title="Adicionar endereço"
          handlePress={handleSubmit(onSubmit)}
        />
      </ScrollView>
    </View>
  );
}
