import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

const Loader = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#344955', alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ color: '#F9aa33', fontSize: 20, fontWeight: 'bold' }}>Loading </Text>
      <ActivityIndicator size="large" color="#F9aa33" />
    </View>
  );
};

export default Loader;
