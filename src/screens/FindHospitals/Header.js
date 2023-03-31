import * as React from 'react';
import {TouchableWithoutFeedback, View, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';


export default function Header(props){
    return(
        <View className="w-full h-40 bg-gray-600 relative">
            <Text className="">Home Screen</Text>
            <TouchableWithoutFeedback onPress={props.onPress} className="absolute top-20 right-20">
                <Ionicons name="arrow-back" size={32} color="green" />
             </TouchableWithoutFeedback>
        </View>
    );
}