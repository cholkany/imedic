import * as React from "react";
import {Pressable, View, Text,TextInput } from 'react-native';
import MapView from 'react-native-maps';


export default function HospitalCard(props) {
    return(
        <View className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <MapView />
            <View className="bg-white View-4 sm:View-6">
                <View className="mt-0.5 text-lg text-gray-900">
                    <Text>How to position your furniture for positivity</Text>
                </View>
                <View className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
                    <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae</Text>
                </View>
            </View>
        </View>
    )
}
