import React from 'react';
import {SafeAreaView} from 'react-native';
import Lotiie from 'lottie-react-native';
import github from './github.json';

export default function App() {
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lotiie resizeMode="contain" autoSize source={github} autoPlay loop />
    </SafeAreaView>
  );
}
