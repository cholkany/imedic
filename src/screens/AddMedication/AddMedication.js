import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function AddMedicationScreen(){
  const [name, setName] = useState('');
  const [dosage, setDosage] = useState('');
  const [time, setTime] = useState('');

  const handleAddMedication = () => {
    // Add new medication data to your app's state or database
    // ...

    // Clear input fields
    setName('');
    setDosage('');
    setTime('');
  }

  return (
    <View className="w-full h-full bg-white shadow rounded flex flex-col justify-around align-middle" >
      <Text>Add Medication</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        placeholder="Dosage"
        value={dosage}
        onChangeText={setDosage}
      />
      <TextInput
        placeholder="Time"
        value={time}
        onChangeText={setTime}
      />
      <TouchableOpacity onPress={handleAddMedication}>
      <Text >Add</Text>
    </TouchableOpacity>
  </View>
);
}