import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const EditMedicationScreen = ({ medication }) => {
  const [name, setName] = useState(medication?.name || '');
  const [dosage, setDosage] = useState(medication?.dosage || '');
  const [frequency, setFrequency] = useState(medication?.frequency || '');

  const handleSave = () => {
    if (medication) {
      // Update existing medication
      medication.name = name;
      medication.dosage = dosage;
      medication.frequency = frequency;
    } else {
      // Create new medication
      const newMedication = { name, dosage: parseInt(dosage), frequency: parseInt(frequency) };
      
      // Add newMedication to list of medications in app

    }
    
    // Navigate back or close modal
    
  };

  return (
    <View className="p-4">
        <Text className="text-lg font-bold mb-2">Name:</Text>
        <TextInput value={name} onChangeText={(e)=>setName(e.target.value)} className="border rounded p-2 mb-4" />
        
        <Text className="text-lg font-bold mb-2">Dosage:</Text>
        <TextInput value={dosage} onChangeText={(e)=>setDosage(e.target.value)} keyboardType="numeric" className="border rounded p-2 mb-4" />
        
        <Text className="text-lg font-bold mb-2">Frequency:</Text>
        <TextInput value={frequency} onChangeText={(e)=>setFrequency(e.target.value)} keyboardType="numeric" className="border rounded p-2 mb-4" />
        
        <Button title="Save" onPress={handleSave} />
    </View>
  );
};

export default EditMedicationScreen;
