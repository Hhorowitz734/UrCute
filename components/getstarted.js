import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Dimensions } from 'react-native';
import colors from '../settings/colors';


export default function BigBtn({ text, onPress }){
    return(
        <TouchableOpacity onPress = {onPress}>
            <View style = {styles.button}>
                <Text style = {styles.buttonText}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    button: {
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: colors.pinkish,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 30,
        textAlign: 'center',
    }
})