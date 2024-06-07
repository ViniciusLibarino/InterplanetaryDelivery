import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {Header} from '../../components/Header';
import {ListComponent} from '../../components/ListComponent';
import {useAddressStore} from '../../service/addressStore';
import {styles} from './styles';

export type AddressProps = {
  id: number;
  title: string;
  address: string;
  planet: 'earth' | 'mars';
};

export function Home() {
  const {address} = useAddressStore();

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f3ed" />
      <SafeAreaView style={styles.container}>
        <View style={styles.wrapper}>
          <Header title="Endereços" />
          <ListComponent data={address} />
        </View>
      </SafeAreaView>
    </>
  );
}
