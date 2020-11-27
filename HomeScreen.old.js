import { useNavigation } from '@react-navigation/native';
import {useState} from "react";

import React from 'react';
import { StyleSheet, Text, Button,Image,TouchableOpacity,View, TextInput } from 'react-native';

const Context = React.createContext();

const Buttons=({route,title,description,image})=>{
     
    const navigation=useNavigation();
    return (
    <View style={styles.container}>
        <View style={styles.SectionStyle}>
            <TouchableOpacity onPress={() => navigation.openDrawer()} >
        <Image source={require('./Icon/Hamburger_icon.png')} style={styles.ImageStyle} />
        </TouchableOpacity>
        <TextInput
              style={{flex:1}}
              placeholder="Rechercher votre tâche"
              underlineColorAndroid="transparent"
          />
        </View>
    </View>
      );
}
const AddTasks=()=>{
  const functions= React.useContext(Context)

  const navigation=useNavigation();
  return (
  <View style={styles.container}>
      <View style={styles.SectionStyleAdd}>
          <TouchableOpacity  onPress={functions.printBonjour} style={{flexDirection:"row",justifyContent:"center",alignItems:"center",width:200}} >
          <Image source={require('./Icon/add.png')} style={styles.ImageStyle} />
      <Text> Créer une tâche</Text>
      </TouchableOpacity>
      </View>
  </View>
    );
  }
  const Buttons2 = ({onPress})=>{
    const functions= React.useContext(Context)
    return(
      <View style={styles.container}>
      <Button title="bonjour" onPress={functions.printBonjour}></Button>
      <Button title="bonsoir" onPress={functions.printBonsoir}></Button>
      <StatusBar style="auto" />
    </View>
    )
  }

const Task =() =>{
  return (

    <View style={styles.task}>
      <View style={{ flex:1,flexDirection:"row",justifyContent:'space-between',marginTop:15,}}>
        <Text style={styles.TextTasks }> Tâche 1</Text>
        <TouchableOpacity style={ styles.priority}> 
        </TouchableOpacity>
        </View>
    </View>
      );

}
const styles = StyleSheet.create({

    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      margin: 10
    },
    task:{
      borderBottomWidth:2,
      borderBottomColor:"grey",
      height:50,
      flexDirection:"row"
    },
    TextTasks:{
      fontSize:20
    },
    priority:{
      backgroundColor:"blue",
      width:15,
      height:15,
      alignSelf: 'center',
      borderRadius:50,
      marginRight:30
      

    },
    SectionStyle: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: .5,
      borderColor: '#000',
      height: 40,
      borderRadius: 5 ,
      elevation:10,
      margin: 10
  },
  SectionStyleAdd: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 20 ,
    margin: 10,
    elevation:6,
    shadowColor:"black"
},
  
  ImageStyle: {
      padding: 10,
      margin: 5,
      height: 25,
      width: 25,
      resizeMode : 'stretch',
      alignItems: 'center'
  },
  title:{
    fontSize:35,
    
  }
  
  });
  

const  HomeScreen=(navigation)=> {
  const [tasks, settasks] = useState([]);
  const [taskName,settaskName] = useState("tache 1");
  const Context = React.createContext();

  const valueContext = {
    printBonjour: () => { console.log("bonjour")},
    printBonsoir: () => { console.log("bonsoir")}
  };

  const returnState=()=>{
    settasks([
      ...tasks,
      {
        id:tasks.length,
        name:taskName
      }
    ]);
    return console.log(tasks)
  }
    return (
      <Context.Provider value={valueContext}>
      <View style={{ flex: 1, marginTop:50}}>
        <View style={{flexDirection:"row"  }}>
        <Buttons />
        <Buttons2></Buttons2>
        </View>
        <View>
           <Text style={ styles.title }> Tâche à faire:</Text>
        </View>
        <View style={{ marginTop:15 }}>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        <Task></Task>
        </View>
        <View style={{ position:"absolute",bottom:0,right:0,marginBottom:30,marginRight:25}}>
        </View>
      </View>
      </Context.Provider>
    );
    
  }

  export default HomeScreen;