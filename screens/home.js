import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import colors from '../settings/colors';
import BigBtn from '../components/getstarted';

import { StyleSheet } from 'react-native';


export default function HomeScreen({ navigation }) {
  return (
    <View style = {styles.container}>
        <Text style = {styles.logo}>UrCute</Text>
        <View style={{ marginTop: quarterHeight }}>
          <BigBtn text='Get Started' />
        </View>
    </View>
  );
}

const { height } = Dimensions.get('window');
const quarterHeight = height * 0.25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  text: {
    color: colors.text,
    fontSize: 48,
  },
  logo: {
    color: colors.text,
    fontSize: 80,
    marginTop: quarterHeight,
  }
});