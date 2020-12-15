import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,CheckBox,Image,TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../Style';
import { MaterialIcons } from '@expo/vector-icons'; 




const Task =(props) =>{
    return (
      <View style={styles.task}>
        <View style={{ flex:1,flexDirection:"row",justifyContent:'space-between',marginTop:15,}}>
				<CheckBox
          value={props.ischecked}
          onValueChange={props.setischecked}
          style={styles.checkbox}
        />
          <Text style={styles.TextTasks }> {props.text}</Text>
          <TouchableOpacity onPress={props.ondelete}>
					<MaterialIcons name="delete" size={24} color="black" />
        </TouchableOpacity>
          </View>
      </View>
        );
  }

  export default Task;