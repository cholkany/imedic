import React from 'react';
import { View, Text, FlatList } from 'react-native';

const MedicationsListScreen = ({ medications }) => {
  const renderItem = ({ item }) => (
    <View>
      <Text>{item.name}</Text>
      <Text>{item.dosage} mg</Text>
      <Text>{item.frequency} times per day</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={medications}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default MedicationsListScreen;


