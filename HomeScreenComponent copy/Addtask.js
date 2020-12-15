import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Style'
const AddTasks=()=>{

    const navigation=useNavigation();
    return (
    <View style={styles.container}>
        <View style={styles.SectionStyleAdd}>
            <TouchableOpacity   style={{flexDirection:"row",justifyContent:"center",alignItems:"center",width:200}} >
            <Image source={require('../Icon/add.png')} style={styles.ImageStyle} />
        <Text> Créer une tâche</Text>
        </TouchableOpacity>
        </View>
    </View>
      );
    }
  
    export default AddTasks;