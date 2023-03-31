import * as React from 'react';
import {Button, View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import SearchHospitalsForm from '../../components/SearchHospitalForm';
//Components
import HospitalCard from '../../components/HospitalCard';

export default function FindHospitals({navigation}){
    const goBackPress = () => navigation.goBack();

    function Header(props){
        return(
            <View className="w-full h-40 flex-col items-center justify-center">
                <Text className="">Home Screen</Text>
                <TouchableOpacity onPress={props.onPress} className="absolute top-2 left-4">
                    <Ionicons name="arrow-back" size={32} color="green" />
                 </TouchableOpacity>
            </View>
        );
    }


    return(
        <SafeAreaView className="flex-1 items-center justify-center space-y-4">
            {/* Header Section */}
            <Header onPress={goBackPress}/>
            {/* Search Section */}
            <SearchHospitalsForm />
            {/* Results Section */}
            <View className="w-full px-4 pr-4 mt-6">
                <Text className="">Health Facilities</Text>
                <HospitalCard/>
                <HospitalCard/>
                <HospitalCard/>
                <HospitalCard/>
            </View>
        </SafeAreaView>
    );
}