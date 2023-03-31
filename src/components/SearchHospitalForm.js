import { useState } from 'react';
import {Pressable, View, Text,TextInput, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function SearchHospitalsForm(){
    const [text, setText] = useState('');
    return(
        <View className="flex flex-col justify-evenly w-75 p-4 mx-4 mr-4 mt-2 rounded-lg Text-4 bg-gray-500 shadow-lg sm:Text-6 lg:Text-8">
            <TextInput
            className="p-4 rounded-lg border-gray-200 Text-4 pr-12 text-sm bg-zinc-300 "
            placeholder="Enter email"
            />
            <GooglePlacesAutocomplete
                placeholder='Search'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    console.log(data, details);
                }}
                query={{
                    key: 'YOUR API KEY',
                    language: 'en',
                }}
            />
            <TouchableOpacity className="rounded-lg flex flex-row justify-center bg-indigo-600 p-4 ">
                <Text className="text-4 text-white">Search Health Facilities</Text>
            </TouchableOpacity>
        </View>
    );
}