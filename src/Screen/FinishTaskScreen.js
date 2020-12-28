import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput,ScrollView, KeyboardAvoidView,View } from 'react-native';
import {useState} from "react";
import SearchBar from '../Components/SearchBar';
import Task from '../Components/Task';
import {ListStore} from '../../TaskStore'
import ModalPerso from '../Components/Modal'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

export default function FinishTaskScreen({ navigation, route }) {
  const [list, setList] = useState([]);
	const [taskName,settaskName] = useState("");
	const [taskDescription, settaskDescription] = useState("");
	const [taskPriority, settaskPriority] = useState("");
	const [taskstatus, settaskstatus] = useState("en cours");
	const [isChecked, setisChecked] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [search, setsearch] = useState("");
	const [updateVal, setUpdateVal] = useState(false);

  React.useEffect(() => {
    setTimeout(() => {
			setUpdateVal(!updateVal);
    }, 3000);
  }, [updateVal]);

	function deletetask(todo) {
		ListStore.removeTodo(todo)
		var obj=ListStore.getList
		const tmp = [...list,obj];
		setList(tmp);
		storeData()
	}
	const storeData = async () => {
		try {
			await AsyncStorage.setItem('name', JSON.stringify(ListStore.list))
			console.log("mis en sauvegarde")
		} catch (e) {
			console.log(ListStore.list)
	console.log(e)  }
	}
	function completed(todo){
		ListStore.toggleFinish(todo)
		setisChecked(!isChecked)
		console.log(ListStore.list)
		storeData()
	}
	function add() {
		ListStore.addTodo(taskName,taskDescription,taskPriority,taskstatus)
		var obj=ListStore.getList
		console.log(obj)
		const tmp = [...list,obj];
			setList(tmp);
		settaskName('')
		settaskPriority('')
		settaskDescription('')
	}
	const handlebutton=()=>{
		setShowModal(!showModal);
	}
	function compare( a, b ) {
		if ( a.priorite < b.priorite ){
			return 1;
		}
		if ( a.priorite > b.priorite ){
			return -1;
		}
		return 0;
	}
	return (
		<View style={{ flex:1 }}>
			<ModalPerso showModal={showModal} handlebutton={handlebutton} priorite={taskPriority} taskName={taskName} settaskName={settaskName} taskDescription={taskDescription} settaskDescription={settaskDescription} settaskPriority={settaskPriority} addItem={add}  ></ModalPerso>
			<View style={{ flex: 1, marginTop:50}}>
			<View style={{flexDirection:"row"  }}>
				<SearchBar settext={search=>setsearch(search)}/>      
			</View>
			<View style={stylesFinish.titleView}>
				<MaterialCommunityIcons name="checkbox-marked-circle" size={20} color="#F9AA33" />
				<Text style={stylesFinish.title}>Tâches Terminées  </Text>
			</View>
			{ ListStore.list.filter(t=>t.completed==true && t.title.includes(search)).sort(compare).map((todo,index)=>{
				return <Task key={index} completed={()=>completed(todo)} taskcompleted={todo.completed.toString()} priority={todo.priorite}  ondelete={()=>deletetask(todo)}  text={todo.title}></Task>
			})}
		</View>
		</View>
		);
}
const stylesFinish = StyleSheet.create({
	titleView:{
		paddingLeft:"2%",
		flexDirection:"row",
		alignItems:'center' 
	},
  title:{
		fontSize:30,
		fontWeight:'bold'
	}
});

