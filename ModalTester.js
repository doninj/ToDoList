import styles from './Style'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,Modal,TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const  ModalScreen=({ navigation }) =>{
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 30 }}>This is a modal!</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}  >
        <Text style={{ color:"purple" }}> Cliquer Ici pour retourner sur la page d'accueil !</Text>
      </TouchableOpacity>

    </View>
  );
}

export default ModalScreen;
