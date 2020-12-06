import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Style'



const Task =(props) =>{
    return (
  
      <View style={styles.task}>
        <View style={{ flex:1,flexDirection:"row",justifyContent:'space-between',marginTop:15,}}>
          <Text style={styles.TextTasks }> {props.text}</Text>
          <TouchableOpacity style={ styles.priority}> 
          </TouchableOpacity>
          </View>
      </View>
        );
  
  }

  export default Task;