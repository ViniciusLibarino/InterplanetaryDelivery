/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList, View} from 'react-native';
import {AddButton} from '../AddButton';
import {AddressItem} from '../AddressItem';
import {EmptyComponent} from '../EmptyComponent';
import {styles} from './styles';

type DataProps = {
  id: number;
  title: string;
  address: string;
  planet: 'earth' | 'mars';
};

type ListComponentProps = {
  data: DataProps[];
};

function renderItem({item}: {item: DataProps}) {
  return <AddressItem item={item} />;
}

function ItemSeparator() {
  return <View style={styles.separator} />;
}

export function ListComponent({data}: ListComponentProps) {
  return (
    <View style={styles.container}>
      <AddButton />
      <FlatList
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<View style={{height: 24}} />}
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={<EmptyComponent />}
        ListFooterComponent={<View style={{height: 24}} />}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={item => String(item.id)}
      />
    </View>
  );
}
