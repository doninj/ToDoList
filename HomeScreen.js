import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Button,Text,TouchableOpacity,Image,TextInput,ScrollView,KeyboardAvoidingView, KeyboardAvoidView,View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import {useState} from "react";
import Modal from 'react-native-modal';
import SearchBar from './HomeScreenComponent/SearchBar';
import styles from './Style';
import Task from './HomeScreenComponent/Task';
import { MaterialIcons } from '@expo/vector-icons'; 
import ModalPerso from './Modal'
import { add } from 'react-native-reanimated';
import {ListStore} from './TaskStore'

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

export default function HommeScreen({navigation:{navigate}}) {
  const [list, setList] = useState([]);
	const [taskName,settaskName] = useState("");
	const [taskDescription, settaskDescription] = useState("");
	const [taskPriority, settaskPriority] = useState("");
	const [taskstatus, settaskstatus] = useState("en cours");
	const [ischecked, setischecked] = useState(false);
	const [showModal, setShowModal] = useState(false);
	const inputRef = React.useRef()
	const [Refresh, setRefresh] = useState(false);

	React.useEffect(() => {
    setTimeout(() => {
			setRefresh(!Refresh);
			console.log("dsqdqsd") // forces a rerender
    }, 1000);
  }, [updateVal]);

  function add() {
		ListStore.addTodo(taskName,taskDescription,taskPriority,taskstatus)
		var obj=ListStore.getList
		const tmp = [...list,obj];
		setList(tmp);
		settaskName('')
		settaskPriority('')
		settaskDescription('')
	}

	function deletetask(todo) {
		ListStore.removeTodo(todo)
		var obj=ListStore.getList
		const tmp = [...list,obj];
		setList(tmp);
	}
	function completed(todo){
		ListStore.toggleTodo(todo)
		setischecked(true)
		console.log(ListStore.list)
	}
	const handlebutton=()=>{
		setShowModal(!showModal);
}
  return (
<View 
			style={{ flex:1 }}>
<ModalPerso  showModal={showModal} handlebutton={handlebutton} taskName={taskName} settaskName={settaskName} taskDescription={taskDescription} settaskDescription={settaskDescription} settaskPriority={settaskPriority} addItem={add}  ></ModalPerso>
    <View style={{ flex: 1, marginTop:50}}>
      <View style={{flexDirection:"row"  }}>
        <SearchBar/>
      </View>
      <View>
        <Text style={ styles.title }> Tâche à faire:</Text>
      </View>
			{ListStore.list.length ? (
        <ScrollView>
          <View>
					{ListStore.list.filter(t=>t.completed==false).slice(0).reverse().map((todo,index)=>{
    					return <Task key={index} ondelete={()=>deletetask(todo)} completed={()=>completed(todo)}  description={todo.description} text={todo.title}></Task>	
   		})}
      
          </View>
        </ScrollView>
        ) : (
          <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <Text>Aucune Tâches</Text>
          </View>
        )}
        <View style={{ marginTop:15 }}>
        </View>
        <ScrollView style={{ position:"absolute",bottom:0,right:0,marginBottom:30,marginRight:25}}>
        <Buttons press={handlebutton}></Buttons>
        </ScrollView>
    </View>
</View>
    
  );
}

