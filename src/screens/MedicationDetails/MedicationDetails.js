import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MedicationDetails ({ route }){
  const medication = [{
    name: "Pencillin",
    dosage: 4,
    time: new Date(1233)
  }]

  return (
    <View className="w-screen h-screen justify-center bg-slate-300 items-center shadow">
      <Text className="font-medium">{medication.name}</Text>
      <Text>Dosage:</Text>
      <Text>{medication.dosage}</Text>
      <Text>Time:</Text>
      <Text>{medication.time}</Text>
    </View>
  );
}