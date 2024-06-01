import React, {useState} from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';
import {ButtonsSelectPlanet} from '../../components/ButtonSelectPlanet';
import {EarthForm} from '../../components/EarthForm';
import {Header} from '../../components/Header';
import {MarsForm} from '../../components/MarsForm';
import {styles} from './styles';

export function AddAddress() {
  const [selectedButton, setSelectedButton] = useState<'earth' | 'mars'>(
    'earth',
  );

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#f9f3ed" />
      <SafeAreaView style={styles.container}>
        <Header title="Adicionar novo endereço" />
        <View style={styles.content}>
          <ButtonsSelectPlanet
            selectedButton={selectedButton}
            handlePress={setSelectedButton}
          />
          {selectedButton === 'earth' ? <EarthForm /> : <MarsForm />}
        </View>
      </SafeAreaView>
    </>
  );
}
