import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput,ScrollView, KeyboardAvoidView,View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {useState} from "react";
import Modal from 'react-native-modal';
import SearchBar from './HomeScreenComponent/SearchBar';
import styles from './Style';
import { Dimensions } from 'react-native';
import AddTasks from './HomeScreenComponent/Addtask';
import Tasks from './HomeScreenComponent/Task';
import Task from './HomeScreenComponent/Task';
import { MaterialIcons } from '@expo/vector-icons'; 
import { List } from '@material-ui/core';
import {ListStore} from './TaskStore'
import {toJS} from 'mobx';
import ModalPerso from './Modal'
import { AppState } from 'react-native';

const BLUE= "#7384f0";
const LIGHT_GREY="#428AF8"

const Buttons = (props)=>{
  return(
  <View style={styles.container}>
    <View style={styles.SectionStyleAdd}>
      <TouchableOpacity onPress={props.press}  style={{flexDirection:"row",justifyContent:"center",alignItems:"center",width:200}} >
        <Image source={require('./Icon/add.png')} style={styles.ImageStyle} />
    		<Text> Créer une tâche</Text>
    	</TouchableOpacity>
    </View>
		</View>
  )
}

export default function FinishTaskScreen({ navigation, route }) {

  const [list, setList] = useState([]);
	const [taskName,settaskName] = useState("");
	const [taskDescription, settaskDescription] = useState("");
	const [taskPriority, settaskPriority] = useState("");
	const [taskstatus, settaskstatus] = useState("en cours");
	const [isChecked, setisChecked] = useState(true);
	const [showModal, setShowModal] = useState(false);

	const [updateVal, setUpdateVal] = useState(false);
  const forceUpdate = newState => {
    if (newState === 'active')
      setUpdateVal(!updateVal); // forces a rerender
  }
  React.useEffect(() => {
    setTimeout(() => {
			setUpdateVal(!updateVal);
			console.log("dsqdqsd") // forces a rerender
    }, 3000);
  }, [updateVal]);

function deletetask(todo) {
	ListStore.removeTodo(todo)
	var obj=ListStore.getList
	const tmp = [...list,obj];
	setList(tmp);
}
 function add() {
	ListStore.addTodo(taskName,taskDescription,taskPriority,taskstatus)
	var obj=ListStore.getList
	console.log(obj)
	const tmp = [...list,obj];
		setList(tmp);
	console.log(tmp)
	if(ListStore.list.length==0){
		console.log("rien")
	}else{
	console.log("il y a quelque chose dans la liste")
	}
	settaskName('')
	settaskPriority('')
	settaskDescription('')
}
const handlebutton=()=>{
	setShowModal(!showModal);
}
console.log("salulut"+ ListStore.list.length)
return (
<View style={{ flex:1 }}>
<ModalPerso showModal={showModal} handlebutton={handlebutton} taskName={taskName} settaskName={settaskName} taskDescription={taskDescription} settaskDescription={settaskDescription} settaskPriority={settaskPriority} addItem={add}  ></ModalPerso>
<View style={{ flex: 1, marginTop:50}}>
<View style={{flexDirection:"row"  }}>
        <SearchBar/>
      </View>
			<View>
        <Text style={ styles.title }> Tâche Terminée:</Text>
      </View>
	{ ListStore.getTaskFinished.slice(0).reverse().map((todo,index)=>{
		return <Task key={index} ondelete={()=>deletetask(todo)}  text={todo.title}></Task>
	})}
</View>
</View>
  );
}

