import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useState} from "react";

import SearchBar from './HomeScreenComponent/SearchBar';
import styles from './Style'
import AddTasks from './HomeScreenComponent/Addtask';
import Tasks from './HomeScreenComponent/Task';


const Buttons = ({onPress})=>{
  const functions= React.useContext(Context)

  return(
    <View style={styles.container}>
    <View style={styles.SectionStyleAdd}>
        <TouchableOpacity onPress={functions.printBonjour}  style={{flexDirection:"row",justifyContent:"center",alignItems:"center",width:200}} >
        <Image source={require('./Icon/add.png')} style={styles.ImageStyle} />
    <Text> Créer une tâche</Text>
    </TouchableOpacity>
    </View>
</View>
  )
}
const Context = React.createContext();
export default function HommeScreen() {
    const [tasks, settasks] = useState([]);
    const [taskName,settaskName] = useState("tache 1");


  const valueContext = {
    printBonjour: () => { 
        settasks([
        ...tasks,
        {
          id:tasks.length,
          name:taskName
        }
      ]);
      return console.log(tasks)},
    printBonsoir: () => { console.log("bonsoir")}
  };

  return (
<Context.Provider value={valueContext}>
    <View style={{ flex: 1, marginTop:50}}>
        <View style={{flexDirection:"row"  }}>
            <SearchBar />
        </View>
        <View>
           <Text style={ styles.title }> Tâche à faire:</Text>
        </View>
       
        <View style={{ marginTop:15 }}>
        <Tasks></Tasks>
        <Tasks></Tasks>
        <Tasks></Tasks>
        <Tasks></Tasks>
        <Tasks></Tasks>
        </View>
        <View style={{ position:"absolute",bottom:0,right:0,marginBottom:30,marginRight:25}}>
        <Buttons></Buttons>

        </View>
    </View>
</Context.Provider>
    
  );
}
