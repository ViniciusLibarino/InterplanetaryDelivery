import React, {Dispatch} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import {styles} from './styles';

type Props = {
  selectedButton: 'earth' | 'mars';
  handlePress: Dispatch<React.SetStateAction<'earth' | 'mars'>>;
};
export function ButtonsSelectPlanet({selectedButton, handlePress}: Props) {
  return (
    <View style={styles.wrapperButtons}>
      <TouchableOpacity
        onPress={() => handlePress('earth')}
        activeOpacity={0.7}
        style={
          selectedButton === 'earth' ? styles.buttonActive : styles.button
        }>
        <FAIcon
          name="globe-americas"
          size={24}
          color={selectedButton === 'earth' ? '#ffff' : '#674ea7'}
        />
        <Text
          style={
            selectedButton === 'earth' ? styles.titleActive : styles.title
          }>
          Terra
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => handlePress('mars')}
        activeOpacity={0.7}
        style={selectedButton === 'mars' ? styles.buttonActive : styles.button}>
        <FAIcon
          name="globe"
          size={24}
          color={selectedButton === 'mars' ? '#ffff' : '#674ea7'}
        />
        <Text
          style={selectedButton === 'mars' ? styles.titleActive : styles.title}>
          Marte
        </Text>
      </TouchableOpacity>
    </View>
  );
}
