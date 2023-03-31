import * as React from 'react';
import {Button, View, Text } from 'react-native';

export default function Home({navigation}){
    return(
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Detailed')}
            />
            <Button
                title="Go to Find Hospital"
                onPress={() => navigation.navigate('FindHospitals')}
            />
            <Button
                title="Go to Find Hospital"
                onPress={() => navigation.navigate('FindHospitals')}
            />
            <Button
                title="Go to  Add Mediacations"
                onPress={() => navigation.navigate('AddMedication')}
            />
             <Button
                title="Go to  Mediacations Details"
                onPress={() => navigation.navigate('MedicationDetails')}
            />
             <Button
                title="Go to  Edit Mediacations"
                onPress={() => navigation.navigate('EditMedication')}
            />
        </View>
    );
}